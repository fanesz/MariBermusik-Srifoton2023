import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <>
        <nav>
          <ul>
            <li><a href="#">
              <img src="/img/logo.png" alt="MariBermusik Logo" id="logo"/>
              <span>MariBermusik</span>
            </a></li>
            <div>
              <ul>
                <li><a href="#">Tambah Alat Musik</a></li>
                <li><a href="#">Tambah Kategori</a></li>
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
