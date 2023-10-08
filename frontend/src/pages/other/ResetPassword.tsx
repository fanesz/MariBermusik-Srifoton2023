import { KeyIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import LoaderAnimation from "../../assets/LoaderAnimation";
import { resetPassword, validatorVerificationCode } from "../../api/services";
import { Alert } from "@material-tailwind/react";
import Input from "../../components/_shared/Input";
import TransitionIn from "../../components/_shared/TransitionIn";
import { IErrSuccessMsg } from "../../types/Types";
import ErrSuccessMsg from "../../components/_shared/ErrSuccessMsg";

const ResetPassword = () => {

  const navigate = useNavigate();
  const id = useParams();
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [errSuccessMsg, setErrSuccessMsg] = useState<IErrSuccessMsg>({
    type: "",
    message: ""
  });
  const [loader, setLoader] = useState({
    validasiKode: true,
    ubahPassword: false
  });

  // melakukan validasi terhadap verifikasi ID
  useEffect(() => {
    const verificationID: string = id.id || '';
    if (verificationID.length < 1) return navigate("/");
    const fetchData = async (verificationID: string) => {
      const res = await validatorVerificationCode(verificationID);
      if (res.status) {
        setIsVerified(true);
        setLoader(prev => ({ ...prev, validasiKode: false }))
        setEmail(res.email);
      } else {
        setLoader(prev => ({ ...prev, validasiKode: false }))
      }
    }
    fetchData(verificationID || '');
  }, [])


  // handler untuk menampilkan pesan error/success
  const handleSetErrmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'error', message: msg });
  }
  const handleSetSuccessmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'success', message: msg });
  }


  // handler untuk input password dan konfirmasi password
  const handleSetPassword = (e: any) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9!@#$%^&*]+$/.test(input) || input.length === 0) {
      setPassword(input);
    } else {
      handleSetErrmsg("Password hanya boleh mengandung huruf, angka, dan symbol (!@#$%^&*).");
    }
  }
  const handleSetKonfirmasiPassword = (e: any) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9!@#$%^&*]+$/.test(input) || input.length === 0) {
      setKonfirmasiPassword(input);
    } else {
      handleSetErrmsg("Password hanya boleh mengandung huruf, angka, dan symbol (!@#$%^&*).");
    }
  }


  // handle reset password
  const handleResetPassword = async () => {
    if (password.length < 6) return handleSetErrmsg("Password minimal 6 karakter!");
    if (password !== konfirmasiPassword) return handleSetErrmsg("Konfirmasi Password tidak sesuai!")
    setLoader(prev => ({ ...prev, login: true }));
    const res = await resetPassword(email, password);
    setLoader(prev => ({ ...prev, login: false }));
    if (res.status) {
      handleSetSuccessmsg("Berhasil merubah password!, redirect dalam 3s...");
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      setIsVerified(false);
    }
  }


  // Components
  const Form_Reset_Password = (
    <div className={`${isVerified ? 'block' : 'hidden'}`}>
      <div className='mt-6 mb-2'>
        <Input type='password' label='Password' icon={<KeyIcon />}
          value={password} onChange={handleSetPassword} onKeyDown={handleResetPassword} />
      </div>

      <div className='mt-4 mb-2'>
        <Input type='password' label='Konfirmasi Password' icon={<KeyIcon />}
          value={konfirmasiPassword} onChange={handleSetKonfirmasiPassword} onKeyDown={handleResetPassword} />
      </div>

      <ErrSuccessMsg errSuccessMsg={errSuccessMsg} setErrSuccessMsg={setErrSuccessMsg} />

      <div className='mt-4'>
        <button
          className='w-full bg-orange-500 hover:bg-orange-600 p-2 rounded-lg text-white font-medium focus:outline-none h-10'
          onClick={handleResetPassword}>
          {loader.ubahPassword ? <LoaderAnimation className='w-2 h-2' /> : "Ubah Password"}
        </button>
      </div>
    </div>
  )

  return (
    <TransitionIn from='bottom'>
      <div className="w-full max-w-lg transform ms-auto me-auto mt-20">
        <div className="rounded-md p-5 border border-gray-400 shadow-md">

          <div className="text-center text-xl font-semibold text-gray-700">
            Reset Password
          </div>

          <div className={`${!loader.validasiKode ? 'block' : 'hidden'}`}>
            {Form_Reset_Password}

            <div className={`${isVerified ? 'hidden' : 'block'}`}>
              <div className="text-center mt-5 text-red-500 text-lg font-semibold">
                Verification Code INVALID, please resubmit.
              </div>
            </div>
          </div>

          <div className={`${!loader.validasiKode ? 'hidden' : 'block'} mt-5`}>
            <LoaderAnimation className='w-2 h-2' color='bg-black' />
          </div>

        </div>
      </div>
    </TransitionIn>

  )
}
export default ResetPassword