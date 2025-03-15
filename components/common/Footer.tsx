import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 md:px-10 xl:px-48 md:gap-8">
          {/* Logo and About Section */}
          <div className="md:col-span-8 flex flex-col md:flex-row gap-2">
            <Link href="/">
              <Image
                src="/images/common/logo.png"
                alt="Oprax IT Services"
                width={300}
                height={100}
                className="mb-6 block md:hidden"
              />
              <Image
                src="/images/common/logo.png"
                alt="Oprax IT Services"
                width={600}
                height={100}
                className="mb-6 hidden md:block"
              />
            </Link>
            <div className="mr-32">
              <h3 className="text-xl font-semibold mb-4">
                About Oprax ITServices
              </h3>
              <p className="text-white text-sm font-medium  leading-relaxed">
                Welcome to your gateway to endless career possibilities - where
                dreams meet opportunities.
              </p>
            </div>
          </div>

          {/* Main Pages */}
          <div className="mt-4 md:mt-0 md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Main Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-white font-medium hover:text-[#15B8AE] transition-colors flex items-center"
                >
                  <span className="text-[#15B8AE] mr-2">›</span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white font-medium hover:text-[#15B8AE] transition-colors flex items-center"
                >
                  <span className="text-[#15B8AE] mr-2">›</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white font-medium hover:text-[#15B8AE] transition-colors flex items-center"
                >
                  <span className="text-[#15B8AE] mr-2">›</span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white font-medium hover:text-[#15B8AE] transition-colors flex items-center"
                >
                  <span className="text-[#15B8AE] mr-2">›</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mt-4 md:mt-0 md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white font-medium hover:text-[#15B8AE] transition-colors flex items-center"
                >
                  <span className="text-[#15B8AE] mr-2">›</span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-6 md:mt-12 pt-8 md:px-10 xl:px-48">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-0">
            <a
              href="tel:+12173356775"
              className="flex items-center text-white font-medium hover:text-[#15B8AE] transition-colors"
            >
              <div className="bg-[#15B8AE] p-3 rounded-xs mr-3">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              +1 (217) 335-6775
            </a>
            <a
              href="mailto:info@opraxitservices.com"
              className="flex items-center text-white font-medium hover:text-[#15B8AE] transition-colors"
            >
              <div className="bg-[#15B8AE] p-3 rounded-xs mr-3">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              info@opraxitservices.com
            </a>
          </div>
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-[#15B8AE] p-3 rounded-xs text-white hover:bg-teal-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-[#15B8AE] p-3 rounded-xs text-white hover:bg-teal-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-[#15B8AE] p-3 rounded-xs text-white hover:bg-teal-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-[#15B8AE] p-3 rounded-xs text-white hover:bg-teal-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm mt-8 pt-8 border-t border-gray-800 md:px-10 xl:px-48">
          Copyright © {new Date().getFullYear()} GrowthHub Technology
        </div>
      </div>
    </footer>
  );
}
