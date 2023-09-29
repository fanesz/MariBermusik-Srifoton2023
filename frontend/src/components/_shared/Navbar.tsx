import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { Menu, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import LoginModal from "./LoginModal";
import { Dialog } from '@headlessui/react'

type TMenu = {
  nama: string,
  link: string
}

const Navbar = () => {

  const navbarMenu: TMenu[] = [
    { nama: "Home", link: "/" },
    { nama: "Category List", link: "/daftarKursus" },
    { nama: "Forum", link: "/forum" },
    { nama: "About", link: "/" }
  ]

  const [profileMenu, setProfileMenu] = useState<TMenu[]>([
    { nama: "Fanes Pratama", link: "/profile" },
    { nama: "Setting", link: "/setting" },
    { nama: "Logout", link: "/logout" }
  ])



  const isLogin = false;

  const [loginModal, setLoginModal] = useState(false);



  return (
    <nav className="flex justify-between bg-navbar_color p-4">

      <LoginModal isOpen={loginModal} setModal={setLoginModal} />

      {/* Logo */}
      <div className="flex justify-center text-center ms-5">
        <div className="mt-auto mb-auto hover:scale-110 transition duration-200">
          <Link to="/">
            <img src={logo} alt="MariBermusik Logo" className="2xl:h-[4.5vh] md:h-10 h-6" />
          </Link>
        </div>
        <div className="hidden xl:block 2xl:text-[1.5vw] md:text-2xl text-sm mt-auto mb-auto ms-4 font-bold cursor-pointer">
          <span className="text-green-900 hover:text-black duration-200">Mari</span>
          <span className="text-green-200 hover:text-green-300 duration-200">Bermusik</span>
          <span className="text-green-900 hover:text-black duration-200">.</span>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex gap-5 me-7">
        <div className="flex mt-auto mb-auto gap-2 2xl:text-[1vw] md:text-base font-medium">
          <Link to="/" className="navbar_menu_items">Home</Link>
          <Link to="/daftarKursus" className="navbar_menu_items">Category List</Link>
          <Link to="/forum" className="navbar_menu_items">Forum</Link>
          <Link to="/" className="navbar_menu_items">About</Link>
        </div>

        {/* before login */}
        <div className={`${isLogin ? 'hidden' : 'flex'} mt-auto mb-auto 2xl:text-[1vw] md:text-base font-medium navbar_menu_items -ms-3 bg-green-200 bg-opacity-70 cursor-pointer hover:bg-opacity-100 hover:bg-green-300`} onClick={() => setLoginModal(true)}>
          Login
        </div>

        {/* after login */}
        <div className={`${isLogin ? 'flex' : 'hidden'}`}>
          <Menu as="div" className="relative z-10">
            <Menu.Button as="button" className="">
              <img className="2xl:h-[4.5vh] md:h-12 hover:scale-105 transition-all" id="profile" src={profile} />
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

                  {profileMenu.map((item, index) => (

                    <Menu.Item key={index}>
                      <Link to={item.link} className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 cursor-pointer">
                        {item.nama}
                      </Link>
                    </Menu.Item>

                  ))}
                </Menu.Items>
              </div>
            </Transition>
          </Menu>
        </div>



      </div>

      {/* Menu Phone */}
      <div className="md:hidden">
        <Menu as="div" className="relative z-10">
          <Menu.Button className="me-3">
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
            <Menu.Items className="absolute shadow-lg bg-navbar_color bg-opacity-60 backdrop-blur-md -right-4 w-[20rem] border border-white border-opacity-30 rounded-md py-2">
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
                {profileMenu?.map((item, index) => (
                  <Menu.Item key={index}>
                    <Link to={item.link} className="block px-4 py-3 rounded-md truncate drop-shadow-sm hover:bg-white hover:bg-opacity-50 duration-200 text-center">
                      {item.nama}
                    </Link>
                  </Menu.Item>
                ))}
              </div>

            </Menu.Items>
          </Transition>
        </Menu>
      </div>

    </nav >
  )
}

export default Navbar