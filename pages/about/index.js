// icons

import { useState } from "react";
import react from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaShopify,
  FaVuejs,
  FaJava,
  FaPython,
  FaWix,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMongodb,
  SiPostgresql,
  SiDotnet,
  SiSpringboot,
  SiBlazor,
  SiDocker,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiMysql,
  SiKubernetes,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <SiSpringboot />,
          <FaReact />,
          <FaVuejs />,
          <SiBlazor />,
          <SiFramer />,
          <FaShopify />,
          <FaWordpress />,
          <FaWix />,
        ],
      },
      {
        title: "Backend Technologies",
        icons: [
          <FaJava />,
          <SiDotnet />,
          <FaPython />,

          <SiNextdotjs />,

          <SiMongodb />,
          <SiMysql></SiMysql>,
          <SiPostgresql />,
          <SiDocker />,
        ],
      },
      {
        title: "Content Creation",
        icons: [
          <SiAdobeillustrator></SiAdobeillustrator>,

          <SiAdobephotoshop />,
          <SiAdobepremierepro></SiAdobepremierepro>,
          <SiAdobexd />,

          <FaFigma />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Youth Innovation Competition Winner - DigiBonus Prize",
        stage: "2023",
      },
      {
        title: "Youth Innovation Competition - 3rd round of 5",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Developer for Coredat Business GmbH - ",
        stage: "10/2023 - 05/2024",
      },
      {
        title:
          "Junior Software Developer/Graphic Designer at TRUENDO Technologies GmbH - part time ",
        stage: "09/2021 - 09/2023",
      },
      {
        title: "Summer Intern at Decidio GmbH",
        stage: "07/2021 - 08/2021",
      },
      {
        title: "Summer Intern at WienerLokalbahnen GmbH",
        stage: "08/2020 - 09/2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[100vw] xs:h-[100vh] text-center xl:text-left text-sm xs:text-lg relative">
        <Circles></Circles>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>
        <div className="container w-full h-[70vh]  align-top mx-auto  flex flex-col items-center xl:flex-row gap-x-9">
          <div className="flex-1 flex flex-col justify-center">
            <div>
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2"
              >
                <span className="font-thin">Hey!</span> <br></br>
                My name is <span className="text-accent">Philipp</span>{" "}
                <br></br>
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
              >
                A 20 year old aspiring developer from Austria. I am passionate
                about innovate digital solutions & creating tools to help
                others.
              </motion.p>
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
              >
                <div className="flex flex-1 xl:gap-x-6">
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={2} duration={5} />
                      <span> +</span>
                    </div>
                    <div className="flex justify-center xl:justify-start ">
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2 ">
                        Years of experience{" "}
                        <span className="text-[8px]">(part-time)</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={5} duration={5} />
                    </div>
                    <div className="flex justify-center xl:justify-start ">
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2 ">
                        years of education
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={5} duration={5} />
                      <span> +</span>
                    </div>
                    <div className="flex justify-center xl:justify-start ">
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2 ">
                        Professional Projects
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={50} duration={5} />
                      <span> +</span>
                    </div>
                    <div className="flex justify-center xl:justify-start ">
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2 ">
                        Finished projects
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[400px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`cursor-pointer capitalize xl:text-lg relative ${
                    index === itemIndex
                      ? "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                      : "after:w-8 after:bg-white"
                  } after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex-1 flex-col md-flex-row max-w-max gap-x-2 items-center text-white"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((item, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
