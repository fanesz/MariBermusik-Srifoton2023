import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { Menu, Transition } from '@headlessui/react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-orange-200 p-4">

      <div className="flex justify-center text-center md:ms-7 ms-3">
        <div className="mt-auto mb-auto">
          <a href="#">
            <img src={logo} alt="MariBermusik Logo" className="md:h-12 h-6" />
          </a>
        </div>
        <div className="hidden xl:block text-3xl mt-auto mb-auto ms-4 font-bold cursor-pointer">
          <span className="text-emerald-950 hover:text-black duration-200">Mari</span>
          <span className="text-emerald-400 hover:text-emerald-500 duration-200">Bermusik</span>
          <span className="text-emerald-950 hover:text-black duration-200">.</span>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex me-7 gap-10">
        <div className="flex mt-auto mb-auto gap-2 text-lg font-medium">
          <a href="#" className="navbar_menu_items">Home</a>
          <a href="#" className="navbar_menu_items">Category List</a>
          <a href="#" className="navbar_menu_items">Forum</a>
          <a href="#" className="navbar_menu_items">About</a>
        </div>
        <div className="flex">
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
              <Menu.Items className="absolute bg-gray-100 bg-opacity-90 border border-gray-300 rounded-md py-1 right-0 w-32">
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
      </div>

      {/* Menu Phone */}
      <div className="md:hidden me-3">
        <Menu as="div" className="relative pt-1">
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
            <Menu.Items className="absolute bg-gray-100 right-0 bg-opacity-90 border border-gray-300 rounded-md py-1">
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