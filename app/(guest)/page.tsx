import Header from "@/components/guest/layout/header";
import Categories from "@/components/guest/root/categories";
import Hero from "@/components/guest/root/hero";
import NewArticles from "@/components/guest/root/new-articles";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Another-way/Home",
  description: "HomePage of Another way.",
};

export default function Home() {
  return (
    <div className="    p-4 ">
      <div className="container mx-auto">
        {/* Navigation Section */}
        {/* ===================== */}
        <Header />
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <Hero />
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <NewArticles />
        {/* ===================== */}

        {/* Hero Section */}
        {/* ===================== */}
        <Categories />
        {/* ===================== */}
      </div>
    </div>
  );
}
