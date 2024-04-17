import React from "react";
import Navbar from "./../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonial from "../components/Testimonials/Testimonial";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Skills />
      {/* <Works /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
