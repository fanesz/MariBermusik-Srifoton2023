import { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';
import { getUserByLoginID, updateUser, userIsLogin } from '../api/services';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import LoaderAnimation from '../assets/LoaderAnimation';

type TUser = {
  email: string,
  username: string,
  terimaEmail: boolean,
}
const Setting = () => {

  const navigate = useNavigate();
  const [errmsg, setErrmsg] = useState("");
  const [successmsg, setSuccessmsg] = useState("");
  const [user, setUser] = useState<TUser>({
    email: '',
    username: '',
    terimaEmail: false,
  });
  const [loader, setLoader] = useState({
    updateSetting: false
  });
  const [hasChanged, setHasChanged] = useState(false);
  const [oldData, setOldData] = useState({ username: '', terimaEmail: false });


  // pengecekan apakah user sudah login
  useEffect(() => {
    const fetchData = async () => {
      const res = await userIsLogin();
      if (!res.status) navigate('/');
    }
    fetchData();
  }, []);


  // mendapatkan username dari user yang login
  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserByLoginID();
      if (res.status) {
        setUser({
          email: res.data.user.email,
          username: res.data.user.username,
          terimaEmail: res.data.user.terimaEmail
        });
        setOldData({ username: res.data.user.username, terimaEmail: res.data.user.terimaEmail });
      } else {
        navigate('/');
      }
    }
    fetchData();
  }, []);


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


  // handler input username dan terima informasi melalui email
  const handleSetUsername = (e: any) => {
    setHasChanged(true);
    const input = e.target.value;
    if (/^[a-zA-Z0-9_]+$/.test(input) || input.length === 0) {
      setUser(prev => ({ ...prev, username: input }));
      if (input === oldData.username && oldData.terimaEmail === user.terimaEmail) setHasChanged(false);
    } else {
      handleSetErrmsg("Username hanya boleh mengandung huruf, angka, dan underscore (_).");
    }
  }
  const handleTerimaEmail = () => {
    setUser(prev => ({ ...prev, terimaEmail: !prev.terimaEmail }));
    if(oldData.username !== user.username) return setHasChanged(true);
    setHasChanged(oldData.terimaEmail !== !user.terimaEmail ? true : false);
  }


  // handler update setting
  const handleUpdateSetting = async () => {
    setHasChanged(false);
    setLoader(prev => ({ ...prev, updateSetting: true }));
    const res = await updateUser(user.email, user.username, user.terimaEmail);
    setLoader(prev => ({ ...prev, updateSetting: false }));
    if (res.status) {
      setOldData({ username: user.username, terimaEmail: user.terimaEmail });
      handleSetSuccessmsg("Berhasil update setting")
    } else if (res.message) {
      handleSetErrmsg(res.message)
    } else {
      handleSetErrmsg("Gagal melakukan update!, harap melakukan login ulang.")
    }
  }

  return (
    <div className='w-full max-w-lg transform ms-auto me-auto mt-20'>
      <div className='rounded-md p-5 border border-gray-400 shadow-md'>

        <div className="text-center text-xl font-semibold text-gray-700">
          Setting
        </div>

        <div className='mt-5'>
          <EnvelopeIcon className='h-5 absolute mt-3 ms-3 opacity-50' />
          <input type='email' spellCheck={false}
            className='w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-400 ps-10 text-gray-700 bg-gray-300'
            placeholder='Email'
            value={user.email} disabled />
        </div>

        <div className='mt-4 mb-2'>
          <UserCircleIcon className='h-5 absolute mt-3 ms-3 opacity-50' />
          <input type='text' spellCheck={false}
            className='w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-400 ps-10'
            placeholder='Username'
            value={user.username} onChange={handleSetUsername} />
        </div>

        <div className={`text-sm text-red-400 ${errmsg.length > 0 ? 'block' : 'hidden'}`}>
          {errmsg}
        </div>
        <div className={`text-sm text-green-500 ${successmsg.length > 0 ? 'block' : 'hidden'}`}>
          {successmsg}
        </div>

        <div className='mt-4 flex cursor-pointer'>
          <input type='checkbox'
            className='rounded focus:ring-offset-0 focus:ring-0 mt-0.5 cursor-pointer'
            checked={user.terimaEmail} onChange={handleTerimaEmail} />
          <label
            className='ms-2 text-gray-700 text-sm hover:text-gray-800 cursor-pointer'
            onClick={handleTerimaEmail}>
            Saya ingin terima informasi terbaru terkait MariBermusik melalui Email.
          </label>
        </div>

        <div className='mt-5'>
          <button
            className={`w-full p-2 rounded-lg text-white font-medium focus:outline-none h-10 ${hasChanged ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-500 hover:bg-gray-600'}`}
            onClick={handleUpdateSetting} disabled={!hasChanged}>
            {loader.updateSetting ? <LoaderAnimation className='w-2 h-2' /> : "Update Setting"}
          </button>
        </div>

      </div>
    </div>
  )
}
export default Setting