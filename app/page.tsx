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
        <main className="flex-grow px-12 mt-20">
          <h1 className="text-3xl font-bold">
            Hello world!
          </h1>
          <p className="text-lg mt-4">
            This is a test / showcase of my pro powers on Next.JS and React + Tailwind
          </p>
        </main>
        <div className="px-12 mb-8">
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
        <Card
          sideText="CARD EXAMPLE"
          mainText="lorem ipsum?.."
          secondaryText="nah bro nobody even cares sybau r u fr rn"
        />
      </section>
    </>
  );
}
