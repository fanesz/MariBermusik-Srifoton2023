import { TProfileUser } from "../../types/Types"
import profile from '../../assets/profile.png';
import { convertCreatedAt } from "../../utils/utils";

interface TProps {
  user: TProfileUser
};
const ProfileCard = (props: TProps) => {
  const { user } = props;

  return (
    <div className='p-4'>
      <div className='md:flex md:text-left text-center'>
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
}

export default ProfileCard