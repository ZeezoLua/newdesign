import Divider from "./components/divider";
import Navbar from "./components/navbar";
import Card from "./components/card";
// import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <div className="grid place-items-center place-content-center">
        <Card mainText={"lorem ipsum?.."} secondaryText="nah bro nobody even cares sybau r u fr rn" />
      </div>
    </div>
  );
}
