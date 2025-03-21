import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import StaticPaths from "./background-paths";

export const metadata: Metadata = {
  title: "Another Way | Hero",
  description: "Explore fresh perspectives on Another Ways Hero page.",
};

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] grid place-content-center ">
       <div className="absolute inset-0 opacity-80">
        <StaticPaths density={0.6} />
        <div className="absolute inset-0 rotate-180">
          {/* <StaticPaths density={0.8} /> */}
        </div>
      </div>
     
      <div className="mb-5  uppercase">
        <div className=" font-extrabold text-4xl md:text-6xl mb-1 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
          Another Way
        </div>
        <div className="font-medium text-3xl md:text-5xl">
          Rethink. Reinvent. Redefine
        </div>
      </div>
      <div className="font-medium text-sm md:text-lg lg:text-2xl">
        Welcome to Another Way, where fresh perspectives lead to new
        possibilities. Here, we challenge norms, explore alternative solutions,
        and embrace innovation in every aspect of life. Whether it's personal
        growth, technology, creativity, or unconventional wisdom, there{"’"}s
        always another way forward.
      </div>
      <Link href={"#"} className="font-bold text-sm mt-8 underline md:text-xl">
        {"Explore the way ->"}
      </Link>
      {/*  */}
    </section>
  );
}
