import { useEffect, useState } from 'react'
import { getMateriByID, getPostByUUID, getUserByParams, userIsLogin } from '../../api/services';
import { useNavigate, useParams } from 'react-router-dom';
import MateriPreview from '../../components/Materi/MateriPreview';
import { TListMateri, TListPost } from '../../types/Types';
import TransitionIn from '../../components/_shared/TransitionIn';
import { convertCreatedAt } from '../../utils/utils';
import profile from '../../assets/profile.png';
import PostPreview from '../../components/Forum/PostPreview';

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listMateri, setListMateri] = useState<TListMateri[]>([]);
  const [listPost, setListPost] = useState<TListPost[]>([]);
  const [currentUser, setCurrentUser] = useState('');
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
        setUser({
          username: res.data.user.username,
          email: res.data.user.email,
          img: res.data.user.img,
          createdAt: res.data.user.createdAt
        });
        getMateri(res.data.UUID);
        getPost(res.data.UUID);
      } else {
        navigate('/');
      }
    }
    const fetchParamUserData = async (id: string) => {
      const res = await getUserByParams(null, id);
      if (res.status) {
        setUser({
          username: res.data.value.username,
          email: res.data.value.email,
          img: res.data.value.img,
          createdAt: res.data.value.createdAt
        });
        getMateri(res.data.id);
        getPost(res.data.id);
      }
    }
    if (!id) {
      fetchLoggedUserData();
    } else {
      fetchParamUserData(id);
    }
  }, [id]);


  // fetch data user yang sedang mengakses halaman
  const fetchCurrentUser = async () => {
    const isLogin = await userIsLogin();
    if (isLogin.status) {
      const UUID = await getUserByParams(true);
      if (UUID.status) {
        const currentUserUUID = UUID.data.UUID;
        setCurrentUser(currentUserUUID);
      }
    }
  }
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  // fetch data materi berdasarkan UUID
  const getMateri = async (UUID: string) => {
    const res = await getMateriByID(UUID);
    if (res.status) setListMateri(res.data);
  }


  // fetch data post berdasarkan UUID
  const getPost = async (UUID: string) => {
    const res = await getPostByUUID(UUID);
    if (res.status) setListPost(res.data)
  }


  // Components
  const profileCard = (
    <div className='p-4'>
      <div className='md:flex text-center'>
        <div>
          <img src={user.img || profile} alt={user.username}
            className='h-36 w-36 object-cover rounded-full border mx-auto' />
        </div>
        <div className='md:ms-8 md:my-auto mt-2'>
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
  const listMateriOwned = (
    <div>
      {listMateri.length !== 0 && (

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
      )}
    </div>
  )
  const listPostOwned = listPost.length !== 0 && (
    <div className='mt-5'>
      <div className='px-5 py-3 border border-gray-300 rounded-md'>
        <div className='text-xl mb-2.5 font-medium text-gray-800'>
          Forum Post
        </div>
        {listPost?.map((post, index) => (
          <TransitionIn key={index} from='bottom' delay={index * 200}>
            <div className="mt-3">
              <PostPreview prevPost={post} isFromModal={false} currentUser={currentUser} setParentPost={setListPost} />
            </div>
          </TransitionIn>
        ))}
      </div>
    </div>
  )

  return (
    <TransitionIn from='bottom'>
      <div className='w-full max-w-5xl transform ms-auto me-auto md:mt-20 mt-10 px-5'>
        <div className='rounded-md p-5 border border-gray-400 shadow-md'>

          {user?.email !== '' ? (
            <div>
              <div className="text-center text-2xl font-semibold text-gray-700">
                Profile
              </div>

              <div className='mt-5'>
                {profileCard}
              </div>

              <div>
                {listMateriOwned}
              </div>

              <div>
                {listPostOwned}
              </div>

            </div>
          ) : (
            <div>
              User Not Found
            </div>
          )}

        </div>
      </div>
    </TransitionIn>
  )
}
export default Profile