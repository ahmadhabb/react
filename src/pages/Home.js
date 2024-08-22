import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ReactComponent as MoilLogo } from '../assets/logo.svg';  // Pastikan Anda mengimpor logo ini dengan benar
import bg1 from '../assets/bg-1.png';  // Mengimpor bg1 sebagai gambar biasa

function Home() {
  return (
    <>
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
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
              <div className="text-center text-white p-8 m-8 w-3/5">
                <h1 className="text-4xl font-bold mb-4">MoilApp</h1>
                <p className="text-lg">
                Moilapp is a specialized application for fisheye camera image processing, meticulously crafted by Perseverance Technology to showcase the unparalleled quality of fisheye image processing we have developed. Below, you will find instructions on how to run the Moilapp application project on your computer. This application also supports plugins for specific applications to do a specific task. Additionally, it provides a framework to facilitate the easy development of plugin apps.
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
            <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
              <div className="text-center text-white p-8 m-8 w-3/5">
                <h1 className="text-4xl font-bold mb-4">MoilApp</h1>
                <p className="text-lg">
                Moilapp is a specialized application for fisheye camera image processing, meticulously crafted by Perseverance Technology to showcase the unparalleled quality of fisheye image processing we have developed. Below, you will find instructions on how to run the Moilapp application project on your computer. This application also supports plugins for specific applications to do a specific task. Additionally, it provides a framework to facilitate the easy development of plugin apps.
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
            <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
              <div className="text-center text-white p-8 m-8 w-3/5">
                <h1 className="text-4xl font-bold mb-4">MoilApp</h1>
                <p className="text-lg">
                Moilapp is a specialized application for fisheye camera image processing, meticulously crafted by Perseverance Technology to showcase the unparalleled quality of fisheye image processing we have developed. Below, you will find instructions on how to run the Moilapp application project on your computer. This application also supports plugins for specific applications to do a specific task. Additionally, it provides a framework to facilitate the easy development of plugin apps.
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
            <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
              <div className="text-center text-white p-8 m-8 w-3/5">
                <h1 className="text-4xl font-bold mb-4">MoilApp</h1>
                <p className="text-lg">
                Moilapp is a specialized application for fisheye camera image processing, meticulously crafted by Perseverance Technology to showcase the unparalleled quality of fisheye image processing we have developed. Below, you will find instructions on how to run the Moilapp application project on your computer. This application also supports plugins for specific applications to do a specific task. Additionally, it provides a framework to facilitate the easy development of plugin apps.
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
          <div className="swiper-button-next" style={{ color: '#ffffff', padding: '10px', borderRadius: '50%' }}></div>
          <div className="swiper-button-prev" style={{ color: '#ffffff', padding: '10px', borderRadius: '50%' }}></div>
        </Swiper>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <MoilLogo className="mx-auto h-32 w-32 mb-8" />
          <h2 className="text-3xl font-bold mb-4">About Our Application</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            MoilApp is a specialized application for Fisheye camera image processing, meticulously crafted by Perseverance Technology to showcase the unrivaled quality of fisheye image processing we have developed.
          </p>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Additionally, it provides a framework to facilitate the easy development of plugin apps.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Learn More</button>
        </div>
      </section>
    </>
  );
}

export default Home;
