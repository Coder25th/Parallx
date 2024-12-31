"use client";
import img1 from "@/public/berserk.jpg";
import img2 from "@/public/bullet.jpg";
import img3 from "@/public/car.jpg";
import img4 from "@/public/robot.png";
import img5 from "@/public/metal.jpg";
import img6 from "@/public/ghost.jpg";
import img7 from "@/public/demon.png";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import useDimension from "@/utils/useDimension";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Parallaxx = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  return (
    <main>
      <div
        ref={container}
        className="h-[175vh] overflow-hidden bg-black flex flex-row gap-[2vw] p-[2vw] box-border"
      >
        <Column
          images={[images[0], images[1], images[3]]}
          y={y}
          className="top-[-45%]"
        />
        <Column
          images={[images[4], images[5], images[6]]}
          y={y2}
          className="top-[-95%]"
        />
        <Column
          images={[images[1], images[2], images[3]]}
          y={y3}
          className="top-[-45%]"
        />
        <Column
          images={[images[4], images[5], images[6]]}
          y={y4}
          className="top-[-95%]"
        />
      </div>
    </main>
  );
};

export default Parallaxx;

interface ColumnProps {
  images: StaticImageData[]; // Next.js uses `StaticImageData` for imported images
  y: MotionValue<number>; // MotionValue type for `y`
  className?: string; // Optional className prop
}

const Column: React.FC<ColumnProps> = ({ images, y, className }) => {
  return (
    <motion.div
      style={{ y }}
      className={`w-[25%] relative h-[100%] flex flex-col gap-[2vw] min-w-[250px] ${className}`}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="w-[100%] h-[100%] relative overflow-hidden rounded-[1vw]"
        >
          <Image src={src} fill alt="image" className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};
