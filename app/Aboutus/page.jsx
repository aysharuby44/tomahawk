import React from 'react';
import Navbara from '@/Components/Navbara';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Aboutus = () => {
  return (
    <div>
      <Navbara/>
      <main className="py-5 px-5 md:px-12 lg:px-28  text-black  min-h-screen bg-white ">
        {/* Main Content Section */}
        <section className="mb-10">
            {/* Top Section with Full Background Image and Bigger Height */}
      <div
        className="min-h-screen px-5 md:px-12 lg:px-28 flex flex-col justify-center items-center text-center text-black bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-mh.jpg')" }}
      >
      </div>
        </section>
         {/* Last Section */}
         <section className="bg-[#101f26] p-6 rounded-lg my-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Left: Cake Description */}
            <div className="flex-1 p-4">
  <h3 className="text-xl sm:text-3xl font-medium text-black mb-6">ABOUT US</h3>
  <p className="text-[18px] text-[#7d7e84] leading-[1.55] font-[400] font-['Poppins']">
    Tomahawk has a wide variety of menu options, like fresh pastries, salads, burgers, and more.
    Whether you are a resident or a visitor, we invite you to explore Tomahawk Café and find out why the café is the best café on Reem Island.
    We have comfortable outside seating arrangements that are perfect for enjoying the coffee in the fresh air.
    Will get free Wi-Fi in every corner of the café so you can work, study, or connect with friends.
    Tomahawk is the perfect environment for creativity and productivity so you can choose a long workplace.
  </p>
</div>


            {/* Right: Cake Image */}
            <div className="flex-1 p-4 flex items-center justify-center animate-bordera">
              <Image
              
                src="/ab1.jpg"
                alt="Cake History"
                width={400}
                height={450}
                className="rounded-t-full shadow-lg object-contain"
              />
            </div>
          </div>

          {/* Pudding Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full ">
            <div className="flex-1 p-4 flex items-center justify-center animate-bordera">
              <Image
                src="/ab2.jpg"
                alt="Pudding Journey"
                width={400}
                height={450}
                className="rounded-tr-full shadow-lg object-contain"
              />
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-xl sm:text-3xl font-medium text-black mb-6">ABOUT US</h3>
              <p className="text-[#585d5f] leading-relaxed text-sm"> Tomahawk has a wide variety of menu options, like fresh pastries, salads, burgers, and more.  Whether you are a resident or a visitor, we invite you to explore Tomahawk Café and find out why the café is the best café on Reem Island.  We have comfortable outside seating arrangements that are perfect for enjoying the coffee in the fresh air. Will get free Wi-Fi in every corner of the café so you can work, study, or connect with friends. Tomahawk is the perfect environment for creativity and productivity so you can choose a long workplace.  
               </p>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <div className="bg-[#101f26] p-6 rounded-lg my-8 animate-borderabc ">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link href="https://www.instagram.com/tomahawkcaffe/?hl=en" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/insta.png"
                  alt="Instagram Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-black mb-2">Instagram</h3>
              <p className="text-black text-sm">Search the username tomahawkcaffe to find me!</p>
            </div>

            {/* Facebook */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link href="https://www.facebook.com/tomahawkcaffe" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/face.png"
                  alt="Facebook Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-black mb-2">Facebook</h3>
              <p className="text-black text-sm">Find Tomahawk Caffe  on Facebook!</p>
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link href="https://www.linkedin.com/in/ayisha-roobi-v-051719224/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linked.png"
                  alt="LinkedIn Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-black mb-2">LinkedIn</h3>
              <p className="text-black text-sm">Connect with me on LinkedIn!</p>
            </div>
          </div>
        </div>

       
      </main>

      <Footer/>
    </div>
  );
};

export default Aboutus;
