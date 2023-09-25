import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax,Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import img1 from '/src/images/food.jpg';
import img2 from '/src/images/foodd.jpg';
import img3 from '/src/images/fooddd.jpg';
import img4 from '/src/images/foodddd.jpg';
import 'swiper/css/bundle';
import '/src/styles/Slider.css';



const Slider = () => {
  return (
    <section className='relative top-16 w-full'>
      <Swiper className=' w-full '
        modules={[Parallax,Navigation, Pagination, A11y, Autoplay]}
        parallax={true}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={img1} alt="pizza-order" className='relative w-full h-full object-cover' loading='lazy' />
        <div className="container absolute z-50" data-swiper-parallax="-200">
          <h1 className='text-white text-6xl'>پیتزا شاپ</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="pizza-order" className='w-full h-full 	object-cover object-top' loading='lazy' />
        <div className="container absolute z-50">
          <h1 className='text-white text-6xl'>پیتزا و برگر</h1>
        </div>

        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="pizza-order" className='w-full h-full 	object-cover' loading='lazy' /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="pizza-order" className='w-full h-full 	object-cover' loading='lazy' /></SwiperSlide>

      </Swiper>
    </section>


  );
};

export default Slider;