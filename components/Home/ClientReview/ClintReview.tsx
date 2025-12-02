"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClintReviewCard from "./ClintReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClintReview = () => {
  return (
    <div className="py-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Kind words from satisfied <br />
        <span className="text-cyan-300">clients </span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ClintReviewCard
            image="/images/c1.png"
            name="Janny Doe"
            role="CEO ,Landspcape"
          />
          <ClintReviewCard
            image="/images/c2.png"
            name="John Doe"
            role="CEO ,Landspcape"
          />
          <ClintReviewCard
            image="/images/c3.png"
            name="Jassica Doe"
            role="CEO ,Landspcape"
          />
          <ClintReviewCard
            image="/images/c4.png"
            name="Jara Doe"
            role="CEO ,Landspcape"
          />
          <ClintReviewCard
            image="/images/c5.png"
            name="Jora Doe"
            role="CEO ,Landspcape"
          />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default ClintReview;
