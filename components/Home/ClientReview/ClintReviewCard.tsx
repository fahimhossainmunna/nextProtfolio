import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  role: string;
};

const ClintReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="m-2">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full"
      />

      <p className="mt-6 text-base text-gray-200 font-medium">
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae modi
        repellat veniam ratione perspiciatis ut rem reprehenderit commodi
        officia doloribus "
      </p>
      <h1 className="mt-6 text-xl font-bold text-cyan-300">{name}</h1>
      <p className="mt-1 text-white/70">{role}</p>
    </div>
  );
};

export default ClintReviewCard;
