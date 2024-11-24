import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  details: string[];
//   image: string;
  isActive: boolean; // Determine if the card is the active (center) card
}

const Card: React.FC<CardProps> = ({ title, subtitle, details, isActive }) => (
  <div
    className={`relative bg-white rounded-xl shadow-md p-6 w-[17rem] text-center transform transition-transform duration-500 ${
      isActive ? "scale-110 z-10" : "scale-110 "
    }`}
  >
    {/* Profile Image */}
    <div className="flex justify-center mb-4">
      <Image
        src="/assets/Ellipse 12.jpg"
        width={96}
        height={96}
        alt={title}
        className="rounded-full object-cover"
      />
      <Image
        src="/assets/image 17.png"
        width={96}
        height={96}
        alt={title}
        className="absolute w-5 h-4 top-24 right-[5.2rem]"
      />
    </div>

    {/* Title and Subtitle */}
    <h2 className="text-xl font-bold text-black">{title}</h2>
    <h3 className="text-blue-500 font-medium mt-1">{subtitle}</h3>

    {/* Detail Tags */}
    <div className="flex flex-wrap justify-center gap-1 mt-4">
      {details.map((detail, index) => (
        <span
          key={index}
          className=" text-gray-700 text-sm px-3 py-1 rounded border-black border shadow-sm"
        >
          {detail}
        </span>
      ))}
    </div>
  </div>
);

export default Card;
