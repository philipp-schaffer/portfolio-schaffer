import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Odor_Mean_Chey } from "next/font/google";
import Image from "next/image";
const Work = () => {
  return (
    <div className="">
      <div className="h-[100vw]">
        <div className="h-[92vh] w-full flex items-center ">
          <Circles></Circles>
          <div className="container h-full mx-auto">
            <div className="flex flex-col xl:flex-row gap-x-8">
              <div className="text-center flex xl:w-[30vw] flex-col mb-4 lg:text-left xl:mb-0">
                <motion.h2
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2 xl:mt-8 w-[100%]"
                >
                  Work & Projects <span className="text-accent"> .</span>
                </motion.h2>
                <motion.p
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                >
                  During my time as a student at the HTL Spengergasse I crafted
                  over 50 projects and additionally worked part-time for 2+
                  years as Junior Dev/Graphic Designer at Austria IT Consulting
                  Company
                </motion.p>
              </div>
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full xl:max-w-[65%]"
              >
                {" "}
                <WorkSlider></WorkSlider>
                <div className="flex items-center justify-center p-4">
                  <Image src={"/swipeleft.png"} width={48} height={113}></Image>
                </div>
              </motion.div>
            </div>
          </div>
          <Bulb></Bulb>
        </div>
      </div>
    </div>
  );
};

export default Work;
