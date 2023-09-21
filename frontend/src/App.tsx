import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Forum from "./pages/Forum"
import DaftarKursus from "./pages/DaftarKursus"
import Kursus from "./pages/Kursus"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/daftarkursus' element={<DaftarKursus />} />
        <Route path='/kursus' element={<DaftarKursus />} />
        <Route path='/kursus/:id' element={<Kursus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
