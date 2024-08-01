import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./subcomps/Hero";
import Loading from "@/components/Loading";
import CallToAction from "../inicio/subcomps/CallToAction";
import Faq from "../inicio/subcomps/Faq";
import AboutUs from "./subcomps/AboutUs";

function page() {
  return (
    <div className="bg-white w-full h-full">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <AboutUs />
        <CallToAction />
        <Faq />
        <Footer />
      </Suspense>
    </div>
  );
}

export default page;
