import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "AGENDO - Diploma Project",
          description:
            "In collaboration with Coredat Business GmbH, I accelerated workforce management and unlocked new features by developing a custom full-stack web application using C# .NET with Blazor.",
          path: "/agendo.png",
        },
        {
          title: "TRUENDO - Shopify App",
          description:
            "Developed App - Extensions for the companies SaaS product compatible with Shopify, Wordpress, Wix, Drupal and Magento in MERN stack or PHP to make the integration process more efficient",
          path: "/shopify.png",
        },
        {
          title: "Climatics",
          description:
            "Climatics is a student project where we crawled opinions about climate change from the web to have an AI which is being trained to tell if the opinion is good, neutral or bad. Upon that we visualized those 3 statistics and how the developed through out the time",
          path: "/climatics.png",
        },
        {
          title: "Kinetic Pitch",
          description:
            "Attending the Youth Innovation Competition Austria 2023 - where I wrote a business plan 'Kinetic Pitch' a software-concept which revolutionizes pitching and speaking. With AI its possible to detect common motion to use in certained presentations",
          path: "/kinetic.png",
        },
      ],
    },
    {
      images: [
        {
          title: "TRUENDO/DB - Cookie Database",
          description:
            "As the lead of a team of 4 developers, we managed to build a fullstack web app for TRUENDO Technologies to show crawled cookie data in a friendly UI",
          path: "/cookie.png",
        },
        {
          title: "We Amplify!",
          description:
            "With Adobe Illustrator, I created isometric vector designs used for landing pages, posters and flyers. Additionally I overtook customer requests for logo designs",
          path: "/amplify.png",
        },
        {
          title: "Sim Company Austria",
          description:
            "Attending the Youth Innovation Competition Austria 2023 - where we wrote a business plan 'Sim Company Austria' a software-concept which gamificates the school subject 'accounting'",

          path: "/simcompany.png",
        },
        {
          title: "vomhalterbach.at",
          description:
            "Deployed static website which serves the purpose of collecting new customer messages as well as serving a digital representation for local dog breeders",
          path: "/vomhalter.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="sm:h-[480px]"
      >
        {workSlides.slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid h-full md:grid-cols-2 grid-cols-1 grid-rows-1 md:grid-rows-2 gap-4 cursor-pointer">
                {item.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        ></Image>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div
                          className="
                          absolute 
                          p-5
                          bottom-0 translate-y-full 
                          group-hover:translate-y-4
                          xl:group-hover:-translate-y-0
                          lg:group-hover:-translate-y-10
                          md:group-hover:translate-y-2
                          xs:group-hover:translate-y-4

                          text-[8px]
                          xs:text-[16px]
                          transition-all duration-300"
                        >
                          <div className="flex flex-col items-center gap-x-2 text-[13px] tracking-[0.2rem] sm:text-sm">
                            <div className="delay-100 text-lg font-bold">
                              {image.title}
                            </div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {image.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
