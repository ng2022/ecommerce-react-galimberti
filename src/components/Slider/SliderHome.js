// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./stylesslider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import ManHome from "../../assets/images/slider/man-slider-home.jpg"
import WomenHome from "../../assets/images/slider/women-slider-home.jpg"
import AboutSliderHome from "../../assets/images/slider/about-slider-home.jpg"

function SliderHome () {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="containerSLides">
        <h2>Man collection</h2>
        <Link className='buttonSlider' to='/products/pants'>Discover Man</ Link> 
            <img src={ManHome} />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="containerSLides">
            <h2>Women collection</h2>
            <img src={WomenHome} />
            <button className="buttonSlider">Discover Women</button>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="containerSLides">
            <h2>About Us</h2>
            <img src={AboutSliderHome} />
            <button className="buttonSlider">About Us</button>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderHome;