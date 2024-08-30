import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Feature from "@/components/feature/feature";
import Testimonial from "@/components/testimonial/testimonial";
import Pricing from "@/components/pricing/pricing";
import Faq from "@/components/faq/faq";
import Team1 from "@/components/team/team";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Feature />
      <Team1 />
      <Testimonial />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
