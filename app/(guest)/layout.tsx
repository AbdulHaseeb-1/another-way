import Footer from "@/components/guest/layout/footer";
import Header from "@/components/guest/layout/header";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container  mx-auto p-4 relative">
      {/* Navigation Section */}
      {/* ===================== */}
      <Header />
      {/* ===================== */}

      {children}

      {/* Footer Section */}
      {/* ===================== */}
      <Footer />
      {/* ===================== */}
    </div>
  );
}
