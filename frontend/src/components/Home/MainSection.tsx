import TransitionIn from "../_shared/TransitionIn";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import image1 from "../../assets/pemain musik terkenal 1.jpeg";
import image2 from "../../assets/pemain musik terkenal 2.jpeg";
import image3 from "../../assets/pemain musik terkenal 3.jpeg";

const images = [image1, image2, image3];

const MainSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [percentage, setPercentage] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseDownX(e.clientX);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const mouseDelta = mouseDownX - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const nextPercentageUnconstrained = (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);

    if (targetRef.current) {
      targetRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };


const handleButtonClick = () => {
  const newPercentage = percentage === 0 ? -50 : 0;

  setPercentage(newPercentage);

  if (targetRef.current) {
    targetRef.current.style.transition = "transform 0.5s ease";
    targetRef.current.style.transform = `translate(${newPercentage}%, -50%)`;
  }
};

  return (
    <div className="h-screen overflow-hidden relative">
      <TransitionIn from="bottom">
        <div id="image-track" ref={targetRef} className="flex absolute top-1/2 translate-y-1/2 gap-4" onMouseDown={handleMouseDown}>
          {images.map((src, index) => (
            <motion.img
              key={index}
              className="image"
              src={src}
              alt={`Image ${index}`}
              draggable={false}
              style={{
                objectPosition: `${100 + percentage}% center`,
                width: "30%",
                height: "300px",
              }}
            />
          ))}
        </div>
      </TransitionIn>
    </div>
  );
};

export default MainSection;
