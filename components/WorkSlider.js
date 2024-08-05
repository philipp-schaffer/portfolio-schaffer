import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/Image";
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
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
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
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
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
                          bottom-0 translate-y-full 
                          group-hover:-translate-y-10
                          group-hover:xl:-translate-y-5
                          group-hover:lg:-translate-y-14
                          group-hover:md:-translate-y-3
                          group-hover:sm:-translate-y-1
                          group-hover:translate-x-1 
                          group-hover:sm:-text-[6px]
                          transition-all duration-300"
                        >
                          <div className="flex flex-col items-center gap-x-2 text-[13px] tracking-[0.2rem] sm:text-sm">
                            <div className="delay-100 text-lg font-bold">
                              Agendo
                            </div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. A eveniet dignissimos distinctio
                              tempore harum laudantium. Lorem ipsum dolor sit,
                              amet consectetur adipisicing elit. A eveniet
                              dignissimos distinctio tempore harum laudantium.
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
