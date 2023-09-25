import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { Menu, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-navbar_color p-4">

      {/* Menu Phone */}
      <div className="md:hidden">
        <Menu as="div" className="relative">
          <Menu.Button>
            <Bars3Icon className="h-9" />
          </Menu.Button>
          <Transition
            enter="transition-transform origin-top duration-400"
            enterFrom="scale-y-0 opacity-0"
            enterTo="scale-y-100 opacity-100"
            leave={`transition-transform origin-down duration-300`}
            leaveFrom="scale-y-100 opacity-100"
            leaveTo="scale-y-0 opacity-100"
          >
            <Menu.Items className="absolute w-dropdown_navbar bg-navbar_color p-4 left-0 mt-8 bg-opacity-90 border border-gray-300 rounded-md py-1">
              <Menu.Item as="div" className="border-t border-opacity-50 px-4 py-1 truncate">
              <div>
                <ul className="text-center">
                  {/* nav item */}
                  <ul className="flex flex-col gap-5 my-3">
                    <Link to="/" className="navbar_menu_items"><li>Home</li></Link>
                    <Link to="/daftarKursus" className="navbar_menu_items"><li>Category List</li></Link>
                    <Link to="/forum" className="navbar_menu_items"><li>Forum</li></Link>
                    <Link to="/" className="navbar_menu_items"><li>About</li></Link>
                  </ul>
                </ul>
              </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      
      {/* Logo */}
      <div className="flex justify-center text-center ms-5">
        <div className="mt-auto mb-auto hover:scale-110 transition">
          <Link to="/">
            <img src={logo} alt="MariBermusik Logo" className="md:h-12 h-6" />
          </Link>
        </div>
        <div className="hidden xl:block text-3xl mt-auto mb-auto ms-4 font-bold cursor-pointer">
          <span className="text-green-900 hover:text-black duration-200">Mari</span>
          <span className="text-green-200 hover:text-green-300 duration-200">Bermusik</span>
          <span className="text-green-900 hover:text-black duration-200">.</span>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex me-7">
        <div className="flex mt-auto mb-auto gap-6 text-lg font-medium">
          <Link to="/" className="navbar_menu_items">Home</Link>
          <Link to="/daftarKursus" className="navbar_menu_items">Category List</Link>
          <Link to="/forum" className="navbar_menu_items">Forum</Link>
          <Link to="/" className="navbar_menu_items">About</Link>
        </div>
      </div>

      <div className="flex me-5">
          <Menu as="div" className="relative">
            <Menu.Button as="button" className="">
              <img className="h-12 hover:scale-105 transition-all" id="profile" src={profile} />
            </Menu.Button>
            <Transition
              enter="transition-transform origin-top duration-400"
              enterFrom="scale-y-0 opacity-0"
              enterTo="scale-y-100 opacity-100"
              leave={`transition-transform origin-down duration-300`}
              leaveFrom="scale-y-100 opacity-100"
              leaveTo="scale-y-0 opacity-100"
            >
              <Menu.Items className="absolute bg-gray-100 bg-opacity-90 border border-gray-300 rounded-md py-1 right-0 mt-7">
                <Menu.Item as="div" className="border-t border-opacity-50 px-4 py-1 truncate">
                  Fanes Pratama
                </Menu.Item>
                <Menu.Item as="div" className="border-t border-opacity-50 px-4 py-1">
                  nama
                </Menu.Item>
                <Menu.Item as="div" className="border-t border-opacity-50 px-4 py-1">
                  nama
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
    </nav>
  )
}

export default Navbar