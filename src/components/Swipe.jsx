import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swipe = () => {
  /*   const cards = document.querySelectorAll(".card__swiper")

  cards.forEach(card => {
    const cardAfter = window.getComputedStyle(card, "::after")
    console.log(cardAfter.backgroundImage = "https")
  }) */

  return (
    <Swiper
      className="swiper"
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={8}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        // when window width is >= 320px
        "@0.320": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        "@0.480": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        "@0.640": {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        "@0.768": {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        "@1.240": {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        "@1.440": {
          slidesPerView: 8,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
      <SwiperSlide className="swiper-slide card__swiper"></SwiperSlide>
    </Swiper>
  );
};

export default Swipe;
