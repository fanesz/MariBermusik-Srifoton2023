import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const Navbar = () => {

  return (
    <nav>
      <div className="" id="navbar-default">
      <ul className="xl:flex xl:justify-around items-center text-center">
        <li className="flex justify-center text-center">
          <a href="#"><img src={logo} alt="MariBermusik Logo" id="logo"/></a>
          <span className="text-3xl text-emerald-950 hover:text-black">Mari</span><span className="text-3xl text-emerald-400 hover:text-emerald-500">Bermusik</span>
        </li>
        <li className="cursor-default">
          <form action="">
            <input className="bg-slate-100 text-black border-gray-300 rounded h-10 w-64 p-3" type="search" placeholder="Search musical instrumental ..." />
            <button type="submit" className="bg-blue-700 rounded transition duration-300 p-2 hover:bg-blue-900">Search</button>
          </form>
        </li>
        <div>
          <ul className="sm:flex sm:justify-around items-center text-center">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Category List</li></a>
            <a href="#"><li>Forum</li></a>
            <a href="#"><li>About</li></a>
          </ul>
        </div>
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
    </nav>
  )
}

export default Navbar