import TransitionIn from "../_shared/TransitionIn";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import pemainmusik1 from "../../assets/drum.jpg";
import pemainmusik2 from "../../assets/biola.png";
import pemainmusik3 from "../../assets/gitar.jpg";

const MainSection = () => {
  return (
    <div>
      <TransitionIn from="bottom">
        <div className="bg-neutral-800">
          <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-500">Scroll down</span>
          </div>
          <HorizontalScrollCarousel />
          <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-500">Scroll up</span>
          </div>
        </div>
      </TransitionIn>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div key={card.id} className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">{card.title}</p>
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-lg font-normal text-white backdrop-blur-lg">{card.desc}</p>
      </div>
    </div>
  );
};

export default MainSection;

type CardType = {
  url: string;
  title: string;
  desc: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: pemainmusik1,
    title: "Title 1",
    desc: "asdasd",
    id: 1,
  },
  {
    url: pemainmusik2,
    title: "Title 1",
    desc: "asdasd",
    id: 2,
  },
  {
    url: pemainmusik3,
    title: "Title 1",
    desc: "asdasd",
    id: 3,
  },
];
