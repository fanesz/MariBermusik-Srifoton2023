import { Dialog, Tab, Transition } from '@headlessui/react';
import { EnvelopeIcon, KeyIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dispatch, Fragment, useState } from 'react';
import { createUser, sendVerificationCode, setLogin } from '../../api/services';
import LoaderAnimation from '../../assets/LoaderAnimation';
import { removeLocalStorage, setLocalStorage } from '../../utils/LocalStorage';
import { Alert } from '@material-tailwind/react';
import Input from './Input';
const LoginModal = (props: { isOpen: boolean, setModal: Dispatch<boolean>, setIsLogin: Dispatch<boolean> }) => {

  const { isOpen, setModal, setIsLogin } = props;

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(true);
  const [terimaEmail, setTerimaEmail] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [successmsg, setSuccessmsg] = useState("");
  const [lupaPassword, setLupaPassword] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [loader, setLoader] = useState({
    login: false,
    signup: false,
    lupaPassword: false
  });

  // handler untuk menampilkan pesan error/success
  const handleSetErrmsg = (msg: string) => {
    if (errmsg.length > 0) return;
    setErrmsg(msg);
    setTimeout(() => {
      setErrmsg("");
    }, 3000);
  }
  const handleSetSuccessmsg = (msg: string) => {
    if (successmsg.length > 0) return;
    setSuccessmsg(msg);
    setTimeout(() => {
      setSuccessmsg("");
    }, 3000);
  }


  // event untuk menghapus loginID dari localStorage ketika tab/browser ditutup
  window.addEventListener("beforeunload", () => {
    if (!rememberme) {
      removeLocalStorage("loginID");
    }
  });


  // handler untuk user input
  const handleSetEmail = (e: any) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9@.]+$/.test(input) || input.length === 0) {
      setEmail(input);
    } else {
      handleSetErrmsg("Email hanya boleh mengandung huruf, angka, titik, dan symbol (@).");
    }
  }
  const handleSetPassword = (e: any) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9!@#$%^&*]+$/.test(input) || input.length === 0) {
      setPassword(input);
    } else {
      handleSetErrmsg("Password hanya boleh mengandung huruf, angka, dan symbol (!@#$%^&*).");
    }
  }
  const handleSetUsername = (e: any) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9_]+$/.test(input) || input.length === 0) {
      setUsername(input);
    } else {
      handleSetErrmsg("Username hanya boleh mengandung huruf, angka, dan underscore (_).");
    }
  }
  const handleRememberme = () => setRememberme(prev => !prev);
  const handleTerimaEmail = () => setTerimaEmail(prev => !prev);


  // handler untuk menampilkan modal lupa password
  const handleLupaPasswordModal = (inp: boolean) => setLupaPassword(inp);


  // handler untuk login, signup, dan lupa password
  const handleSignIn = async () => {
    setLoader(prev => ({ ...prev, login: true }));
    const res = await setLogin(email, password);
    setLoader(prev => ({ ...prev, login: false }));
    if (res.status) {
      setLocalStorage("loginID", res.loginID);
      setModal(false);
      setIsLogin(true);
      setEmail("");
      setPassword("");
    } else {
      handleSetErrmsg(res.message);
    }
  }
  const handleSignUp = async () => {
    // validator
    if (!/^[a-zA-Z0-9.].*[@].*[a-zA-Z.]+$/.test(email)) return handleSetErrmsg("Email tidak valid!");
    if (password.length < 6) return handleSetErrmsg("Password minimal 6 karakter!");
    if (username.length < 3) return handleSetErrmsg("Username minimal 3 karakter!");

    // send data
    setLoader(prev => ({ ...prev, signup: true }));
    const res = await createUser(email, password, username, terimaEmail);
    setLoader(prev => ({ ...prev, signup: false }));
    if (res.status) {
      handleSetSuccessmsg("Akun berhasil dibuat!");
      setCurrentTab(0);
      setEmail("");
      setPassword("");
      setUsername("");
    } else {
      handleSetErrmsg("Email sudah terdaftar!");
    }
  }
  const handleLupaPassword = async () => {
    // validator
    if (!email.includes("@")) return handleSetErrmsg("Email tidak valid!");

    // send data
    setLoader(prev => ({ ...prev, lupaPassword: true }));
    const res = await sendVerificationCode(email);
    setLoader(prev => ({ ...prev, lupaPassword: false }));
    if (res.status) {
      handleSetSuccessmsg("Kode verifikasi berhasil dikirim!");
      setTimeout(() => {
        handleLupaPasswordModal(false);
      }, 3000);
      setEmail("");
    } else {
      handleSetErrmsg("Email tidak terdaftar!");
    }
  }


  // Components
  const Tab_SignIn = (
    <Tab.Panel className="focus:outline-none">
      <div className=''>
        <Input type='email' label='Email' icon={<EnvelopeIcon />}
          value={email} onChange={handleSetEmail} onKeyDown={handleSignIn} />
      </div>
      <div className='mt-4 mb-2'>
        <Input type='password' label='Password' icon={<KeyIcon />}
          value={password} onChange={handleSetPassword} onKeyDown={handleSignIn} />
      </div>
      {errmsg.length > 0 && <Alert className='w-full p-0 bg-transparent text-red-400 text-sm'>{errmsg}</Alert>}
      {successmsg.length > 0 && <Alert className='w-full p-0 bg-transparent text-green-500 text-sm'>{successmsg}</Alert>}
      <div className='mt-4'>
        <button
          className='w-full bg-orange-500 hover:bg-orange-600 p-2 rounded-lg text-white font-medium focus:outline-none h-10'
          onClick={handleSignIn}>
          {loader.login ? <LoaderAnimation className='w-2 h-2' color='bg-white' /> : "Sign In"}
        </button>
      </div>
      <div className='mt-3 flex justify-between'>
        <div className='cursor-pointer'>
          <input type='checkbox'
            className='rounded focus:ring-offset-0 focus:ring-0 cursor-pointer'
            checked={rememberme} onChange={handleRememberme} />
          <label
            className='ms-2 text-gray-700 text-sm hover:text-gray-800 cursor-pointer'
            onClick={handleRememberme}>
            Remember Me
          </label>
        </div>
        <div
          className='text-gray-700 text-sm hover:text-gray-800 cursor-pointer'
          onClick={() => handleLupaPasswordModal(true)}>
          Lupa Password?
        </div>
      </div>
    </Tab.Panel>
  )
  const Tab_SignUp = (
    <Tab.Panel className="focus:outline-none">
      <div>
        <Input type='email' label='Email' icon={<EnvelopeIcon />}
          value={email} onChange={handleSetEmail} onKeyDown={handleSignUp} />
      </div>
      <div className='mt-4'>
        <Input type='text' label='Username' icon={<UserCircleIcon />}
          value={username} onChange={handleSetUsername} onKeyDown={handleSignUp} />
      </div>
      <div className='mt-4 mb-2'>
        <Input type='password' label='Password' icon={<KeyIcon />}
          value={password} onChange={handleSetPassword} onKeyDown={handleSignUp} />
      </div>
      {errmsg.length > 0 && <Alert className='w-full p-0 bg-transparent text-red-400 text-sm'>{errmsg}</Alert>}
      {successmsg.length > 0 && <Alert className='w-full p-0 bg-transparent text-green-500 text-sm'>{successmsg}</Alert>}
      <div className='mt-4 flex cursor-pointer'>
        <input type='checkbox'
          className='rounded focus:ring-offset-0 focus:ring-0 mt-0.5 cursor-pointer'
          checked={terimaEmail} onChange={handleTerimaEmail} />
        <label
          className='ms-2 text-gray-700 text-sm hover:text-gray-800 cursor-pointer'
          onClick={handleTerimaEmail}>
          Saya ingin terima informasi terbaru terkait MariBermusik melalui Email.
        </label>
      </div>
      <div className='mt-5'>
        <button
          className='w-full bg-gray-500 hover:bg-gray-600 p-2 rounded-lg text-white font-medium focus:outline-none  h-10'
          onClick={handleSignUp}>
          {loader.signup ? <LoaderAnimation className='w-2 h-2' /> : "Sign Up"}
        </button>
      </div>
    </Tab.Panel>
  )
  const Login_Logout_Tab = (
    <Tab.Group defaultIndex={0} selectedIndex={currentTab} onChange={setCurrentTab} as="div" className="border-x border-b border-gray-300">
      <Tab.List className="flex">
        <Tab className={({ selected }) =>
          `w-full p-2 focus:outline-none font-medium text-gray-800 ${selected ? 'bg-white border-t-2 border-orange-600' : 'bg-gray-300'}`}>Sign In</Tab>
        <Tab className={({ selected }) =>
          `w-full p-2 focus:outline-none font-medium text-gray-800 ${selected ? 'bg-white border-t-2 border-orange-600' : 'bg-gray-300'}`}>Sign Up</Tab>
      </Tab.List>
      <Tab.Panels className="p-5 pt-7 bg-white">

        {/* Sign In */}
        {Tab_SignIn}

        {/* Sign Up */}
        {Tab_SignUp}

      </Tab.Panels>
    </Tab.Group>
  )
  const lupa_password_modal = (
    <div>
      <div className='mt-4'>
        <Input type='email' label='Email' icon={<EnvelopeIcon />}
          value={email} onChange={handleSetEmail} onKeyDown={handleSignUp} />
      </div>
      <div
        className='text-gray-700 text-sm hover:text-gray-800 cursor-pointer mt-1 text-right me-1 mb-2'
        onClick={() => handleLupaPasswordModal(false)}>
        Sign In?
      </div>
      <div className={`text-sm text-red-400 ${errmsg.length > 0 ? 'block' : 'hidden'}`}>
        {errmsg}
      </div>
      <div className={`text-sm text-green-500 ${successmsg.length > 0 ? 'block' : 'hidden'}`}>
        {successmsg}
      </div>
      <div className='mt-4'>
        <button
          className='w-full bg-orange-500 hover:bg-orange-600 p-2 rounded-lg text-white font-medium focus:outline-none h-10'
          onClick={handleLupaPassword}>
          {loader.lupaPassword ? <LoaderAnimation className='w-2 h-2' /> : "Kirim kode verifikasi"}
        </button>
      </div>
    </div>
  )

  return (
    <Transition
      appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { setModal(false); setTimeout(() => { setLupaPassword(false); }, 300); }}>
        <Transition.Child as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-200 px-5 py-4 text-left align-middle shadow-xl transition-all">

                <Dialog.Title className="text-lg text-center font-semibold text-gray-600">
                  <div className="flex justify-between">
                    <div className='w-full'>
                      {lupaPassword ? "Lupa Password" : "Login untuk melanjutkan"}
                    </div>
                    <div className='mt-auto mb-auto'>
                      <XMarkIcon className="h-5 cursor-pointer hover:bg-gray-300 rounded" onClick={() => setModal(false)} />
                    </div>
                  </div>
                </Dialog.Title>

                <div className="rounded-md mt-2 bg-white bg-opacity-70 p-5 ">
                  <div>
                    {lupaPassword ? lupa_password_modal : Login_Logout_Tab}
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}



export default LoginModal