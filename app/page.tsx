"use client";
import Parallax from "@/components/Parallax";
import Lenis from "lenis";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <Parallax />
    </main>
  );
};
export default Home;
