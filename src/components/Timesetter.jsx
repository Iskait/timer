import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import '../scss/timesetter.scss';


function Timesetter({setHours, setMinutes, setSeconds}) {

    const minutes = [...Array(60)].map((_,i)=>i);
    const seconds = minutes;
    const hours = [...Array(24)].map((_,i)=>i);
    return (
        <div className="swiper__container">
            <div className="swiper__time-setter">
            <p className='swiper__input'>hours</p>
            <Swiper
                direction={'vertical'}
                modules={[Mousewheel]}
                className="mySwiper"
                grabCursor={true}
                slidesPerView={4}
                centeredSlides={true}
                mousewheel={true}
                onSlideChange={(swiper) => setHours(swiper.realIndex)}>
                {hours.map((slide,idx) => <SwiperSlide key={idx}>{slide}</SwiperSlide>)}
            </Swiper>
            </div>
            <div className="swiper__time-setter">
            <p className='swiper__input'>minutes</p>
            <Swiper
                direction={'vertical'}
                modules={[Mousewheel]}
                className="mySwiper"
                grabCursor={true}
                slidesPerView={4}
                centeredSlides={true}
                mousewheel={true}
                onSlideChange={(swiper) => setMinutes(swiper.realIndex)}>
                {minutes.map((slide,idx) => <SwiperSlide key={idx}>{slide}</SwiperSlide>)}
            </Swiper>
            </div>
            <div className="swiper__time-setter">
            <p className='swiper__input'>seconds</p>
            <Swiper
                direction={'vertical'}
                modules={[Mousewheel]}
                className="mySwiper"
                grabCursor={true}
                slidesPerView={4}
                centeredSlides={true}
                mousewheel={true}
                onSlideChange={(swiper) => setSeconds(swiper.realIndex)}>
                {seconds.map((slide,idx) => <SwiperSlide key={idx}>{slide}</SwiperSlide>)}
            </Swiper>
            </div>
        </div>
    )
}

export default Timesetter;