import React from 'react';
import bg2 from '../assets/aboutusbg.png';
import fisheyedewarping from '../assets/fisheyedewarping.png';
import measurement from '../assets/3dmeasurement.png';
import dashcam from '../assets/dashcamdbms.png';

function Technology() {
  const technologies = [
    {
      title: "Fisheye Dewarping",
      imageUrl: fisheyedewarping,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it...",
      detailLink: "#"
    },
    {
      title: "3D Measurement",
      imageUrl: measurement,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it...",
      detailLink: "#"
    },
    {
      title: "Dashcam with DMS",
      imageUrl: dashcam,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it...",
      detailLink: "#"
    }
  ];

  return (
    <div>
      {/* Header with Background Image */}
      <header className="relative bg-cover bg-center h-64"  style={{ backgroundImage: `url(${bg2})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Technology</h1>
        </div>
      </header>

      {/* Technology Cards Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <img src={tech.imageUrl} alt={tech.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h4 className="text-xl font-bold mb-4">{tech.title}</h4>
                <p className="text-gray-700 mb-4">{tech.description}</p>
                <a href={tech.detailLink} className="text-blue-600 hover:underline">Detail...</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;
