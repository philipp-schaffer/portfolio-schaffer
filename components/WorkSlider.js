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
            "A part of my journey began with a part-time job at an Austrian IT company during school, where I learned to code app extensions for CMS systems like WordPress, Shopify, and Wix.",
          path: "/truendo.png",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "TRUENDO/DB - Cookie Database",
          path: "/truendo-db.png",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
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
        className="h-[100%] sm:h-[480px]"
      >
        {workSlides.slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 md:grid-rows-2 gap-4 cursor-pointer">
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
