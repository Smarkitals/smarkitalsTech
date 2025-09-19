
import Hero from "./hero/page";
import Benefits from "./benefits/page";
import Process from "./process/page";
import Service from "./services/page";
import About from "./about/page";

export default function Home() {
  return (
   <div>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
       <div id="service"><Service /></div>
      <div id="process"><Process /></div>
      <div id="benefits"><Benefits /></div>
    </div>
  );
}
