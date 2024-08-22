import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { ReactComponent as MoillightLogo } from '../assets/moillight.svg'; // Mengimpor sebagai komponen React

function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-stretch">
  <div className="max-w-lg flex items-center w-full">
    {/* Logo dan Nama */}
    <div className="flex flex-shrink-0 items-center justify-center">
      <MoillightLogo className="h-20 w-auto mr-2"/>
      <h2 className="text-6xl font-bold">MoilWeb</h2>
    </div>
  </div>
        
        {/* Technology */}
        <div>
          <h3 className="text-lg font-bold mb-4">Technology</h3>
          <ul className="space-y-2">
            <li>Fisheye Dewarping</li>
            <li>3D Measurement</li>
            <li>Dashcam with DMS</li>
          </ul>
        </div>
        
        {/* Solution */}
        <div>
          <h3 className="text-lg font-bold mb-4">Solution</h3>
          <ul className="space-y-2">
            <li>Internal Thread Inspection</li>
            <li>Fisheye 3D Measurement</li>
            <li>Dashcam with DMS</li>
            <li>Panellum</li>
            <li>Colonoscopy</li>
            <li>Visual odometry</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-10 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm">&copy; MoilWeb 2024</p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="mailto:someone@example.com">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
