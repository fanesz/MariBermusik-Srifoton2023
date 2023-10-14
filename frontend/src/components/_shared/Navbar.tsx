import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.png";
import { Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { removeLocalStorage } from "../../utils/LocalStorage";
import { getUserByParams, setLogout } from "../../api/services";
import { TUser } from "../../types/Types";

type TMenu = {
  nama: string,
  link: string
};
interface IProps {
  isLogin: boolean,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
};
const Navbar = (props: IProps) => {
  const { isLogin, setIsLogin, setLoginModal } = props;

  const navigate = useNavigate();
  const [user, setUser] = useState<TUser>({} as TUser);

  const navbarMenu: TMenu[] = [
    { nama: "Home", link: "/" },
    { nama: "Materi", link: "/materi" },
    { nama: "Forum", link: "/forum" }
  ];

  // mendapatkan data dari user yang login
  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserByParams(true);
      if (res.status) {
        setUser({
          email: res.data.user.email,
          password: res.data.user.password,
          username: res.data.user.username,
          terimaEmail: res.data.user.terimaEmail,
          img: res.data.user.img ? res.data.user.img : profile
        });
      };
    };
    if (isLogin) fetchData();
  }, [isLogin]);

  // handler untuk logout
  const handleLogout = async () => {
    await setLogout();
    removeLocalStorage("loginID");
    setIsLogin(false);
    navigate('/');
  };

  // Components
  const Logo = (
    <div className="flex justify-center text-center ms-5">
      <div className="mt-auto mb-auto hover:scale-110 transition duration-200">
        <Link to="/">
          <img src={logo} alt="MariBermusik Logo" className="2xl:h-[4.5vh] md:h-10 h-6 w-auto" />
        </Link>
      </div>
      <div className="hidden xl:block 2xl:text-[1.5vw] md:text-2xl text-sm mt-auto mb-auto ms-4 font-bold cursor-pointer">
        <span className="text-green-900 hover:text-black duration-200">Mari</span>
        <span className="text-green-200 hover:text-green-300 duration-200">Bermusik</span>
        <span className="text-green-900 hover:text-black duration-200">.</span>
      </div>
    </div>
  );
  const Menu_Phone = (
    <div className="md:hidden">
      <Menu as="div" className="relative z-10">
        <Menu.Button className="me-3" aria-label="menu">
          <Bars3Icon className="h-9" />
        </Menu.Button>
        <Transition
          enter="transition-transform origin-right duration-400"
          enterFrom="scale-y-0 opacity-0"
          enterTo="scale-y-100 opacity-100"
          leave={`transition-transform origin-down duration-300`}
          leaveFrom="scale-y-100 opacity-100"
          leaveTo="scale-y-0 opacity-100"
        >
          <Menu.Items className="absolute shadow-lg bg-navbar_color -right-4 w-[20rem] border border-white border-opacity-30 rounded-md py-2">
            <div>
              {navbarMenu.map((item, index) => (
                <Menu.Item key={index}>
                  <Link to={item.link} className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 text-center">
                    {item.nama}
                  </Link>
                </Menu.Item>
              ))}
            </div>

            {/* before login */}
            <div className={`${isLogin ? 'hidden' : 'block'}`}>
              <div className="border-t border-white border-opacity-50">
                <Menu.Item>
                  {({ close }) => (
                    <div className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 text-center" onClick={() => { setLoginModal(true); close; }}>
                      Login
                    </div>
                  )}
                </Menu.Item>
              </div>
            </div>

            {/* after login */}
            <div className={`${isLogin ? 'block' : 'hidden'} border-t border-white border-opacity-50`}>
              <Menu.Item>
                <Link to={"/profile"} className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 cursor-pointer text-center">
                  {user.username}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/setting"} className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 cursor-pointer text-center">
                  Setting
                </Link>
              </Menu.Item>
              <Menu.Item>
                <div
                  className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 cursor-pointer text-center"
                  onClick={handleLogout}>
                  Logout
                </div>
              </Menu.Item>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
  const Menu_Desktop = (
    <div className="hidden md:flex gap-5 me-7">
      <div className="flex mt-auto mb-auto gap-2 2xl:text-[1vw] md:text-base font-medium">
        {navbarMenu.map((item, index) => (
          <Link to={item.link} className="navbar_menu_items" key={index}>
            {item.nama}
          </Link>
        ))}
      </div>

      {/* before login */}
      <div className={`${isLogin ? 'hidden' : 'flex'} mt-auto mb-auto 2xl:text-[1vw] md:text-base font-medium navbar_menu_items -ms-3 bg-green-200 bg-opacity-70 cursor-pointer hover:bg-opacity-100 hover:bg-green-300`} onClick={() => setLoginModal(true)}>
        Login
      </div>

      {/* after login */}
      <div className={`${isLogin ? 'flex' : 'hidden'}`}>
        <Menu as="div" className="relative z-10">
          <Menu.Button as="button" aria-label="profile dropdown">
            <img src={user.img} alt={user.username}
            className="2xl:h-[4.5vh] 2xl:w-[4.5vh] md:h-12 md:w-12 hover:scale-105 transition-all  rounded-full" />
          </Menu.Button>
          <Transition
            enter="transition-transform origin-top duration-400"
            enterFrom="scale-y-0 opacity-0"
            enterTo="scale-y-100 opacity-100"
            leave={`transition-transform origin-down duration-300`}
            leaveFrom="scale-y-100 opacity-100"
            leaveTo="scale-y-0 opacity-100"
          >
            <div className="absolute bg-gray-100 bg-opacity-50 rounded-md py-1 right-0 w-44">
              <Menu.Items className="">
                <Menu.Item>
                  <Link to={"/profile"} className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 cursor-pointer">
                    {user.username}
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={"/setting"} className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 cursor-pointer">
                    Setting
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <div
                    className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 cursor-pointer"
                    onClick={handleLogout}>
                    Logout
                  </div>
                </Menu.Item>
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>
    </div>
  );

  return (
    <nav className="flex justify-between bg-navbar_color p-4">

      {Logo}
      {Menu_Desktop}
      {Menu_Phone}

    </nav >
  )
}

export default Navbar