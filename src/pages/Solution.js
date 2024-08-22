import React from 'react';
import bg2 from '../assets/aboutusbg.png';
import internalthread from '../assets/internalthread.png';
import measurement from '../assets/3dmeasurement.png';
import dashcam from '../assets/dashcamdbms.png';
import odometry from '../assets/visualodometry.png';
import colonoscopy from '../assets/colonoscopy.png';
import panellum from '../assets/panellum.png';

function Solution() {
  const solutions = [
    {
      title: "Internal Thread Inspection",
      imageUrl: internalthread,
      description: "Internal thread inspection refers to the process of evaluating and assessing the quality and integrity of threads inside...",
      detailLink: "#"
    },
    {
      title: "Fisheye 3D Measurement",
      imageUrl: measurement,
      description: "Moilview is not only proficient in fisheye image processing but also excels in high-accuracy 3D measurements...",
      detailLink: "#"
    },
    {
      title: "Dashcam with DMS",
      imageUrl: dashcam,
      description: "Moilview has been successfully integrated into various car applications...",
      detailLink: "#"
    },
    {
      title: "Visual odometry",
      imageUrl: odometry,
      description: "Visual odometry is a technique used in computer vision and robotics to estimate the movement and position of a camera...",
      detailLink: "#"
    },
    {
      title: "Colonoscopy",
      imageUrl: colonoscopy,
      description: "Colonoscopy is a medical procedure used to examine the inside of the colon (large intestine) and rectum...",
      detailLink: "#"
    },
    {
      title: "Panellum",
      imageUrl: panellum,
      description: "Panellum is an interactive 360-degree panoramic viewer for the web...",
      detailLink: "#"
    }
  ];

  return (
    <div>
      {/* Header with Background Image */}
      <header className="relative bg-cover bg-center h-64"  style={{ backgroundImage: `url(${bg2})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Solution</h1>
        </div>
      </header>

      {/* Solution Cards Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <img src={solution.imageUrl} alt={solution.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h4 className="text-xl font-bold mb-4">{solution.title}</h4>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <a href={solution.detailLink} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solution;
