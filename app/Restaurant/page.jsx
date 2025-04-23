import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const Restaurant = () => {
  return (
    <div>
      <Navbar />

      {/* Top Section with Full Background Image and Bigger Height */}
      <div
        className="min-h-screen px-5 md:px-12 lg:px-28 flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-mh.jpg')" }}
      >
      </div>

      {/* Two-Column Section: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 lg:px-28 py-16 bg-gray-100">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">Explore Culinary Delights</h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Our curated guides bring you closer to unique flavors and exceptional service. Perfect for foodies, families, or tourists seeking memorable meals.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/bg-mh.jpg"
            alt="Restaurant"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Restaurant;
