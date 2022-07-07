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
          delay: 9000,
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
          <h1>Man collection</h1>
          <Link className='buttonSlider' to='/products/man'>Discover Man</ Link> 
          <img src={ManHome} />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="containerSLides">
            <h1>Women collection</h1>
            <Link className='buttonSlider' to='/products/women'>Discover Women</ Link> 
            <img src={WomenHome} />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="containerSLides">
            <h1>About Us</h1>
            <Link className='buttonSlider' to='/products/pants'>About Us</ Link> 
            <img src={AboutSliderHome} />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderHome;