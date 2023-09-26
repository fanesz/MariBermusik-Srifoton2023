import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Forum from "./pages/Forum"
import PostForum from "./pages/PostForum"
import DaftarKursus from "./pages/DaftarKursus"
import Kursus from "./pages/Kursus"
import Test from "./pages/_test"
import Navbar from "./components/_shared/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/postForum' element={<PostForum />} />
        <Route path='/daftarkursus' element={<DaftarKursus />} />
        <Route path='/kursus' element={<DaftarKursus />} />
        <Route path='/kursus/:id' element={<Kursus />} />

        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
