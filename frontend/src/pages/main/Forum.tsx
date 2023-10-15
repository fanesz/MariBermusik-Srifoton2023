import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import Input from "../../components/_shared/Input"
import TransitionIn from "../../components/_shared/TransitionIn"
import { useEffect, useState } from "react";
import { getPost, getUserByParams, userIsLogin } from "../../api/services";
import { TListPost } from "../../types/Types";
import PostPreview from "../../components/Forum/PostPreview";
import CreatePostButton from "../../components/Forum/CreatePostButton";

type TCurrentValue = {
  id: string,
  value: TListPost[]
};
interface IProps {
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
};
const Forum = (props: IProps) => {
  const { setLoginModal } = props;
  
  const [cariPost, setCariPost] = useState('');
  const [listPost, setListPost] = useState<TListPost[]>([]);
  const [currentUser, setCurrentUser] = useState<null | string>(null);

  // fetch data user yang sedang mengakses halaman
  const fetchCurrentUser = async () => {
    const isLogin = await userIsLogin();
    if (isLogin.status) {
      const UUID = await getUserByParams(true);
      if (UUID.status) {
        const currentUserUUID = UUID.data.UUID;
        setCurrentUser(currentUserUUID);
      };
    } else {
      setCurrentUser('-1');
    };
  };

  // fetch data semua postingan
  const fetchListPost = async () => {
    const res = await getPost();
    if (res.status) {
      const groupedListPost = res.data.reduce((ac: TListPost[], cv: TCurrentValue) => {
        return ac.concat(cv.value);
      }, []);
      const sortedByDateListPost = groupedListPost.sort((a: TListPost, b: TListPost) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      const sortedByUpvotesListPost = sortedByDateListPost.sort((a: TListPost, b: TListPost) => {
        return (b.upvotes.length - b.downvotes.length) - (a.upvotes.length - a.downvotes.length);
      });
      setListPost(sortedByUpvotesListPost);
    }
  };
  useEffect(() => {
    fetchListPost();
    fetchCurrentUser();
  }, []);

  // handle cari post
  const handleSetCariPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCariPost(e.target.value);
    setListPost(prev => {
      const filteredItem = prev.filter((post: TListPost) => post.title.toLowerCase().includes(e.target.value.toLowerCase()));
      const otherItem = prev.filter((post: TListPost) => !post.title.toLowerCase().includes(e.target.value.toLowerCase()));
      return filteredItem.concat(otherItem);
    });
  };

  return (
    <div className="w-full max-w-3xl transform ms-auto me-auto md:mt-20 mt-10">
      <div className="text-center text-2xl font-semibold text-gray-700">
        Forum
      </div>

      <div className="md:flex mt-5 justify-center">
        <div className="px-3 w-full">
          <TransitionIn>
            <div className="flex gap-3">
              <div className="w-full">
                <Input className='shadow-md' type='text' label='Cari Post' icon={<MagnifyingGlassIcon />}
                  value={cariPost} onChange={handleSetCariPost} />
              </div>
              <div className="w-2/6">
                <CreatePostButton currentUser={currentUser} setLoginModal={setLoginModal} />
              </div>
            </div>
          </TransitionIn>

          <div className="mt-5 w-full">
            {listPost?.map((item, index) => (
              <TransitionIn key={index} from='bottom' delay={index * 200}>
                <div className="mt-3">
                  <PostPreview prevPost={item} isFromModal={false} currentUser={currentUser} setParentPost={setListPost} setLoginModal={setLoginModal} />
                </div>
              </TransitionIn>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Forum