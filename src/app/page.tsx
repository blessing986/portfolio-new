import About from "@/components/About/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
