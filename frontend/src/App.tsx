import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/main/Home"
import Forum from "./pages/main/Forum"
import PostForum from "./pages/main/PostForum"
import Navbar from "./components/_shared/Navbar"
import Footer from "./components/_shared/Footer"
import ResetPassword from "./pages/other/ResetPassword"
import Setting from "./pages/main/Setting"
import Profile from "./pages/dynamic/Profile"
import ListMateri from "./pages/main/ListMateri"
import Materi from "./pages/dynamic/Materi"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[60vh]">
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/profile/:id' element={<Profile />} />

          <Route path='/materi' element={<ListMateri />} />
          <Route path='/materi/:alatmusik/:id' element={<Materi />} />

          <Route path='/forum' element={<Forum />} />
          <Route path='/postForum' element={<PostForum />} />

          <Route path='/resetpassword/:id' element={<ResetPassword />} />

          <Route path='/*' element={<div>NOT FOUND</div>} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
