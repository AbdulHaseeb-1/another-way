import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Another Way | Hero",
  description: "Explore fresh perspectives on Another Ways Hero page.",
};

export default function Hero() {
  return (
    <section className="h-[90vh] md:h-[820px] grid place-content-center ">
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
        growth, technology, creativity, or unconventional wisdom, there{"’"}s always
        another way forward.
      </div>
      <Link href={"#"} className="font-bold text-sm mt-8 underline md:text-xl">
        {"Explore the way ->"}
      </Link>
      {/*  */}
    </section>
  );
}
