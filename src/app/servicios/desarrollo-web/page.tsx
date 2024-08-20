import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Pricing from "../desarrollo-web/subcomps/Pricing";
import Faq from "./subcomps/Faq";
import Projects from "./subcomps/Projects";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="bg-white w-full h-full">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Pricing />
        <Projects />
        <Faq />
        <Footer />
      </Suspense>
    </div>
  );
}

export default page;
