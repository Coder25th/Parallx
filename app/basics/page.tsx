"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const FramerBasic = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "180deg" }}
        exit={{ rotate: "0deg" }}
        transition={{ duration: 1, ease: "backInOut" }}
        className="w-36 h-36 bg-white flex items-center justify-center"
      >
        <Link href="/basics" className="p-2 bg-black text-white">
          Refresh
        </Link>
      </motion.div>
    </div>
  );
};
export default FramerBasic;
