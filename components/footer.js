export default function Fo(oter) {
  return (
    <div className="bg-gray-200 px-6 py-12">
      <footer className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">Legal</h4>
            <a href="#" className="text-sm text-gray-800 py-1">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-800 py-1">
              Terms & Conditions
            </a>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">About</h4>
            <a href="#" className="text-sm text-gray-800 py-1">
              Company Information
            </a>
            <a href="#" className="text-sm text-gray-800 py-1">
              History
            </a>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">Services</h4>
            <a href="#" className="text-sm text-gray-800 py-1">
              Buildings
            </a>
            <a href="#" className="text-sm text-gray-800 py-1">
              Construction
            </a>
          </div>
          <div className="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 className="font-condensed pb-4">Find us</h4>
            <a href="#" target="_blank" className="text-sm text-gray-800 py-1">
              Office Location
            </a>
            <a href="#" target="_blank" className="text-sm text-gray-800 py-1">
              Contact Us
            </a>
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
