import { useEffect, useState } from "react";
import { TListPost } from "../../types/Types";
import PostPreview from "../Forum/PostPreview"
import TransitionIn from "../_shared/TransitionIn"
import { getPostByUUID, getUserByParams, userIsLogin } from "../../api/services";
type TProps = {
  UUID: string
}
const OwnedPost = (props: TProps) => {
  const { UUID } = props;

  const [listPost, setListPost] = useState<TListPost[]>([]);
  const [currentUser, setCurrentUser] = useState('');

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
  // fetch data post berdasarkan UUID
  const getPost = async (UUID: string) => {
    const res = await getPostByUUID(UUID);
    if (res.status) setListPost(res.data)
  }

  useEffect(() => {
    fetchCurrentUser();
    getPost(UUID);
  }, []);




  return (
    <div>
      {listPost.length !== 0 && (
        <div className='mt-5'>
          <div className='px-5 py-3 border border-gray-300 rounded-md'>
            <div className='text-xl mb-2.5 font-medium text-gray-800'>
              Forum Post
            </div>
            {listPost?.map((post, index) => (
              <TransitionIn key={index} from='bottom' delay={index * 200}>
                <div className="mt-3">
                  <PostPreview
                    prevPost={post} isFromModal={false}
                    currentUser={currentUser} setParentPost={setListPost} />
                </div>
              </TransitionIn>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OwnedPost