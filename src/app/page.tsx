import Image from "next/image";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "./inicio/subcomps/HeroSection";
import Brands from "./inicio/subcomps/Brands";
import Portfolio from "./inicio/subcomps/Portfolio";
import AboutUs from "./inicio/subcomps/AboutUs";
import Services from "./inicio/subcomps/Services";
import CallToAction from "./inicio/subcomps/CallToAction";
import Faq from "./inicio/subcomps/Faq";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main className="bg-white w-full h-full">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <HeroSection />
        <Brands />
        <Portfolio />
        <AboutUs />
        <Services />
        <CallToAction />
        <Faq />
        <Footer />
      </Suspense>
    </main>
  );
}
