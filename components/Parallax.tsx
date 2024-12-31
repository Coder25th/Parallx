"use client";
import Image from "next/image";
import img1 from "@/public/berserk.jpg";
import img2 from "@/public/bullet.jpg";
import img3 from "@/public/car.jpg";
import img4 from "@/public/robot.png";
import img5 from "@/public/metal.jpg";
import img6 from "@/public/ghost.jpg";
import img7 from "@/public/demon.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: img1,
      scale: scale4,
      styles: "w-[25vw] h-[25vh]",
    },
    {
      src: img2,
      scale: scale5,
      styles: "top-[-30vh] left-[5vw] w-[50vw] h-[30vh]",
    },
    {
      src: img3,
      scale: scale6,
      styles: "top-[5vh] left-[-30vw] w-[30vw] h-[30vh]",
    },
    {
      src: img4,
      scale: scale5,
      styles: "top-[3vh] left-[30vw] w-[30vw] h-[30%]",
    },
    {
      src: img5,
      scale: scale6,
      styles: "top-[40vh] left-[1vw] w-[25%] h-[35%]",
    },
    {
      src: img6,
      scale: scale8,
      styles: "top-[40vh] left-[30vw] w-[30%] h-[40%]",
    },
    {
      src: img7,
      scale: scale9,
      styles: "top-[40vh] left-[-30vw] w-[30%] h-[40%]",
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        {pictures.map(({ src, scale, styles }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="absolute top-0 w-full h-full flex justify-center items-center"
          >
            <div className={`relative ${styles}`}>
              <Image
                src={src}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;
