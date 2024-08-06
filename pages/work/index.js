import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-[100wv]">
      <div className="h-full w-full bg-primary/30 flex items-center">
        <Circles></Circles>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col mb-4 lg:text-left xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                eveniet dignissimos distinctio tempore harum laudantium.
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
            </motion.div>
          </div>
        </div>
        <Bulb></Bulb>
      </div>
    </div>
  );
};

export default Work;
