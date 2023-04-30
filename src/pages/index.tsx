import Image from "next/image";
import { Oswald, Roboto } from "next/font/google";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Modality from "@/layouts/Modality";
import Teachers from "@/layouts/Teachers";
import Gallery from "@/layouts/Gallery";
import Contact from "@/layouts/Contact";
import Footer from "@/layouts/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={oswald.className}>
        <Hero />
        <About />
        <Modality />
        <Teachers />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
