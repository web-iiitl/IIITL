import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper'; // Import the Swiper styles

const Carousel = () => {
  return (
    <div className="mb-20 w-full m-auto bg-bluel cursor-pointer">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/cmef8hxb6/it3_m0GlC0BYh.png?updatedAt=1698615793014"
              alt="First slide"
              style={{ maxWidth: '100%', maxHeight: '100%' }} // Responsive styles
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/cmef8hxb6/it1_o_lgch6Bd.png?updatedAt=1698615753254"
              alt="Second slide"
              style={{ maxWidth: '100%', maxHeight: '100%' }} // Responsive styles
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
