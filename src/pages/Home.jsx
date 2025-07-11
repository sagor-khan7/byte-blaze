import Hero from "../components/Hero";
import wave from "../assets/wave.svg";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-133px)]">
      <Hero />
      <img src={wave} alt="wave svg" className="absolute bottom-0 w-full" />
    </div>
  );
}
