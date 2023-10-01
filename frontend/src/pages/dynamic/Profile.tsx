import { Fragment, useEffect, useState } from 'react'
import { getLocalStorage } from '../../utils/LocalStorage';
import { getMateriByID, getUUIDByUsername, getUserByLoginID, userIsLogin } from '../../api/services';
import { useNavigate, useParams } from 'react-router-dom';
import MateriPreview from '../../components/Materi/MateriPreview';
import { TListMateri } from '../../types/Materi';


const Profile = () => {

  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [listMateri, setListMateri] = useState<TListMateri[]>([]);

  const { id } = useParams();

  // mendapatkan data berdasarkan loginID / parameter
  useEffect(() => {
    const fetchLoggedUserData = async () => {
      const res = await getUserByLoginID();
      if (res.status) {
        getMateri(res.data.UUID);
      } else {
        navigate('/');
      }
    }
    const fetchParamUserData = async (id: string) => {
      const res = await getUUIDByUsername(id);
      if (res.status) {
        getMateri(res.data);
      } else {
        setNotFound(true);
      }
    }
    if (!id) {
      fetchLoggedUserData();
    } else {
      fetchParamUserData(id);
    }
  }, []);

  const getMateri = async (UUID: string) => {
    const res = await getMateriByID(UUID);
    console.log(res.data);

    if (res.status) {
      setListMateri(res.data);
    }
  }



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
          {listMateri?.map((materi, index) => (
            <MateriPreview key={index}
              className='mt-5'
              materi={materi}
            />
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