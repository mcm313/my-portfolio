import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import SkillLists from "../Data/SkillList";

function Skills() {
  return (
    <Swiper
      modules={[EffectCoverflow]}
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides="true"
      effect="coverflow"
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
