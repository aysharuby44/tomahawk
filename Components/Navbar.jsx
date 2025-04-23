// components/Navbar.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ show }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      } bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/logo2.jpg" 
            alt="Logo" 
            width={100} 
            height={40} 
            className="object-contain" 
          />
        </Link>
        <div className="space-x-4 hidden md:flex">
          <Link href="/" className="hover:text-yellow-500 text-black font-bold">HOME</Link>
          <Link href="/Aboutus" className="hover:text-yellow-500 text-black">ABOUT US</Link>
          <Link href="/Restaurant" className="hover:text-yellow-500 text-black">CONTACT US </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
