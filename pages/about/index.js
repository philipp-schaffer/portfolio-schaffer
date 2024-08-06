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
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiMysql,
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

          <FaWordpress />,
          <FaShopify />,
        ],
      },
      {
        title: "Backend Technologies",
        icons: [
          <FaJava />,
          <SiNextdotjs />,
          <SiDotnet />,
          <SiMongodb />,
          <SiMysql></SiMysql>,
          <SiPostgresql />,
          <FaPython />,
        ],
      },
      {
        title: "Content Creation",
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobephotoshop />,
          <SiAdobeillustrator></SiAdobeillustrator>,
          <SiAdobepremierepro></SiAdobepremierepro>,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[100vw] text-center xl:text-left text-sm xs:text-lg relative">
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
        <div className="container align-top mx-auto  flex flex-col items-center xl:flex-row gap-x-9">
          <div className="flex-1 flex flex-col justify-center">
            <div>
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2"
              >
                Captivating <span className="text-accent">stories</span> birth
                magnificent desgins.
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
              >
                10 years ago, I began freelancing as a developer. Since then,
                I´ve done remote work for agan encies, consulted for startups,
                and colla borated on digital products for business and customer
                use.
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
                      <CountUp start={0} end={3} duration={5} />
                    </div>
                    <div className="flex justify-center xl:justify-start ">
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2 ">
                        Years of experience
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={100} duration={5} />
                      <span> +</span>
                    </div>
                    <div className="flex justify-center xl:justify-start ">
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mb-2 ">
                        Satisfied clients
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
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
