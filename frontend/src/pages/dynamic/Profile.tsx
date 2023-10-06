import { useEffect, useState } from 'react'
import { getMateriByID, getUserByParams } from '../../api/services';
import { useNavigate, useParams } from 'react-router-dom';
import MateriPreview from '../../components/Materi/MateriPreview';
import { TListMateri } from '../../types/Types';
import TransitionIn from '../../components/_shared/TransitionIn';
import { convertCreatedAt } from '../../utils/utils';
import profile from '../../assets/profile.png';

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listMateri, setListMateri] = useState<TListMateri[]>([]);
  const [user, setUser] = useState({
    username: '',
    email: '',
    img: '',
    createdAt: ''
  });

  // mendapatkan data berdasarkan loginID / parameter
  useEffect(() => {
    const fetchLoggedUserData = async () => {
      const res = await getUserByParams(true);
      if (res.status) {
        getMateri(res.data.UUID);
        setUser({
          username: res.data.user.username,
          email: res.data.user.email,
          img: res.data.user.img,
          createdAt: res.data.user.createdAt
        });
      } else {
        navigate('/');
      }
    }
    const fetchParamUserData = async (id: string) => {
      const res = await getUserByParams(null, id);
      if (res.status) {
        getMateri(res.data.id);
        setUser({
          username: res.data.value.username,
          email: res.data.value.email,
          img: res.data.value.img,
          createdAt: res.data.value.createdAt
        });
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
    if (res.status) {
      setListMateri(res.data);
    }
  }

  const profileCard = (
    <div className='p-4'>
      <div className='flex'>
        <div className=''>
          <img src={user.img || profile} className='h-36 w-36 object-cover rounded-full border' />
        </div>
        <div className='my-auto ms-8'>
          <div className='text-xl text-gray-800 font-semibold'>
            {user.username}
          </div>
          <div>
            Member Since: {convertCreatedAt(user.createdAt)}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <TransitionIn from='bottom'>
      <div className='w-full max-w-5xl transform ms-auto me-auto md:mt-20 mt-10 px-5'>
        <div className='rounded-md p-5 border border-gray-400 shadow-md'>

          {listMateri.length !== 0 ? (
            <div>
              <div className="text-center text-2xl font-semibold text-gray-700">
                Profile
              </div>

              <div className='mt-5'>
                {profileCard}
              </div>

              <div className='mt-5'>
                <div className='px-5 py-3 border border-gray-300 rounded-md'>
                  <div className='text-xl mb-2.5 font-medium text-gray-800'>
                    Materi
                  </div>
                  {listMateri?.map((materi, index) => (
                    <TransitionIn key={index} from='bottom' delay={index * 200}>
                      <MateriPreview
                        className='mb-5'
                        materi={materi}
                      />
                    </TransitionIn>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              User Not Found
            </div>
          )}


          {/* <div className='mt-5'>
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
          </div> */}



        </div>
      </div>
    </TransitionIn>
  )
}
export default Profile