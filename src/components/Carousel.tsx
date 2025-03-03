"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // 引入 Swiper 类型
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useRef, useState } from "react";
import "./Carousel.css";
import { EffectCoverflow } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const slides = [
  {
    image:
      "https://assets.revolut.com/published-assets-v3/6e285fcd-c982-4aa5-b9bb-190242793224/72493ed9-cd51-4753-87b0-cbab21c99e16.png",
    currency: "¥20,126",
    location: "Japan - JPY",
    expense: "Drinks at Yokocho",
    amount: "-¥1,550",
  },
  {
    image:
      "https://assets.revolut.com/published-assets-v3/9e8da125-cdfb-474a-b14f-d87d8be735d2/db6be889-8f37-44ac-b45e-70a7684dc93b.png",
    currency: "S$6,252",
    location: "Main",
    expense: "Trainers cashback",
    amount: "+S$23.90",
  },
  {
    image:
      "https://assets.revolut.com/published-assets-v3/98884e6b-1786-44f4-baaf-8ad8a79c1b46/eaa16165-46e8-48a6-8b5e-7e1503ba1210.webp",
    currency: "$2,500",
    location: "United States - USD",
    expense: "New York Pizza",
    amount: "-$20",
  },
  {
    image:
      "https://assets.revolut.com/published-assets-v3/6e285fcd-c982-4aa5-b9bb-190242793224/72493ed9-cd51-4753-87b0-cbab21c99e16.png",
    currency: "¥20,126",
    location: "Japan - JPY",
    expense: "Drinks at Yokocho",
    amount: "-¥1,550",
  },
  {
    image:
      "https://assets.revolut.com/published-assets-v3/9e8da125-cdfb-474a-b14f-d87d8be735d2/db6be889-8f37-44ac-b45e-70a7684dc93b.png",
    currency: "S$6,252",
    location: "Main",
    expense: "Trainers cashback",
    amount: "+S$23.90",
  },
  {
    image:
      "https://assets.revolut.com/published-assets-v3/98884e6b-1786-44f4-baaf-8ad8a79c1b46/eaa16165-46e8-48a6-8b5e-7e1503ba1210.webp",
    currency: "$2,500",
    location: "United States - USD",
    expense: "New York Pizza",
    amount: "-$20",
  },
];

export default function Carousel() {
  const swiperRef = useRef<SwiperType | null>(null); // 指定类型
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex); // 更新当前活动的下标
  };
  const handleSlideClick = (swiper: SwiperType) => {
    console.log(swiper.activeIndex, currentIndex);
    if (currentIndex === swiper.activeIndex) {
      swiper.slidePrev();
    }
  };
  return (
    <Swiper
      onSlideChange={handleSlideChange}
      onClick={handleSlideClick}
      slidesPerView={isMobile ? 1 : 3} // 可见3张卡片
      centeredSlides={false} // 让当前选中的幻灯片居中
      spaceBetween={40} // 负间距让卡片看起来更近
      loop={true} // 无限循环
      slideToClickedSlide={true} // 点击侧边幻灯片自动选中
      coverflowEffect={{
        rotate: 0, // 不旋转
        stretch: 0, // 不拉伸
        depth: 20, // 深度
        modifier: 10, // 影响度
        slideShadows: true, // 关闭阴影
      }}
      effect="coverflow"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[EffectCoverflow, Pagination]}
      className="w-full max-w-5xl  mx-auto  !pb-10"
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} custom-bullet"></span>`;
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-2xl    relative">
            <Image
              src={slide.image}
              alt={slide.expense}
              width={630}
              height={890}
              className="w-full rounded-2xl h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
