import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 font-medium">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-extrabold">Rev Up Your Ride</h1>
        <nav>
          <ul className="flex space-x-9">
            <li>
              <Link to="/" className="hover:text-[#B41C6C]">Home</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#B41C6C]">Mags</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#B41C6C]">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
