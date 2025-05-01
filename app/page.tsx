"use client"

import { useInView } from 'react-intersection-observer';
import Divider from "./components/divider";
import Navbar from "./components/navbar";
import Card from "./components/card";
import 'animate.css';

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.2,     // fire when 20% of section is visible
  });

  return (
    <>
      <section className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col justify-center items-center animate__animated animate__fadeInLeft flex-grow px-12 mt-30">
          <h1 id='home' className="text-7xl font-black">
            Hello world!
          </h1>
          <p className="text-lg text-secondary mt-4">
            This is a test / showcase of my pro powers on Next.JS and React + Tailwind
          </p>
          <img className='my-4 rounded-md shadow-2xl border-white/25 border-1' src="https://picsum.photos/960/550" alt="" />
        </main>
        <div id='cards' className="px-12 mb-8">
          <Divider text="Cards" />
        </div>
      </section>

      {/* Cards section with animate.css triggered on scroll */}
      <section
        ref={ref}
        className={`grid place-items-center grid-rows-2 grid-cols-2 place-content-center p-4 md:p-12 space-y-8 transition-opacity duration-1000 ${
          inView ? "animate__animated animate__fadeInLeft" : "opacity-0"
        }`}
      >
        <Card
          sideText="CARD EXAMPLE"
          mainText="Game Development"
          secondaryText="I have experience in Lua, C#, and Python. I worked with unity, and unreal engine"
        />
        <Card
          sideText="CARD EXAMPLE"
          mainText="lorem ipsum?.."
          secondaryText="nah bro nobody even cares sybau r u fr rn"
        />
        <Card
          sideText="CARD EXAMPLE"
          mainText="lorem ipsum?.."
          secondaryText="nah bro nobody even cares sybau r u fr rn"
        />
        <Card
          sideText="CARD EXAMPLE"
          mainText="lorem ipsum?.."
          secondaryText="nah bro nobody even cares sybau r u fr rn"
        />
      </section>
    </>
  );
}
