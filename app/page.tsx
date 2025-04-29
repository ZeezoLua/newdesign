import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline px-12 mt-20">
        Hello world!
      </h1>
      <p className="text-lg px-12">
        This is a simple Next.js app with Tailwind CSS.
      </p>
    </>
  );
}
