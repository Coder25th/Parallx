"use client";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const { x, y } = useMousePosition();
  const size = 200;

  return (
    <main className="h-[100vh] cursor-none">
      <motion.div
        className="text-gray-500 mask absolute w-[100%] h-[100%] items-center justify-center flex text-3xl leading-10"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 1.5}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        style={{
          WebkitMaskImage: `url('/mask.svg')`, // Your SVG path
          WebkitMaskRepeat: "no-repeat",
          maskImage: `url('/mask.svg')`, // For cross-browser compatibility
          maskRepeat: "no-repeat",
          maskSize: `${size}px`,
          backgroundColor: "red", // Mask fill color
          color: "black",
        }}
      >
        <p className="w-[1000px]">
          Hello my name is aryan and this is a practice of my learing animation
          with framer motion.
        </p>
      </motion.div>
      <div className="w-[100%] h-[100%] items-center justify-center flex text-3xl leading-10">
        <p className="w-[1000px]">
          And i am enjoying it very much trying new things.This is amazing and i
          hope you would also like it as much i do it.
        </p>
      </div>
    </main>
  );
};

export default Home;
