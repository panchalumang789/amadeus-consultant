"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000000]" : "bg-[#000000]"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 xl:px-48">
        <div className="flex justify-between items-center w-full h-[70px] md:h-[100px]">
          {/* Logo */}
          <Link href="/" className="flex lg:hidden items-center">
            <Image
              src="/images/common/logo.svg"
              alt="Amadeus Consultant"
              width={100}
              height={60}
              className="bg-black"
            />
          </Link>
          <Link href="/" className="hidden lg:flex items-center">
            <Image
              src="/images/common/logo.svg"
              alt="Amadeus Consultant"
              width={175}
              height={60}
              className="bg-black"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center mr-8">
              <Link
                href="/"
                className={`text-white border-b-2 duration-500 ${
                  pathname === "/" ? "border-white" : "border-black"
                } hover:border-white px-4 xl:px-6 py-2 xl:py-3  transition-colors text-[16px]`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-white border-b-2 duration-500 ${
                  pathname === "/services" ? "border-white" : "border-black"
                } hover:border-white px-4 xl:px-6 py-2 xl:py-3  transition-colors text-[16px]`}
              >
                Services
              </Link>
              <Link
                href="/about-us"
                className={`text-white border-b-2 duration-500 ${
                  pathname === "/about-us" ? "border-white" : "border-black"
                } hover:border-white px-4 xl:px-6 py-2 xl:py-3  transition-colors text-[16px]`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`text-white border-b-2 duration-500 ${
                  pathname === "/contact-us" ? "border-white" : "border-black"
                } hover:border-white px-4 xl:px-6 py-2 xl:py-3  transition-colors text-[16px]`}
              >
                Contact Us
              </Link>
            </div>
          </nav>

          <div className="hidden md:block text-white hover:scale-90 duration-500">
            <Link
              href="/contact-us"
              className="bg-[#60a8f3]  text-white md:px-4 xl:px-9 md:py-3 xl:py-5 text-[16px] font-medium"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`right-0 ${
          isMobileMenuOpen ? "-translate-x-0" : "-translate-x-full"
        }  fixed inset-0 bg-[#000000] z-50 duration-500 ease-in-out`}
      >
        <div className="container mx-auto px-4 pb-4">
          <div className="flex h-[70px] justify-between items-center mb-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/common/logo.svg"
                alt="Amadeus Consultant"
                width={100}
                height={60}
                className="h-auto w-[100px] bg-black"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#60a8f3] h-10 w-10 rounded-xs bg-white"
            >
              <FontAwesomeIcon
                className="scale-150 font-semibold"
                icon={faXmark}
              />
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className={`text-white border-b-2 w-max px-2 ${
                pathname === "/" ? "border-[#60a8f3]" : "border-[#000000]"
              } hover:text-[#60a8f3] transition-colors text-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-white border-b-2 w-max px-2 ${
                pathname === "/services"
                  ? "border-[#60a8f3]"
                  : "border-[#000000]"
              } hover:text-[#60a8f3] transition-colors text-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className={`text-white border-b-2 w-max px-2 ${
                pathname === "/about-us"
                  ? "border-[#60a8f3]"
                  : "border-[#000000]"
              } hover:text-[#60a8f3] transition-colors text-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={`text-white border-b-2 w-max px-2 ${
                pathname === "/contact-us"
                  ? "border-[#60a8f3]"
                  : "border-[#000000]"
              } hover:text-[#60a8f3] transition-colors text-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
