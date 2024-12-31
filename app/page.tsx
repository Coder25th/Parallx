"use client";
import Parallax from "@/components/Parallax";
import Lenis from "lenis";
import Link from "next/link";
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
      <Link
        href="/parallax"
        className="p-4 rounded-lg w-full bg-white text-black flex items-center justify-center"
      >
        Parallax
      </Link>
      <Parallax />
    </main>
  );
};

export default Home;
