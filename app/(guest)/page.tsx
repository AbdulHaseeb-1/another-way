import Footer from "@/components/guest/layout/footer";
import Header from "@/components/guest/layout/header";
import About from "@/components/guest/root/about";
import Categories from "@/components/guest/root/categories";
import Hero from "@/components/guest/root/hero";
import LatestArticles from "@/components/guest/root/latest-articles";
import NewArticles from "@/components/guest/root/new-articles";
import NewsLetter from "@/components/guest/root/news-letter";
import Testimonials from "@/components/guest/root/testimonials";
import ReviewSlider from "@/components/guest/root/testimonials";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Another-way/Home",
  description: "HomePage of Another way.",
};

export default function Home() {
  return (
    <div className=" ">
      <div className="container mx-auto">
        {/* Hero Section */}
        {/* ===================== */}
        <Hero />
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <LatestArticles />
        {/* <NewArticles /> */}
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <Categories />
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <Testimonials />
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <NewsLetter />
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <About />
        {/* ===================== */}
      </div>
    </div>
  );
}
