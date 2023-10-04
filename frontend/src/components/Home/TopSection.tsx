import { useEffect, useState } from "react";
import character from "../../assets/character.png";
import TransitionIn from "../_shared/TransitionIn";


const TopSection = () => {


  return (
    <div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270"><path fill="#fed7aa" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,256C840,267,960,245,1080,240C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
      <div className="absolute 2xl:top-[15vh] xl:top-28 md:top-20 w-full md:flex hidden justify-around">
        <TransitionIn from="left" length="full">
          <div className="font-bold 2xl:text-[1.5vw] xl:text-3xl md:text-2xl xl:mt-16 md:mt-10">
            <span className="text-blue-900 hover:text-blue-950">Stay </span>
            <span className="text-emerald-400 hover:text-emerald-500">Hungry </span>
            <span className="text-blue-900 hover:text-blue-950">Stay </span>
            <span className="text-emerald-400 hover:text-emerald-500">Foolish</span>
          </div>
        </TransitionIn>

        <TransitionIn from="right">
          <img className="transition hover:scale-105 2xl:-mt-[6vh] 2xl:w-[12vw] xl:w-[12rem] lg:w-[11rem] md:w-[10rem] md:block hidden mb-24" src={character} alt="character" />
        </TransitionIn>
      </div>
    </div>
  )
}
export default TopSection