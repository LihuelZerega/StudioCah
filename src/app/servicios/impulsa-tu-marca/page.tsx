import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./subcomps/Hero";
import Services from "./subcomps/Services";
import Portfolio from "../../inicio/subcomps/Portfolio";
import Testimonials from "./subcomps/Testimonials";
import Loading from "@/components/Loading";

function page() {
  return (
    <div className="bg-white w-full h-full">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Footer />
      </Suspense>
    </div>
  );
}

export default page;
