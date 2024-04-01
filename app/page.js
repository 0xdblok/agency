import Image from "next/image";
import Navbar from "./component/global/navbar.js";
import Hero from "./component/Hero/hero.js";
import Service from "./component/Hero/service.js";
import About from "./component/Home/about.js";
import Process from "./component/Home/process.js";
import Showcase from "./component/Home/showcase.js";
import Testimonal from "./component/Home/testimonal.js";
import Footer from "./component/global/footer.js";
export default function Home() {
  return (
    <main className="4 bg-black py-6 w-full h-full ">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Showcase />
      <Testimonal />
      <Footer />
    </main>
  );
}
