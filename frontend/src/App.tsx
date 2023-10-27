import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/main/Home"
import Forum from "./pages/main/Forum"
import Navbar from "./components/_shared/Navbar"
import Footer from "./components/_shared/Footer"
import ResetPassword from "./pages/dynamic/ResetPassword"
import Setting from "./pages/main/Setting"
import Profile from "./pages/dynamic/Profile"
import ListMateri from "./pages/main/ListMateri"
import Materi from "./pages/dynamic/Materi"
import NotFound from "./components/_shared/NotFound"
import { useEffect, useState } from "react"
import LoginModal from "./components/_shared/LoginModal"
import { userIsLogin } from "./api/services"

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // pengecekan apakah user sudah login
  useEffect(() => {
    const fetchData = async () => {
      const res = await userIsLogin();
      if (res.status) setIsLogin(true);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} setLoginModal={setLoginModal} />
      <LoginModal isOpen={loginModal} setModal={setLoginModal} setIsLogin={setIsLogin} />
      <div className="min-h-[70vh]">
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/profile/:id' element={<Profile />} />

          <Route path='/materi' element={<ListMateri setLoginModal={setLoginModal} />} />
          <Route path='/materi/:alatmusik/:id' element={<Materi setLoginModal={setLoginModal} />} />

          <Route path='/forum' element={<Forum setLoginModal={setLoginModal} />} />

          <Route path='/resetpassword/:id' element={<ResetPassword />} />

          <Route path='/*' element={<NotFound />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
