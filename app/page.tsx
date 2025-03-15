"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import CTASection from "./components/CTASection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        const opacity = Math.min(
          1,
          Math.max(
            0,
            (scrollPosition - sectionTop + windowHeight) / sectionHeight
          )
        );

        sectionRef.current.style.backgroundColor = `rgba(255, 255, 255, ${
          1 - opacity
        })`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#0B0F19] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#15B8AE] mb-4">
              Launch Your Success: Find Jobs or Talent | 200+ With Oprax IT
              Services
            </p>
            <h1 className="text-5xl font-bold mb-6">
              Becomes The True
              <br />
              Hero With Our Agency
            </h1>
            <Link
              href="/about"
              className="inline-block bg-[#00D2C7] text-white px-9 py-5 hover:scale-90 duration-500 transition"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#15B8AE] mb-2">About Oprax IT Services</p>
            <h2 className="text-3xl font-bold mb-6">
              Finding The Jobs That You
              <br />
              Have Been Dreaming
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-[#00D2C7] p-4 rounded-lg">
                <svg className="w-6 h-6 text-white" /* Add icon SVG here */ />
              </div>
              <div>
                <h3 className="font-bold mb-2">Fast Recognition</h3>
                <p className="text-gray-600">Quick placement process</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#00D2C7] p-4 rounded-lg">
                <svg className="w-6 h-6 text-white" /* Add icon SVG here */ />
              </div>
              <div>
                <h3 className="font-bold mb-2">Job For Everyone</h3>
                <p className="text-gray-600">
                  Opportunities for all skill levels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-[#0B0F19] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="text-[#15B8AE] text-lg mb-4">
                Why Choose Oprax IT Solution
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Giving The Job Opportunity That
                <br />
                Fits With Your Profile
              </h2>
              <p className="text-gray-400 mt-6 max-w-2xl">
                We understand your journey to find the perfect job opportunity.
                Our dedicated team is here to help you discover roles that align
                with your skills and aspirations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Card */}
              <div className="bg-[#151922] p-10 rounded-2xl border border-[#2A2F3D] hover:border-[#00D2C7] transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="bg-[#1D222D] inline-block p-4 rounded-xl mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-[#15B8AE]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      The Best Hiring Agency Service
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      We connect talented professionals with leading companies,
                      ensuring the perfect match for both parties.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href="/get-opportunity"
                      className="inline-flex items-center bg-[#00D2C7] text-black px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 text-lg font-medium"
                    >
                      Get Opportunity
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-[#151922] p-10 rounded-2xl border border-[#2A2F3D] hover:border-[#00D2C7] transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="bg-[#1D222D] inline-block p-4 rounded-xl mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-[#15B8AE]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Give The Best Treatment to Worker
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      We prioritize our candidates&apos; growth and success,
                      providing comprehensive support throughout their career
                      journey.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href="/learn-more"
                      className="inline-flex items-center border-2 border-[#00D2C7] text-[#15B8AE] px-8 py-4 rounded-xl hover:bg-[#00D2C7] hover:text-black transition-all duration-300 text-lg font-medium"
                    >
                      Learn more about us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <svg className="w-24 h-24">
                    <circle
                      className="text-[#151922]"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="38"
                      cx="48"
                      cy="48"
                    />
                    <circle
                      className="text-[#15B8AE]"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="38"
                      cx="48"
                      cy="48"
                      strokeDasharray="239.389"
                      strokeDashoffset="155.6"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-2xl font-bold">35%</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                  <p className="text-gray-400">
                    Professional recruitment experts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative">
                  <svg className="w-24 h-24">
                    <circle
                      className="text-[#151922]"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="38"
                      cx="48"
                      cy="48"
                    />
                    <circle
                      className="text-[#15B8AE]"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="38"
                      cx="48"
                      cy="48"
                      strokeDasharray="239.389"
                      strokeDashoffset="155.6"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-2xl font-bold">34%</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Best Service</h4>
                  <p className="text-gray-400">Guaranteed satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      <CTASection />
    </main>
  );
}
