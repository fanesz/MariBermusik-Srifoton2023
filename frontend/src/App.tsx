import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <>
        <nav>
          <ul id="flex">
            <li><a href="#">
              <img src="/img/logo.png" alt="MariBermusik Logo" id="logo"/>
              <span>MariBermusik</span>
            </a></li>
            <div>
              <ul id="flex">
                <li>
                <form action="">
                  <input type="search" placeholder="Cari alat musik ..."/>
                  <button type="submit">Cari</button>
                </form>
                </li>
                <li><a href="#">Tambah Alat Musik</a></li>
                <li><a href="#">Tambah Kategori</a></li>
                <li>
                <svg id="profileButton" data-dropdown-toggle="profile" data-dropdown-trigger="hover" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
                </svg>
                <div id="profile">
                  <ul aria-labelledby="profileButton">
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
        </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
