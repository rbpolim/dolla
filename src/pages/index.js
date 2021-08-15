import React, { useState } from "react";

import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import AboutSection from "../components/AboutSection";
import DiscoverSection from "../components/DiscoverSection";
import SignUpSection from "../components/SignUpSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

import { aboutObj } from "../components/AboutSection/data";
import { discoverObj } from "../components/DiscoverSection/data";
import { signupObj } from "../components/SignUpSection/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...aboutObj} />
      <DiscoverSection {...discoverObj} />
      <ServicesSection />
      <SignUpSection {...signupObj} />
      <Footer />
    </>
  );
};

export default Home;
