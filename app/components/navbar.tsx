'use client';

import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline, IoMenu, IoClose } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="p-4 w-full">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Search Icon for Desktop */}
        <div className="hidden md:block">
          <CiSearch size={25} className="text-[#2A254B]" />
        </div>

        {/* Logo */}
        <h1 className="text-[#22202E] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          Avion
        </h1>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-4">
          <Link href="/cart">
            <IoCartOutline size={25} className="text-[#2A254B]" />
          </Link>
          <IoIosContact size={25} className="text-[#2A254B]" />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <CiSearch size={25} className="text-[#2A254B]" />
          <button className="text-2xl focus:outline-none z-30" onClick={toggleMenu}>
            {!menuOpen ? <IoMenu /> : <IoClose />}
          </button>
        </div>
      </div>

      <hr />

      {/* Mobile Menu */}
      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out z-20 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button className="text-2xl focus:outline-none" onClick={toggleMenu}>
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col gap-4 text-[#726E8D] text-base px-6">
          {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map(
            (item) => (
              <li key={item} onClick={toggleMenu}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
              </li>
            )
          )}
        </ul>
      </header>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center items-center gap-8 mt-4 text-[#726E8D]">
        {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map(
          (item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </Link>
          )
        )}
      </nav>
    </div>
  
  );
};

export default Navbar;
