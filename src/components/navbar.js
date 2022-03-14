import * as React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <nav className="bg-white relative z-20 px-6">
      <div className="container mx-auto flex justify-between items-center relative h-24">
        <Link
          to="/"
          className="w-64 h-full inline-block py-4 flex items-center font-black text-lg"
        >
          CMK Constructions
          {/* <img src="http://placehold.it/280x160" className="h-full w-auto" /> */}
        </Link>
        <ul className="hidden md:flex flex-1 h-full justify-end items-center text-sm">
          <li>
            <Link to="/" className="hover:opacity-75">
              Home
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/about">About Us</Link>
          </li>
          <li className="ml-6">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="ml-6">
            <Link to="/services">Services</Link>
          </li>
        </ul>

        <Link to="/" className="md:hidden">
          <img
            className="w-8 h-auto"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACCSURBVHhe7dmhDYBQAEPBv//SIGsaDGlA3CVPd4AeAAAAAAAAAOA/Lj0210aV5tqo0lwbVZpro0pzbVQJAAAAAAAAeKXdcEpzbVRpro0qzbVRpbk2qjTXRpUAAAAAAACAV9oNpzTXRpXm2qjSXBtVmmujSnNtVAkAAAAAAAAA+N45N+IVCzyqwPF8AAAAAElFTkSuQmCC"
            alt="logo"
          />
        </Link>

        <div className="absolute bottom-0 right-0 -mb-5 flex">
          <Link
            to="/"
            className="bg-gray-500 text-white py-2 px-4 text-xs md:text-sm rounded-full hover:shadow-lg"
          >
            0800 123 456
          </Link>
          <Link
            to="contact"
            className="hidden md:block bg-blue-600 text-white py-2 px-4 text-xs md:text-sm rounded-full ml-3 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            class="text-gray-300 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            to="/"
          >
            Home
          </Link>
          <Link
            class="text-gray-300 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            to="/about"
          >
            About
          </Link>
          <Link
            class="text-gray-800  hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            class="text-gray-300 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            to="/services"
          >
            Services
          </Link>
          <Link
            class="text-gray-300 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
