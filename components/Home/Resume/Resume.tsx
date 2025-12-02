import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="text-3xl sm:text-4xl font-bold text-white ">
          <h1>
            My Work <span className="text-cyan-400">Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Fontend Developer" />
            <ResumeCard Icon={BsDatabase} role="Backend Developer" />
          </div>
        </div>
        <div className="">Education Part</div>
      </div>
    </div>
  );
};

export default Resume;
