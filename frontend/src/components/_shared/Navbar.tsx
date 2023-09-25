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
        <div className="hidden xl:block text-3xl mt-auto mb-auto ms-4 font-bold">
          <span className="text-emerald-950 hover:text-black">Mari</span>
          <span className="text-emerald-400 hover:text-emerald-500">Bermusik</span>
          <span className="text-emerald-950 hover:text-black">.</span>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex me-7 gap-10">
        <div className="flex mt-auto mb-auto gap-8 border font-medium">
          <a href="#" className="border">Home</a>
          <a href="#" className="border">Category List</a>
          <a href="#" className="border">Forum</a>
          <a href="#" className="border">About</a>
        </div>
        <div className="border flex">
          <Menu as="div" className="relative">
            <Menu.Button as="button" className="">
              <img id="profile" src={profile} className="h-12" />
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
            <Menu.Items className="bg-gray-100 bg-opacity-90 border border-gray-300 rounded-md py-1">
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