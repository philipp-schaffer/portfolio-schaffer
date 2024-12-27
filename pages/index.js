import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import About from "./about";
import Services from "./services";
import Work from "./work";
import Contact from "./contact";
const Home = () => {
  return (
    <div>
      {/* hero */}
      <div id="home" className="w-full h-[100vh] relative">
        <div className="text-center flex flex-col justify-center pt-5 xs:pt-10 sm:pt-15 md:pt-20 xl:pt-40 xl:text-left container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-30 text-[2rem] xs:text-[2rem] lg:text-[3rem] xs:mt-0"
          >
            Turning Visions Into
            <span className="text-accent">
              <br />
              Digital Reality
            </span>
          </motion.h1>
          {/* subtitle */}

          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm text-[1rem] lg:text-[1.2rem] xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-30"
          >
            My name is Philipp, I am a 20 year old ambitioned software developer
            and designer. My goal is to create tools which help others through
            out the day :)
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-left relative"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        <div className="w-[100vw] h-full absolute right-0 bottom-0">
          <div
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute
         mix-blend-color-dodge translate-z-0"
          ></div>
          <div className="h-[100vh]">
            <ParticlesContainer></ParticlesContainer>
          </div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full h-full max-w-[540px] max-h-[606px] absolute bottom-0 right-[20%]"
          >
            <Avatar className="z-10 avatar"></Avatar>
          </motion.div>
        </div>
      </div>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
};

export default Home;
