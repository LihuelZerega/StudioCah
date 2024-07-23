import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./subcomps/Hero";
import Services from "./subcomps/Services";
import Portfolio from "../inicio/subcomps/Portfolio";
import Testimonials from "./subcomps/Testimonials";

function page() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
