import React from "react";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Resume from "./Resume/Resume";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Service />
    <Resume/>
    </div>
  );
};

export default Home;
