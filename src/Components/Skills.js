import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import SkillLists from "../Data/SkillList";

function Skills() {
  return (
    <Swiper
      modules={[EffectCoverflow, Scrollbar, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides="true"
      effect="coverflow"
      scrollbar
      autoplay={{ delay: 1000 }}
    >
      {SkillLists.map((item, index) => (
        <SwiperSlide>
          <img src={item.src} alt={item.name} role="presentation" />
          <p class="image-name">{item.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Skills;
