import { useDispatch } from "react-redux";
import {
  setHours,
  setMinutes,
  setSeconds,
} from "../redux/slices/timesetterSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../scss/timesetter.scss";

function Timesetter() {
  const dispatch = useDispatch();

  const clock = ["hours", "minutes", "seconds"];
  const setters = [setHours, setMinutes, setSeconds];

  return (
    <div className="swiper__container">
      {clock.map((item, idx) => {
        return (
          <div key={item + idx} className="swiper__time-setter">
            <p className="swiper__input">{item}</p>
            <Swiper
              direction={"vertical"}
              modules={[Mousewheel]}
              className="mySwiper"
              grabCursor={true}
              slidesPerView={4}
              centeredSlides={true}
              mousewheel={true}
              onSlideChange={(swiper) => dispatch(setters[idx]({ [item]: swiper.realIndex }))}>
              {[...Array(item === "hours" ? 24 : 60)].map((_, idx) => (
                <SwiperSlide key={idx}>{idx}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
}

export default Timesetter;
