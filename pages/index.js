import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Particles from "react-tsparticles";
const Home = () => {
  return (
    <div className="bg-primary/60 h-[100wv] bg-gradient-to-r from-primary/10 via-black/30 to-black/10 min-h-screen">
      {/* text */}
      <div className="w-full h-full ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-30 mt-5  xs:mt-0"
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
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-30"
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
            className="flex justify-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image <div>image</div> */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute
         mix-blend-color-dodge translate-z-0"
        ></div>
        <div className="">
          <ParticlesContainer></ParticlesContainer>
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[540px] max-h-[606px] absolute lg:bottom-0 lg:right-[20%]"
        >
          <Avatar></Avatar>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
