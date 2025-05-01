"use client";

import { useInView } from "react-intersection-observer";
import Divider from "./components/divider";
import Navbar from "./components/navbar";
import Card from "./components/card";
import "animate.css";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="animate__animated animate__fadeInLeft flex flex-col min-h-[calc(100vh-64px)] justify-center items-center px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 md:pt-36 pb-12 text-center text-white">
        <h1 id="home" className="text-4xl sm:text-5xl md:text-7xl font-black">
          Hello world!
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-secondary mt-2 sm:mt-4 max-w-xl sm:max-w-2xl">
          This is a test / showcase of my pro powers on Next.JS and React + Tailwind
        </p>

        <div className="w-full max-w-2xl sm:max-w-3xl mx-auto flex justify-center mt-4 sm:mt-6 md:mt-8">
          <img
            className="rounded-lg shadow-2xl border border-white/25 object-cover aspect-video w-full"
            src="https://picsum.photos/640/250"
            alt="Showcase"
          />
        </div>
      </section>

      {/* DIVIDER */}
      <div id="cards" className="px-4 sm:px-6 md:px-12 mb-8 mt-16 sm:mt-20 md:mt-24">
        <Divider text="Cards" />
      </div>

      {/* CARDS SECTION */}
      <section
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12 transition-opacity duration-1000 ${
          inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
        }`}
      >
        <Card
          sideText="CARD EXAMPLE"
          mainText="Game Development"
          secondaryText="I have experience in Lua, C#, and Python. I worked with Unity, and Unreal Engine."
        />
        <Card
          sideText="CARD EXAMPLE"
          mainText="Sample Topic"
          secondaryText="Custom secondary text to fill out the design. Can be swapped later."
        />
        <Card
          sideText="CARD EXAMPLE"
          mainText="Sample Topic"
          secondaryText="Custom secondary text to fill out the design. Can be swapped later."
        />
        <Card
          sideText="CARD EXAMPLE"
          mainText="Sample Topic"
          secondaryText="Custom secondary text to fill out the design. Can be swapped later."
        />
      </section>
    </>
  );
}