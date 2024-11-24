"use client";
import React, { useState } from "react";
// import Hero from "./components/organisms/Hero";
import Card from "./components/molecules/Card";
import InfoSection from "./components/molecules/InfoSection";
import Footer from "./components/organisms/Footer";
import Navbar from "./components/organisms/Navbar";
import Image from "next/image";
// import {marketing, image,box, target,call} from "/assets"
// Static data
const staticData = {
  heroTitle: " 외국인 인재를 찾고 계신가요?",
  heroDescription:
    "법률 및 인사관리를 부담없이 1주일 이내에 원격으로 채용해보세요.",
  cards: [
    {
      title: "Abhishek Gupta",
      subtitle: "마케팅 - 2y",
      details: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
      // image: "/assets/avatar1.png",
    },
    {
      title: "Abhishek Gupta",
      subtitle: "마케팅 - 2y",
      details: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
      // image: "/assets/avatar1.png",
    },
    {
      title: "Abhishek Gupta",
      subtitle: "마케팅 - 2y",
      details: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
      // image: "/assets/avatar1.png",
    },
  ],
  sections: [
    {
      title: "해외 마케팅",
      animation: "fade-in-left",
      icon: "/assets/icon-marketing.png",
    },
    {
      title: "퍼블리셔",
      animation: "fade-in-left",
      icon: "/assets/icon-image.png",
    },
    {
      title: "해외 마케팅",
      animation: "fade-in-left",
      icon: "/assets/icon-box.png",
    },
    {
      title: "퍼블리셔",
      animation: "fade-in-left",
      icon: "/assets/icon-target.png",
    },
    {
      title: "해외 마케팅",
      animation: "fade-in-left",
      icon: "/assets/icon-call.png",
    },
  ],
  footer: {
    company: "Hyperhire India Private Limited",
    ceo: "강두혁",
    address:
      "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India",
  },
};

