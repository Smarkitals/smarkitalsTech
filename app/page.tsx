import Image from "next/image";
import Hero from "./hero/page";
import Benefits from "./benefits/page";
import Process from "./process/page";
import Service from "./services/page";

export default function Home() {
  return (
   <div>
    <Hero />
    <Service />
    <Process />
    <Benefits />

   </div>
  );
}
