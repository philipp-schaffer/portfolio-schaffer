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
    title: "Crop",
    description: "Adjust the crop settings of your image.",
  },
  {
    id: 2,
    icon: <RxDesktop />,
    title: "Desktop",
    description: "Optimized for desktop view.",
  },
  {
    id: 3,
    icon: <RxPencil2 />,
    title: "Pencil",
    description: "Draw and edit your design.",
  },
  {
    id: 4,
    icon: <RxReader />,
    title: "Reader",
    description: "View your document in a reader mode.",
  },
  {
    id: 5,
    icon: <RxCode />,
    title: "Coding",
    description: "Launch your project to the next level.",
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
        className="h-[240px] sm:h-[340px]"
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
