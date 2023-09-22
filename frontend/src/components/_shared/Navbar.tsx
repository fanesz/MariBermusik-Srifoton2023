import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const Navbar = () => {

  return (
    <nav>
      <ul id="flex">
        <li id="flex">
          <a href="#"><img src={logo} alt="MariBermusik Logo" id="logo" /></a>
          <span id="bigText">MariBermusik</span>
        </li>
        <div>
          <ul id="flex">
            <li>
              <form action="">
                <input type="search" placeholder="Cari alat musik ..." />
                <button type="submit">Cari</button>
              </form>
            </li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Category List</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">About</a></li>
            <li>
              <img id="profile" data-dropdown-toggle="profileMenu" data-dropdown-trigger="hover" aria-hidden="true" src={profile}/>
              <div id="profileMenu">
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