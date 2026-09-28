import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import LogoGallery from "@/components/portfolio/LogoGallery";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Certifications from "@/components/portfolio/Certifications";
import Projects from "@/components/portfolio/Projects";
import Stats from "@/components/portfolio/Stats";
import Experience from "@/components/portfolio/Experience";
import Community from "@/components/portfolio/Community";
import CVSection from "@/components/portfolio/CVSection";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BackToTop from "@/components/portfolio/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoGallery />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Stats />
        <Experience />
        <Community />
        <CVSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}