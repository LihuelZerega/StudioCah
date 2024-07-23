import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "./inicio/subcomps/HeroSection";
import Brands from "./inicio/subcomps/Brands";
import AboutUs from "./inicio/subcomps/AboutUs";
import Services from "./inicio/subcomps/Services";
import CallToAction from "./inicio/subcomps/CallToAction";
import Faq from "./inicio/subcomps/Faq";

export default function Home() {
  return <main className="bg-white w-full h-full">
    <Navbar />
    <HeroSection />
    <Brands />
    <AboutUs />
    <Services />
    <CallToAction />
    <Faq />
    <Footer />
  </main>;
}
