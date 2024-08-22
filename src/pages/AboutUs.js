import React from 'react';
import { ReactComponent as MoilLogo } from '../assets/logo.svg';
import bg2 from '../assets/aboutusbg.png';  // Mengimpor bg1 sebagai gambar biasa

function AboutUs() {
  return (
    <div>
      {/* Header with Background Image */}
      <header className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">ABOUT US</h1>
        </div>
      </header>

      {/* About Our Application Section */}
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

      {/* Key Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Fisheye View</h4>
              <p className="text-gray-700">
                The Fisheye demo, also known as the omnidirectional view, provides a unique perspective that covers a 360-degree field of view in a single image.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Panorama View</h4>
              <p className="text-gray-700">
                To accommodate ordinary human vision, the panoramic projection stretches the 360-degree image to a widescreen format.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Anypoint View</h4>
              <p className="text-gray-700">
                This method adjusts the optical axis of the camera dynamically depending on the viewing angle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">TEAM</h3>
          <div className="flex justify-center space-x-4">
            {/* Replace with an actual carousel/slider component */}
            <div className="flex-shrink-0 w-48 bg-gray-100 p-6 rounded-lg">
              <div className="bg-gray-300 h-24 w-24 mx-auto rounded-full mb-4"></div>
              <h4 className="text-lg font-bold">NAME PERSON</h4>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="flex-shrink-0 w-48 bg-gray-100 p-6 rounded-lg">
              <div className="bg-gray-300 h-24 w-24 mx-auto rounded-full mb-4"></div>
              <h4 className="text-lg font-bold">NAME PERSON</h4>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="flex-shrink-0 w-48 bg-gray-100 p-6 rounded-lg">
              <div className="bg-gray-300 h-24 w-24 mx-auto rounded-full mb-4"></div>
              <h4 className="text-lg font-bold">NAME PERSON</h4>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="flex-shrink-0 w-48 bg-gray-100 p-6 rounded-lg">
              <div className="bg-gray-300 h-24 w-24 mx-auto rounded-full mb-4"></div>
              <h4 className="text-lg font-bold">NAME PERSON</h4>
              <p className="text-gray-600">Position</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
