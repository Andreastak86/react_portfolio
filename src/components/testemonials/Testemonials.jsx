import React from "react";
import "./testemonials.css";
import T1 from "../../assets/AOC U32.jpg";
import T2 from "../../assets/Arlo.jpg";
import T3 from "../../assets/OP8T.jpg";
import T4 from "../../assets/Phil 272.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: T1,
    name: "AOC U32",
    review: "En perfekt allround skjerm.",
  },
  {
    avatar: T2,
    name: "Arlo Doorbell",
    review: "For deg som ikke gidd å reise deg når det ringer på.",
  },
  {
    avatar: T3,
    name: "OnePlus 8T",
    review: "OnePlus har gjort det igjen.",
  },
  {
    avatar: T4,
    name: "Phillips 272",
    review: "Et godt valg til kontoret.",
  },
];

const Testemonials = () => {
  return (
    <section id='testemonials'>
      <h5>På Fritiden</h5>
      <h2>Skribent for IT-Pro</h2>

      <Swiper
        className='container testemonials__container'
        // install Swiper modules
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testemonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Test' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testemonials;
