import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Hero() {
  return (
    <section className="relative bg-gray-900 -mt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}  // Timer set to 5 seconds
        loop={true}  // Menambahkan fitur loop
        speed={1000} // Memperlambat kecepatan transisi menjadi 1 detik
        className="swiper-container"
      >
        <SwiperSlide className="swiper-slide">
          <div className="h-screen flex items-center justify-center bg-cover bg-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Slide 1 Title</h1>
              <p className="text-lg">
                Slide 1 description goes here. It's an engaging introductory
                text.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-screen flex items-center justify-center bg-cover bg-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Slide 2 Title</h1>
              <p className="text-lg">
                Slide 2 description goes here. It's another engaging text.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-screen flex items-center justify-center bg-cover bg-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Slide 3 Title</h1>
              <p className="text-lg">
                Slide 3 description goes here. Keep your audience interested.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-screen flex items-center justify-center bg-cover bg-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Slide 4 Title</h1>
              <p className="text-lg">
                Slide 4 description goes here. Final call to action.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
