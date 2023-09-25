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
    <Carousel className="rounded-xl">
      {carouselItems.map((item, index) => (
        <div className="relative h-full w-full" key={index}>
          <img src={item.imageSrc} alt={item.altText} className="object-cover h-full w-full rounded-xl " />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                {item.title}
              </Typography>
              <Typography variant="lead" color="white" className="mb-12 opacity-80">
                {item.description}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  {item.buttonText}
                </Button>
                <Button size="lg" color="white" variant="text">
                  {item.buttonVariant}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoryPreview;
