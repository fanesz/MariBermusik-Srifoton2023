import { Carousel, Typography, Button } from "@material-tailwind/react";
import drum from "../../assets/drum.jpg";
import gitar from "../../assets/gitar.jpg";
import piano from "../../assets/piano.jpg";

const carouselItems = [
  {
    imageSrc: drum,
    altText: "image 1",
    title: "The Beauty of Nature (drum)",
    description: "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
    buttonText: "Explore",
    buttonVariant: "Gallery",
  },
  {
    imageSrc: piano,
    altText: "image 2",
    title: "The Beauty of Music (piano)",
    description: "Music has the power to touch the deepest parts of our souls, evoking emotions and memories that transcend words.",
    buttonText: "Listen",
    buttonVariant: "Sheet Music",
  },
  {
    imageSrc: gitar,
    altText: "image 3",
    title: "The Beauty of Strings (gitar)",
    description: "The sound of strings resonates with the heart, creating melodies that can soothe, inspire, and uplift our spirits.",
    buttonText: "Play",
    buttonVariant: "Tutorials",
  },
];

const CategoryPreview = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Category List</h1>
      <p className="text-lg font-normal mb-8">Here is the list of services category we have, look it up!</p>

      <Carousel className="rounded-md w-80 h-84">
        {carouselItems.map((item, index) => (
          <div className="relative " key={index}>
            <img src={item.imageSrc} alt={item.altText} style={{ width: "334.84px", height: "486px" }} className="object-cover rounded-md" />
            <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography variant="h1" color="white" className="mb-2 text-sm md:text-base lg:text-lg">
                  {item.title}
                </Typography>
                <Typography variant="lead" color="white" className="mb-4 text-xs md:text-sm opacity-80">
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
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryPreview;
