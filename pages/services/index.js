import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div id="services" className="flex items-center p-5 relative h-[100vh]">
      <Circles></Circles>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className=" text-center flex xl:w-[30vw] flex-col mb-4 lg:text-left xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 "
            >
              My Services
              <span className="text-accent"> .</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Building production ready software and creating professional
              designs since 4 years.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider></ServiceSlider>
          </motion.div>
        </div>
      </div>
      <Bulb></Bulb>
    </div>
  );
};

export default Services;
