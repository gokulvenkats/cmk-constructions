export default function Fo(oter) {
  return (
    <div class="bg-gray-200 px-6 py-12">

      <footer class="container mx-auto">

        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 class="font-condensed pb-4">Legal</h4>
            <a href="#" class="text-sm text-gray-800 py-1">Privacy Policy</a>
            <a href="#" class="text-sm text-gray-800 py-1">Terms & Conditions</a>
          </div>
          <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 class="font-condensed pb-4">About</h4>
            <a href="#" class="text-sm text-gray-800 py-1">Company Information</a>
            <a href="#" class="text-sm text-gray-800 py-1">History</a>
          </div>
          <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 class="font-condensed pb-4">Services</h4>
            <a href="#" class="text-sm text-gray-800 py-1">Buildings</a>
            <a href="#" class="text-sm text-gray-800 py-1">Construction</a>
          </div>
          <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
            <h4 class="font-condensed pb-4">Find us</h4>
            <a href="#" target="_blank" class="text-sm text-gray-800 py-1">Office Location</a>
            <a href="#" target="_blank" class="text-sm text-gray-800 py-1">Contact Us</a>
          </div>
        </div>

        <div class="flex justify-between items-end pt-12">
          <div class="w-full md:w-1/2">
            <div>
              <p class="text-sm text-gray-700">Copyright © {new Date().getFullYear().toString()} CMK Group of Companies.</p>
              <p class="text-xs text-gray-700 mt-2">All rights reserved.</p>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}