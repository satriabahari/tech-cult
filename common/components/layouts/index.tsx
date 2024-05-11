"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./header/Header";
import Footer from "./partials/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      once: true,
      offset: 200,
    });
  });
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layouts;