const Home = () => {
  const { heroTitle, heroDescription, cards, sections, footer } = staticData;
  const [activeIndex, setActiveIndex] = useState(1); // Center card index

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-full sm:h-[116vh] text-white pb-4"
      style={{ backgroundImage: "url('/assets/Group 5201 (1).png')" }}
    >
      <Navbar />
      <div className="font-sans">
        {/* <Hero title={heroTitle} description={heroDescription} /> */}
        <div className="">
          <div className="font-sans flex flex-col md:flex-row">
            {/* Section 1: Hero Section */}
            <section className="text-left  mt-4 py-8 px-8 w-full md:w-[45rem] flex-1">
              {/* Tooltip Image */}
              <div
                className="inline-block py-1 relative group fade-in-tooltip"
                style={{
                  animation: "fadeIn 300ms ease-in-out 2000ms forwards", // Tooltip appears last
                }}
              >
                {/* Image for larger screens */}
                <div className="bottom-full mb-2 text-sm p-2 rounded-lg hidden md:block">
                  <Image
                    src="/assets/Frame 5040.png"
                    alt="Image for larger screens"
                    width={500}
                    height={500}
                    className="w-32"
                  />
                </div>

                {/* Image for smaller screens */}
                <div className="bottom-full mb-2 text-sm p-2 rounded-lg block md:hidden">
                  <Image
                    src="/assets/Frame 5040 (1).png"
                    alt="Image for smaller screens"
                    width={500}
                    height={500}
                    className="w-32"
                  />
                </div>
              </div>

              {/* Main Heading */}
              <h1
                className="text-4xl font-extrabold mb-4 leading-snug fade-in-up"
                style={{
                  animation: "fadeInUp 500ms ease-in-out 0ms forwards", // Appears first
                }}
              >
                최고의 실력을 가진 <br />
                {heroTitle}
              </h1>

              {/* Subheading */}
              <div
                className="leading-snug fade-in-up"
                style={{
                  animation: "fadeInUp 500ms ease-in-out 500ms forwards", // Appears after heading
                }}
              >
                <p className="text-lg mb-6">{heroDescription}</p>
                <p className="text-lg underline hidden md:block">
                  개발자가 필요하신가요?
                </p>
              </div>

              {/* Statistics Section */}
              {/* flex justify-center gap-12 mt-8 text-left leading-snug fade-in-up  md:block */}
              <div
                className="flex justify-center gap-12 mt-8 text-left leading-snug fade-in-up invisible sm:visible"
                style={{
                  animation: "fadeInUp 500ms ease-in-out 1000ms forwards", // Appears after subheading
                }}
              >
                <div className="">
                  <hr />
                  <p className="text-lg font-bold text-white py-2">
                    평균 월 120만원
                  </p>
                  <p className="text-sm">
                    임금을 해당 국가를 기준으로 계산합니다.
                  </p>
                </div>
                <div className="">
                  <hr />
                  <p className="text-lg font-bold text-white py-2">
                    최대 3회 인력교체
                  </p>
                  <p className="text-sm">
                    막상 채용해보니 맞지 않아도 걱정하지 마세요.
                  </p>
                </div>
                <div className="">
                  <hr />
                  <p className="text-lg font-bold text-white py-2">
                    평균 3일, 최대 10일
                  </p>
                  <p className="text-sm">
                    급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* Card Section (Slider) */}
            <section className="w-full py-16 flex items-center justify-center flex-1">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="left-0 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center z-50"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_8352)">
                    <path
                      d="M20.0943 26.6665C20.3583 26.6607 20.6105 26.5561 20.801 26.3732C20.9882 26.1857 21.0934 25.9315 21.0934 25.6665C21.0934 25.4015 20.9882 25.1473 20.801 24.9598L12.001 16.1598L20.8143 7.01316C21.0016 6.82566 21.1068 6.57149 21.1068 6.30649C21.1068 6.04149 21.0016 5.78733 20.8143 5.59983C20.6268 5.41256 20.3726 5.30737 20.1076 5.30737C19.8426 5.30737 19.5885 5.41256 19.401 5.59983L9.90763 15.4665C9.81531 15.5582 9.74205 15.6673 9.69205 15.7874C9.64205 15.9075 9.61631 16.0364 9.61631 16.1665C9.61631 16.2966 9.64205 16.4255 9.69205 16.5456C9.74205 16.6657 9.81531 16.7748 9.90763 16.8665L19.3876 26.3865C19.5787 26.5668 19.8316 26.667 20.0943 26.6665Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_8352">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="matrix(-1 0 0 1 32 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              {/* Cards */}
              <div className="relative flex w-full justify-center items-center">
                {cards.map((card, index) => {
                  const isActive = index === activeIndex;
                  const isLeft =
                    index === (activeIndex - 1 + cards.length) % cards.length;
                  const isRight = index === (activeIndex + 1) % cards.length;

                  return (
                    <div
                      key={index}
                      className={`absolute transition-transform duration-500 group ${
                        isActive
                          ? "z-20 transform scale-90 md:scale-110 translate-y-0"
                          : isLeft
                            ? "z-10 transform scale-75 -translate-x-20 opacity-95 sm:scale-100 sm:-translate-x-36" // Adjust for mobile
                            : isRight
                              ? "z-10 transform scale-75 translate-x-20 opacity-95 sm:scale-100 sm:translate-x-36" // Adjust for mobile
                              : "hidden"
                      }`}
                    >
                      {/* Tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-[105%] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm p-2">
                        <Image
                          src="/assets/Group 5097.png" // Tooltip image
                          alt="Tooltip"
                          width={500}
                          height={500}
                          className="w-32"
                        />
                      </div>

                      {/* Card Component */}
                      <Card
                        title={card.title}
                        subtitle={card.subtitle}
                        details={card.details}
                        // image={card.image}
                        isActive={isActive}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="right-0 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center z-50"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_8351)">
                    <path
                      d="M11.9057 26.6665C11.6417 26.6607 11.3895 26.5561 11.199 26.3732C11.0117 26.1857 10.9066 25.9315 10.9066 25.6665C10.9066 25.4015 11.0117 25.1473 11.199 24.9598L19.999 16.1598L11.1857 7.01316C10.9984 6.82566 10.8932 6.57149 10.8932 6.30649C10.8932 6.04149 10.9984 5.78733 11.1857 5.59983C11.3732 5.41256 11.6273 5.30737 11.8924 5.30737C12.1574 5.30737 12.4115 5.41256 12.599 5.59983L22.0923 15.4665C22.1847 15.5582 22.2579 15.6673 22.3079 15.7874C22.3579 15.9075 22.3837 16.0364 22.3837 16.1665C22.3837 16.2966 22.3579 16.4255 22.3079 16.5456C22.2579 16.6657 22.1847 16.7748 22.0923 16.8665L12.6124 26.3865C12.4213 26.5668 12.1684 26.667 11.9057 26.6665Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_8351">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </section>
          </div>
        </div>

        <div
          className="my-8 flex space-x-4 px-8 leading-snug fade-in-up invisible md:visible sm:invisible"
          style={{
            animation: "fadeInUp 500ms ease-in-out 1500ms forwards", // Appears after subheading
          }}
        >
          {sections.map((section, index) => (
            <InfoSection
              key={index}
              title={section.title}
              animation={section.animation}
              icon={
                <Image
                  width={500}
                  height={500}
                  src={section.icon} // Use the mapped icon path
                  alt={section.title}
                  className="w-[2rem] h-[2rem]"
                />
              }
            />
          ))}
        </div>

        <div className="text-white py-8 px-8 lg:hidden">
          {/* Checkboxes in two columns */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 bg-blue-500"
                defaultChecked
              />
              <span>한국어 능력</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" defaultChecked />
              <span>업무 수행 능력</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" defaultChecked />
              <span>경험 여부</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" defaultChecked />
              <span>평판 조회</span>
            </div>
          </div>

          {/* Underlined text */}
          <div className="text-left">
            <p className="text-xl font-semibold underline text-yellow-400">
              개발자가 필요하신가요?
            </p>
          </div>
        </div>

        <Footer
          company={footer.company}
          ceo={footer.ceo}
          address={footer.address}
        />
      </div>
    </div>
  );
};

export default Home;
