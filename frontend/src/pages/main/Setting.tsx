import { useEffect, useState } from 'react'
import { getUserByParams, updateUser, userIsLogin } from '../../api/services';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import LoaderAnimation from '../../assets/LoaderAnimation';
import Input from '../../components/_shared/Input';
import TransitionIn from '../../components/_shared/TransitionIn';
import { IErrSuccessMsg } from '../../types/Types';
import ErrSuccessMsg from '../../components/_shared/ErrSuccessMsg';
import Dropzone from 'react-dropzone';
import { Tooltip } from '@material-tailwind/react';

type TUser = {
  email: string,
  username: string,
  terimaEmail: boolean,
  img: any
};
const Setting = () => {

  const navigate = useNavigate();
  const [hasChanged, setHasChanged] = useState(false);
  const [loader, setLoader] = useState({ updateSetting: false });
  const [user, setUser] = useState<TUser>({
    email: '',
    username: '',
    terimaEmail: false,
    img: ''
  });
  const [oldData, setOldData] = useState({
    username: '', terimaEmail: false, img: ''
  });
  const [errSuccessMsg, setErrSuccessMsg] = useState<IErrSuccessMsg>({
    type: "", message: ""
  });

  // pengecekan apakah user sudah login
  useEffect(() => {
    const fetchData = async () => {
      const res = await userIsLogin();
      if (!res.status) navigate('/');
    };
    fetchData();
  }, []);

  // mendapatkan data user yang login
  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserByParams(true);
      if (res.status) {
        setUser({
          email: res.data.user.email,
          username: res.data.user.username,
          terimaEmail: res.data.user.terimaEmail,
          img: res.data.user.img
        });
        setOldData({
          username: res.data.user.username,
          terimaEmail: res.data.user.terimaEmail,
          img: res.data.user.img
        });
      } else {
        navigate('/');
      };
    };
    fetchData();
  }, []);

  // handler untuk menampilkan pesan error/success
  const handleSetErrmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'error', message: msg });
  };
  const handleSetSuccessmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'success', message: msg });
  };

  // handler input username dan terima informasi melalui email
  const handleSetUsername = (e: any) => {
    setHasChanged(true);
    const input = e.target.value;
    if (/^[a-zA-Z0-9_]+$/.test(input) || input.length === 0) {
      setUser(prev => ({ ...prev, username: input }));
    } else {
      handleSetErrmsg("Username hanya boleh mengandung huruf, angka, dan underscore (_).");
    };
  };
  const handleUploadImage = async (acceptedFiles: any) => {
    if (acceptedFiles.length !== 1) return handleSetErrmsg('Hanya boleh mengupload 1 foto!');
    if (acceptedFiles[0].size > 10000000) return handleSetErrmsg('Ukuran foto maksimal 10MB!');
    if (!acceptedFiles[0].type.includes('image')) return handleSetErrmsg('Hanya boleh mengupload foto!');
    setHasChanged(true);
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = function () {
      setUser(prev => ({ ...prev, img: reader.result }));
    };
    reader.onerror = function (error) {
      console.log(error);
      handleSetErrmsg('Error saat melakukan upload foto');
    };
  };
  const handleTerimaEmail = () => {
    setUser(prev => ({
      ...prev, terimaEmail: !prev.terimaEmail
    }));
  };
  useEffect(() => {
    setHasChanged(
      oldData.username === user.username &&
        oldData.img === user.img &&
        oldData.terimaEmail === user.terimaEmail ? false : true
    );
  }, [user]);

  // handler update setting
  const handleUpdateSetting = async () => {
    setHasChanged(false);
    setLoader(prev => ({ ...prev, updateSetting: true }));
    const res = await updateUser(user.email, user.username, user.terimaEmail, user.img);
    setLoader(prev => ({ ...prev, updateSetting: false }));
    if (res.status) {
      setOldData({ username: user.username, terimaEmail: user.terimaEmail, img: user.img });
      handleSetSuccessmsg("Berhasil update setting")
    } else if (res.message) {
      handleSetErrmsg(res.message)
    } else {
      handleSetErrmsg("Gagal melakukan update!, harap melakukan login ulang.")
    };
  };

  return (
    <TransitionIn from='bottom'>
      <div className='w-full max-w-lg transform ms-auto me-auto mt-20'>
        <div className='rounded-md p-5 border border-gray-400 shadow-md'>

          <div className="text-center text-xl font-semibold text-gray-700">
            Setting
          </div>

          <div className='flex justify-center mt-6'>
            <div className='border border-black border-opacity-50 w-fit rounded-full'>
              <Dropzone onDrop={acceptedFiles => handleUploadImage(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <Tooltip content="change" placement="top" className="mt-5 bg-opacity-30">
                      <div {...getRootProps()} className='bg-gray-400 rounded-full'>
                        <input {...getInputProps()} />
                        <img src={user.img} className='w-24 h-24 rounded-full cursor-pointer hover:opacity-70 duration-200 object-cover shadow-md' />
                      </div>
                    </Tooltip>
                  </section>
                )}
              </Dropzone>
            </div>
          </div>

          <div className='mt-5'>
            <Input type='email' label='Email' icon={<EnvelopeIcon />} value={user.email} disabled={true} />
          </div>
          <div className='mt-4'>
            <Input type='text' label='Username' icon={<UserCircleIcon />}
              value={user.username} onChange={handleSetUsername} onKeyDown={handleUpdateSetting} />
          </div>
          <div className='mt-4 mb-2'>
            {/* <Input type='text' label='Foto Profil' icon={<UserCircleIcon />}
              value={user.img} onChange={handleSetFotoProfil} onKeyDown={handleUpdateSetting} /> */}
          </div>

          <ErrSuccessMsg errSuccessMsg={errSuccessMsg} setErrSuccessMsg={setErrSuccessMsg} />

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
              {loader.updateSetting ? <LoaderAnimation className='w-2 h-2' color='bg-white' /> : "Update Setting"}
            </button>
          </div>

        </div>



      </div>
    </TransitionIn>
  )
}

export default Setting