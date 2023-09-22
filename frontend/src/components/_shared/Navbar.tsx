import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const Navbar = () => {

  return (
    <nav>
      <ul className="xl:flex xl:justify-between items-center text-center">
        <li className="flex justify-center text-center">
          <a href="#"><img src={logo} alt="MariBermusik Logo" id="logo"/></a>
          <span className="text-3xl text-emerald-950 hover:text-black">Mari</span><span className="text-3xl text-emerald-400 hover:text-emerald-500">Bermusik</span>
        </li>
        <li>
              <form action="">
                <input className="bg-slate-100 text-black border-gray-300 rounded h-10 w-72 p-3" type="search" placeholder="Search musical instrumental ..." />
                <button type="submit" className="bg-blue-700 rounded transition duration-300 p-2 hover:bg-blue-900">Search</button>
              </form>
            </li>
        <div>
          <ul className="md:flex md:justify-between items-center text-center">
            
            <li><a href="#">Home</a></li>
            <li><a href="#">Category List</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">About</a></li>
            <li className="flex justify-center">
              <img id="profile" data-dropdown-toggle="profileMenu" data-dropdown-trigger="hover" src={profile}/>
              <div id="profileMenu" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul aria-labelledby="profile">
                  <li><a href="#">Profil</a></li>
                  <li><a href="#">Pengaturan</a></li>
                  <li><a href="#">Sign out</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar