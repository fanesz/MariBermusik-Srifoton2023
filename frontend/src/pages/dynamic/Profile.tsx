import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getUserByParams } from '../../api/services';
import { TProfileUser } from '../../types/Types';
import TransitionIn from '../../components/_shared/TransitionIn';
import OwnedMateri from '../../components/Profile/OwnedMateri';
import OwnedPost from '../../components/Profile/OwnedPost';
import ProfileCard from '../../components/Profile/ProfileCard';

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<TProfileUser>({
    UUID: '', username: '', email: '', img: '', createdAt: ''
  });

  // mendapatkan data berdasarkan loginID / parameter
  useEffect(() => {
    const fetchData = async () => {
      const res = id ? await getUserByParams(null, id) : await getUserByParams(true);
      if (res.status) {
        const userObj = id ? res.data.value : res.data.user;
        const userUUID = id ? res.data.id : res.data.UUID
        setUser({
          UUID: userUUID,
          username: userObj.username,
          email: userObj.email,
          img: userObj.img,
          createdAt: userObj.createdAt
        });
      } else {
        navigate('/');
      }
    };
    fetchData();
  }, [id]);

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
                <ProfileCard user={user} />
              </div>

              <div>
                <OwnedMateri UUID={user.UUID} />
              </div>

              <div>
                <OwnedPost UUID={user.UUID} />
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