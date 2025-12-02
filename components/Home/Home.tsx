import React from "react";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ClintReview from "./ClientReview/ClintReview";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Service />
      <Resume />
      <Projects />
      <Skills />
      <ClintReview />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
