import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxCode,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";

// Example service data
const serviceData = [
  {
    id: 1,
    icon: <RxCrop />,
    title: "Visual Designs",
    description:
      "Creation of vector graphics and video editing to 3D modeling and UX/UI design, I use Adobe products, Blender (Maya) as well as Figma to create digital solutions.",
  },
  {
    id: 2,
    icon: <RxCode />,
    title: "Coding",
    description:
      "With years of experience in Java, C# and JavaScript frameworks and developing full-stack applications, I have a solid understanding of both front-end and back-end development.",
  },
  {
    id: 3,
    icon: <RxPencil2 />,
    title: "Art",
    description:
      "With doing traditional drawing and digital illustrations consistantly, I am able to combine different artistic techniques and styles to create unique and eye-catching artwork.",
  },
];

const ServiceSlider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="h-[100%] sm:h-[340px]"
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
              flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)]"
              >
                <div className="text-accent text-4xl mb-4">{item.icon}</div>
                <div>
                  <div className="font-bold mb-2 text-lg">{item.title}</div>
                  <div className="font-thin mb-2 max-w-[350px] leading-normal">
                    {item.description}
                  </div>
                  <div className="text-3xl relative -bottom-2 ">
                    <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"></RxArrowTopRight>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
