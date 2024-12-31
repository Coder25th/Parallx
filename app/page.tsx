"use client";
import Parallax from "@/components/Parallax";
import Lenis from "lenis";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <button className="p-4 rounded-lg bg-white text-black flex items-center justify-center">
        Parallax
      </button>
      <Parallax />
    </main>
  );
};

export default Home;
