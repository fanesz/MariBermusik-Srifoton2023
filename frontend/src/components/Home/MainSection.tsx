import { Carousel, Typography } from "@material-tailwind/react"
import { getAlatMusikImg } from "../../utils/AlatMusikList"
import TransitionIn from "../_shared/TransitionIn"
import { useNavigate } from "react-router-dom"

const MainSection = () => {
  const navigate = useNavigate();

  const materi_button = (
    <button className="before:ease relative md:h-12 h-10 md:w-36 w-32 overflow-hidden border border-orange-500 bg-orange-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:shadow-orange-500 hover:before:-translate-x-40 rounded-md duration-700"
      onClick={() => { navigate('/materi'); window.scrollTo(0, 0); }}>
      <span className="z-10 text-lg font_fira">Materi</span>
    </button>
  );

  const forum_button = (
    <button
      className="relative md:h-12 h-10 md:w-40 w-36 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-500 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded-md duration-200"
      onClick={() => { navigate('/forum'); window.scrollTo(0, 0); }}>
      <span className="relative z-10 font_fira">Forum</span>
    </button>
  );

  const alatMusikCarousel = [
    {
      alatMusik: "gitar",
      title: "Guitar",
      description: [
        "In the hands of the artist, slender strings wove a tapestry of harmonious dreams.",
        "The acoustic guitar's wooden body resonated with the soulful warmth of a hearth's ember.",
        "In the hands of the troubadour, became a storyteller, painting vivid tales of love, loss, and the human experience."
      ],
      style: 'md:w-2/4 w-3/4 text-start my-auto ps-16',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg font_kelly',
      descriptionStyle: 'mb-4 md:text-sm text-xs opacity-80 font_alkatra'
    },
    {
      alatMusik: "bass",
      title: "Bass",
      description: [
        "Low-frequency rumble was an earthy heartbeat, grounding the music in its steady embrace.",
        "A sonic abyss, plumed like smoke, weaving the dark tapestry of rhythm.",
        "Deep vibrations coursed through the room, like the heartbeat of the universe."
      ],
      style: 'w-4/6 text-end ms-auto pe-12 pt-8',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg text-end font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 text-end font_alkatra'
    },
    {
      alatMusik: "biola",
      title: "Biola",
      description: [
        "With each stroke of the bow, sang a haunting ethereal melody that lingered like a spectral presence.",
        "Became tendrils of emotion, caressing the soul with their delicate, melancholic touch.",
        "The bow danced upon delicate strings, conjuring a symphony of tears and laughter."
      ],
      style: 'w-4/6 text-start m-auto',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg text-center font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 text-center font_alkatra'
    },
    {
      alatMusik: "cello",
      title: "Cello",
      description: [
        "The cello's resonant depths were like a cavern of emotions, where the echoes of sorrow and joy intertwined.",
        "In the hands of the cellist, the cello became a vessel for the heart's unspoken sorrows, its melodies weeping and soaring.",
        "Its resonant timbre enveloped the audience in a warm, melancholic embrace."
      ],
      style: 'w-4/6 text-end ms-auto my-auto pe-16 pt-12',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg text-end font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 text-end font_alkatra'
    },
    {
      alatMusik: "cello",
      title: "Cello",
      description: [
        "The cello's resonant depths were like a cavern of emotions, where the echoes of sorrow and joy intertwined.",
        "In the hands of the cellist, the cello became a vessel for the heart's unspoken sorrows, its melodies weeping and soaring.",
        "Its resonant timbre enveloped the audience in a warm, melancholic embrace."
      ],
      style: 'w-4/6 text-end ms-auto my-auto pe-16 pt-12',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg text-end font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 text-end font_alkatra'
    },
    {
      alatMusik: "drum",
      title: "Drum",
      description: [
        "A primal thunder, invoked the ancient rhythms of the earth, commanding movement and dance.",
        "Each beat was a heartbeat in the rhythm of life, a driving force that pulsed with raw energy.",
        "Rhythmic thunder rumbled, forging a primal connection to the pulse of existence."
      ],
      style: 'w-4/6 text-start m-auto',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg text-center font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 text-center font_alkatra'
    },
    {
      alatMusik: "gitar listrik",
      title: "Gitar Listrik",
      description: [
        "Wailing solos were like cries of a cosmic wanderer, lost in the vastness of sound.",
        "With every riff and bend of the strings, conjured a storm of emotions, a sonic tempest of passion.",
        "Lightning bolts of sound surged forth, electrifying the very air around it."
      ],
      style: 'w-4/6 text-start m-auto mb-20',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg text-center font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 text-center font_alkatra'
    },
    {
      alatMusik: "piano",
      title: "Piano",
      description: [
        "A portals to a world of timeless melodies, where the past and present converged in harmonious unity.",
        "In the pianist's hands, became a storyteller, narrating tales of triumph and despair through its cascading notes.",
        "Ivory and ebony keys whispered tales of joy and sorrow with each gentle touch."
      ],
      style: 'md:w-2/4 w-3/4 text-start my-auto ps-16 pt-10',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 font_alkatra'
    },
    {
      alatMusik: "trompoet",
      title: "Trompet",
      description: [
        "The trombone's bold voice echoed with the grandeur of a brass king, leading the musical charge with regal authority.",
        "Like a bold proclamation, the trombone's notes resounded, announcing their presence with a resolute and vibrant tone.",
        "Its brassy voice blared triumphant, commanding attention with every soulful bellow."
      ],
      style: 'w-3/4 text-start ps-16 pt-10',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 font_alkatra'
    },
    {
      alatMusik: "ukulele",
      title: "Ukulele",
      description: [
        "A tiny frame, belied its ability to evoke a sense of serenity, strumming breezy melodies that whispered of tropical dreams.",
        "With its soft, lilting tones, sang of carefree days and sun-drenched shores, a musical escape to paradise.",
        "Like a miniature serenade, it whispered sweet lullabies into the night."
      ],
      style: 'w-3/4 text-start m-auto text-center',
      titleStyle: 'mb-2 text-sm md:text-base lg:text-lg text-center font_kelly',
      descriptionStyle: 'mb-4 text-xs md:text-sm opacity-80 text-center font_alkatra'
    },
  ];

  const carousel = (
    <TransitionIn from="right" delay={500}>
      <Carousel className="rounded-lg shadow-md" autoplay={true} autoplayDelay={6000}>
        {alatMusikCarousel.sort(() => Math.random() - 0.5).slice(0, 4).map((item, index) => (
          <div className="relative" key={index}>
            <img src={getAlatMusikImg(item.alatMusik)} alt={item.alatMusik} className="object-cover w-full rounded-md h-72" />
            <div className="absolute inset-0 grid w-full h-full bg-black/75">
              <div className={item.style}>
                <Typography variant="h1" color="white" className={item.titleStyle}>
                  {item.title}
                </Typography>
                <Typography variant="lead" color="white" className={item.descriptionStyle}>
                  {item.description[Math.floor(Math.random() * item.description.length)]}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </TransitionIn>
  );

  return (
    <div className="">
      <div className="w-full max-w-5xl h-full md:text-end md:px-0 px-8 md:flex mx-auto gap-10">
        <div className="flex md:w-1/2">
          <div className="my-auto pb-5">
            <TransitionIn from="left" delay={500}>
              <Typography variant="lead" className="md:text-3xl text-xl font_rock">
                Panduan Belajar Alat Musik Pilihanmu Hanya Satu Klik Jauhnya
              </Typography>
              <div className="mt-4 me-2">
                {materi_button}
              </div>
            </TransitionIn>
          </div>
        </div>
        <div className="md:w-1/2 md:my-auto mt-5">
          <div>
            {carousel}
          </div>
        </div>
      </div>

      <TransitionIn from="bottom" delay={1000}>
        <div className="w-full max-w-5xl mx-auto text-center mt-20 border-t border-gray-300 pt-10">
          <div className="my-auto">
            <Typography variant="lead" className="text-2xl font_kod font-semibold">
              Temui Musisi Lain, Tanyakan Pertanyaan, dan Berbagi Pengetahuan!
            </Typography>
            <div className="mt-4">
              {forum_button}
            </div>
          </div>
        </div>
      </TransitionIn>
    </div>
  )
}

export default MainSection