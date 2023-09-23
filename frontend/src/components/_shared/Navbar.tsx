import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-2 gap-3">
        {/* logo */}
        <li className="flex justify-center text-center">
          <a href="#"><img src={logo} alt="MariBermusik Logo" id="logo"/></a>
          <span className="text-3xl text-emerald-950 hover:text-black">Mari</span>
          <span className="text-3xl text-emerald-400 hover:text-emerald-500">Bermusik</span>
          <span className="text-3xl text-emerald-950 hover:text-black">.</span>
        </li>
          {/* navbar button */}
          <button data-collapse-toggle="navbarDropdown" type="button" className="p-2 w-10 h-10 text-gray-500 md:hidden focus:ring-2 focus:ring-orange-400 rounded-md transition-all hover:scale-110 bg-gradient-to-br via-amber-100 from-orange-200 bg-size-200 hover:bg-right-bottom" aria-controls="navbarDropdown" >
            <svg viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbarDropdown">
            <ul className="md:flex md:justify-around items-center text-center">
              {/* search */}
              <li>
                <form action="">
                  <input className="bg-slate-100 text-black border-gray-300 rounded h-10 w-64 p-3" type="search" placeholder="Search musical instrumental ..." />
                  <button type="submit" className="bg-blue-700 rounded transition duration-300 p-2 hover:bg-blue-900">Search</button>
                </form>
              </li>
              {/* nav item */}
              <ul className="sm:flex sm:justify-around items-center text-center my-3">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Category List</li></a>
                <a href="#"><li>Forum</li></a>
                <a href="#"><li>About</li></a>
              </ul>
              {/* profile */}
              <li className="flex justify-center xl:order-last" data-dropdown-toggle="profileMenu" data-dropdown-trigger="hover">
                <img id="profile" src={profile}/>
                <div id="profileMenu" className="hidden rounded-lg">
                  <ul aria-labelledby="profile">
                    <div className="p-3 bg-gradient-to-br  via-amber-100 from-orange-200 rounded cursor-default">
                      <span className="block text-sm text-gray-900 dark:text-white">Hoho</span>
                      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">hoho@gmail.com</span>
                    </div>
                    <a href="#"><li>Profile</li></a>
                    <a href="#"><li>Setting</li></a>
                    <a href="#"><li>Sign out</li></a>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar