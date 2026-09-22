import Image from 'next/image';
import React from 'react';
import logo from '@/assets/book.ico';
import Link from 'next/link';


const Navbar = () => {
  const links = (
    <>
      <li>
        <Link 
          href="/" 
          className="border-2 border-[#23BE0A] text-[#23BE0A] font-bold px-5 py-2 rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all"
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          href="/listed-books" 
          className="text-gray-600 font-medium px-4 py-2 hover:text-black transition-all"
        >
          Listed Books
        </Link>
      </li>
      <li>
        <Link 
          href="/pages-to-read" 
          className="text-gray-600 font-medium px-4 py-2 hover:text-black transition-all"
        >
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-white py-4">
      <div className="navbar container mx-auto px-4 md:px-12">
        
        {/* Navbar Start: Mobile Dropdown & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>

          {/* Logo Text */}
          <Link href="/" className="text-2xl font-extrabold text-[#131313] tracking-tight">
            Book Vibe
          </Link>
        </div>

        {/* Navbar Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4">
            {links}
          </ul>
        </div>

        {/* Navbar End: Sign In & Sign Up Buttons */}
        <div className="navbar-end gap-3">
          <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white font-semibold px-6 border-none rounded-lg">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] hover:bg-[#43aeb9] text-white font-semibold px-6 border-none rounded-lg">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;