import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Forum from "./pages/Forum"
import PostForum from "./pages/PostForum"
import DaftarKursus from "./pages/DaftarKursus"
import Kursus from "./pages/Kursus"
import Fanes from "./test/Fanes"
import Usman from "./test/Usman"
import Rendy from "./test/Rendy"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/postForum' element={<PostForum />} />
        <Route path='/daftarkursus' element={<DaftarKursus />} />
        <Route path='/kursus' element={<DaftarKursus />} />
        <Route path='/kursus/:id' element={<Kursus />} />

        <Route path='/fanes' element={<Fanes />} />
        <Route path='/usman' element={<Usman />} />
        <Route path='/rendy' element={<Rendy />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
