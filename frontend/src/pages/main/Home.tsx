import TopSection from "../../components/Home/TopSection";
import MusicianCarousel from "../../components/Home/MusicianCarousel";
import MainSection from "../../components/Home/MainSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div>
        <TopSection />
      </div>
      <div className="mt-12">
        <MainSection />
      </div>
      <div className="mt-20 w-full max-w-7xl  mx-auto">
        <MusicianCarousel />
      </div>
    </div>
  );
};

export default Home;
