import React from 'react';
// import SwiperCore, { EffectCoverflow, Mousewheel, Keyboard } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './ClubCarousel.module.css'; // Update the path based on your file structure
import Image from 'next/image';

// SwiperCore.use([EffectCoverflow, Mousewheel, Keyboard]);

const ClubCarousel: React.FC = () => {
  const slides = [1, 2, 3]; // Define your slides array

  return (
    <main>
      <div className={styles.swiper}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            thresholdDelta: 70,
          }}
          spaceBetween={30}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((index) => (
            <SwiperSlide key={index} className={styles['swiper-slide']}>
              {/* Rest of your SwiperSlide content */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default ClubCarousel;
