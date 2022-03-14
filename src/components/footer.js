import * as React from "react";
import Seo from "../components/seo";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <div className="bg-gray-200 px-6 py-12">
      <footer className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">Legal</h4>
            <Link to="/" className="text-sm text-gray-800 py-1">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-gray-800 py-1">
              Terms & Conditions
            </Link>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">About</h4>
            <Link to="/" className="text-sm text-gray-800 py-1">
              Company Information
            </Link>
            <Link to="/" className="text-sm text-gray-800 py-1">
              History
            </Link>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">Services</h4>
            <Link to="/" className="text-sm text-gray-800 py-1">
              Buildings
            </Link>
            <Link to="/" className="text-sm text-gray-800 py-1">
              Construction
            </Link>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">Find us</h4>
            <Link to="/" className="text-sm text-gray-800 py-1">
              Office Location
            </Link>
            <Link to="/" className="text-sm text-gray-800 py-1">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-end pt-12">
          <div className="w-full md:w-1/2">
            <div>
              <p className="text-sm text-gray-700">
                Copyright © {new Date().getFullYear().toString()} CMK Group of
                Companies.
              </p>
              <p className="text-xs text-gray-700 mt-2">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
