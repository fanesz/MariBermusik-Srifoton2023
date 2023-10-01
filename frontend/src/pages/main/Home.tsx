import Navbar from "../../components/_shared/Navbar"
import Footer from "../../components/_shared/Footer"
import TopSection from "../../components/Home/TopSection";
import MainSection from "../../components/Home/MainSection";
import CategoryPreview from "../../components/Home/CategoryPreview";

const Home = () => {

  return (
    <>

      <div className="">
        <TopSection />
      </div>

      <div className="ms-auto me-auto w-[75vw]">
        <div>
          <MainSection />
        </div>
        <div className="mt-16 xl:w-[50vw] ms-auto me-auto">
          <CategoryPreview />
        </div>
      </div>


    </>
  )
}

export default Home