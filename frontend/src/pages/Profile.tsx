import { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';
import { getUserByLoginID, userIsLogin } from '../api/services';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({});


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
        setUser(res.data);
        console.log(res.data);
      } else {
        navigate('/');
      }
    }
    fetchData();
  }, []);

  return (
    <div className='w-full max-w-5xl transform ms-auto me-auto mt-20'>
      <div className='rounded-md p-5 border border-gray-400 shadow-md'>

        <div className="text-center text-xl font-semibold text-gray-700">
          Profile
        </div>

        <div className='mt-5'>
          <div className='border border-gray-400 rounded-md p-4 shadow-sm'>
            awd
          </div>
        </div>

        <div className='mt-5'>
          <div className='text-lg text-gray-800'>
            Materiku
          </div>
          {[...Array(3)].map((m, i) => (
            <div className='border border-gray-400 rounded-md p-4 shadow-sm mt-2'>
              awd
            </div>
          ))}
        </div>

        <div className='mt-5'>
          <div className='text-lg text-gray-800'>
            Forum Postku
          </div>
          <div>
            {[...Array(3)].map((m, i) => (
              <div className='border border-gray-400 rounded-md p-4 shadow-sm mt-2'>
                awd
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
  )
}
export default Profile