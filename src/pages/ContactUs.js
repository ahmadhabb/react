import React, { useState } from 'react';
import bg2 from '../assets/aboutusbg.png';
import mapImage from '../assets/map.png';

function ContactUs() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      {/* Header with Background Image */}
      <header className="relative bg-cover bg-center h-64"  style={{ backgroundImage: `url(${bg2})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">HOW CAN WE HELP YOU?</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          {/* Location Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Country</label>
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="block w-full mt-2 p-2 border border-gray-300 rounded"
              >
                <option value="">Select a country</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Indonesia">Indonesia</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="block w-full mt-2 p-2 border border-gray-300 rounded"
              >
                <option value="">Select a city</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Bandung">Bandung</option>
              </select>
            </div>
            <div className="p-4 border rounded bg-gray-100">
              <p>
                <strong>{selectedCity || 'City Name'}</strong><br />
                Company Address, Complex Name,<br />
                Street Name, City, State, Postal Code
              </p>
            </div>
            <div className="mt-4">
              <img src={mapImage} alt="Map" className="w-full" />
            </div>
          </div>

          {/* Contact Us Form */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input type="text" className="block w-full mt-2 p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Business Email</label>
                <input type="email" className="block w-full mt-2 p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company Name</label>
                <input type="text" className="block w-full mt-2 p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <input type="text" className="block w-full mt-2 p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">How Can We Help You?</label>
                <textarea className="block w-full mt-2 p-2 border border-gray-300 rounded"></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
