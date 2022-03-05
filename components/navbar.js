import Link from "next/link";

export default function NavBar() {
  return (
    <nav class="bg-white relative z-20 px-6">
      <div class="container mx-auto flex justify-between items-center relative h-24">
        <Link href="/">
          <a class="w-64 h-full inline-block py-4 flex items-center font-black text-lg">
            CMK Constructions
            {/* <img src="http://placehold.it/280x160" class="h-full w-auto" /> */}
          </a>
        </Link>
        <ul class="hidden md:flex flex-1 h-full justify-end items-center text-sm">
          <li>
            <Link href="/">
              <a class="hover:opacity-75">Home</a>
            </Link>
          </li>
          <li class="ml-6">
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li class="ml-6">
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
          <li class="ml-6">
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
        </ul>

        <a class="md:hidden">
          <img
            class="w-8 h-auto"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACCSURBVHhe7dmhDYBQAEPBv//SIGsaDGlA3CVPd4AeAAAAAAAAAOA/Lj0210aV5tqo0lwbVZpro0pzbVQJAAAAAAAAeKXdcEpzbVRpro0qzbVRpbk2qjTXRpUAAAAAAACAV9oNpzTXRpXm2qjSXBtVmmujSnNtVAkAAAAAAAAA+N45N+IVCzyqwPF8AAAAAElFTkSuQmCC"
          />
        </a>

        <div class="absolute bottom-0 right-0 -mb-5 flex">
          <a class="bg-gray-500 text-white py-2 px-4 text-xs md:text-sm rounded-full hover:shadow-lg">
            0800 123 456
          </a>
          <a class="hidden md:block bg-blue-600 text-white py-2 px-4 text-xs md:text-sm rounded-full ml-3 hover:shadow-lg">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
