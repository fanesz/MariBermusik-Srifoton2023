import { useEffect, useState } from "react";
import { getAlatMusikList } from "../api/services";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";
import drum from "../assets/drum.jpg";
import gitar from "../assets/gitar.jpg";
import piano from "../assets/piano.jpg";

const DaftarKursus = () => {
  const [alatMusik, setAlatMusik] = useState<string[]>([]);

  const fetchData = async () => {
    const res = await getAlatMusikList();
    let temp: string[] = [];
    res.data.map((item: any) => temp.push(item.id));
    setAlatMusik(temp);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const courseItems = [
    {
      imageSrc: gitar,
      altText: "Gitar",
      title: "Learn to Play the Guitar",
      description: "Master the art of playing the guitar with our comprehensive tutorials.",
      buttonText: "Explore",
      buttonVariant: "Tutorials",
    },
    {
      imageSrc: drum,
      altText: "Drum",
      title: "Discover Drumming Techniques",
      description: "Explore the world of rhythm and percussion with our drumming lessons.",
      buttonText: "Explore",
      buttonVariant: "Lessons",
    },
    {
      imageSrc: piano,
      altText: "Piano",
      title: "Unlock the Beauty of Piano Music",
      description: "Experience the joy of playing piano and create beautiful melodies.",
      buttonText: "Explore",
      buttonVariant: "Sheet Music",
    },
  ];

  return (
    <div>
      {courseItems.map((item, index) => (
        <div className="bg-brown-500 border border-blue-900 mb-8 p-4 rounded-md" key={index}>
          <img src={item.imageSrc} alt={item.altText} className="object-cover w-48 h-32 sm:w-64 sm:h-48 mx-auto" />
          <div className="mt-4">
            <Typography variant="h1" color="white" className="mb-2 text-sm md:text-base lg:text-lg text-center">
              {item.title}
            </Typography>
            <Typography variant="lead" color="white" className="mb-4 text-xs md:text-sm opacity-80 text-center">
              {item.description}
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="sm" color="white">
                {item.buttonText}
              </Button>
              <Button size="sm" color="white" variant="text">
                {item.buttonVariant}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {alatMusik.map((item, index) => (
        <div className="bg-brown-500 border border-blue-900 mb-8 p-4 rounded-md" key={index}>
          <Link to={`/daftarkursus/${item}`} key={index}>
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DaftarKursus;
