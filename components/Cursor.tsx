"use client";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";

interface CursorProps {
  heading: string;
  text: string;
}

const Cursor: React.FC<CursorProps> = ({ heading, text }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const { x, y } = useMousePosition();
  const size = 300;

  return (
    <main className="h-screen cursor-none">
      <motion.div
        className="text-gray-500 mask absolute w-[100%] h-[100%] items-center justify-center flex text-9xl leading-10"
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
        <h1 className="w-[1000px]">{heading}</h1>
      </motion.div>
      <div className="w-[100%] h-[100%] items-center justify-center flex text-9xl leading-10">
        <h1 className="w-[1000px]">{text}</h1>
      </div>
    </main>
  );
};
export default Cursor;
