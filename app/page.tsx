"use client";
import {
  faArrowRight,
  faChartLine,
  faCircleCheck,
  faPhone,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
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
<div className="hidden md:flex w-2/5 flex-col gap-1 justify-center text-lg text-gray-300">
          <p>
            <FontAwesomeIcon
              className="text-[#15B8AE] px-2"
              icon={faCircleCheck}
            />{" "}
            Find over 200+ Jobs Opportunity in our Service
          </p>
          <p>
            <FontAwesomeIcon
              className="text-[#15B8AE] px-2"
              icon={faCircleCheck}
            />{" "}
            Leveling Up new Skill to prepare you to get a Job
          </p>
          <p>
            <FontAwesomeIcon
              className="text-[#15B8AE] px-2"
              icon={faCircleCheck}
            />{" "}
            Maintain The Progression of Every Talent
          </p>
          <p>
            <FontAwesomeIcon
              className="text-[#15B8AE] px-2"
              icon={faCircleCheck}
            />{" "}
            Connection Over 90+ Company
          </p>
        </div>
      </section>

      <section
        className="flex bg-[#0B0F19] text-white flex-col xl:flex-row h-[250px] px-4"
        style={{
          backgroundImage:
            "radial-gradient(at bottom right, #15B8AE -37%, #15B8AE00 37%)",
        }}
      >
        <div className="flex items-center p-6 xl:w-1/2 mt-24">
          <Image
            src="/images/home/slider1-scaled.jpg"
            alt="About Oprax IT Services"
            height={600}
            width={900}
            style={{ contain: "strict" }}
          />
        </div>
        <div className="flex items-center p-6 xl:w-1/2">
          <Image
            className="translate-y-32"
            src="/images/home/recruitment-consulting-venn-diagram-1536x1388.jpg"
            alt="About Oprax IT Services"
            height={600}
            width={900}
            style={{ contain: "strict" }}
          />
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
      <section className="flex bg-[#0B0F19] text-white flex-col xl:flex-row">
        <div
          className="container flex items-center mx-auto p-8 md:px-16 lg:px-28 md:py-10 lg:py-20 xl:w-1/2"
          style={{
            backgroundImage:
              "radial-gradient(at bottom right, #15B8AE -37%, #15B8AE00 37%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="text-[#15B8AE] text-lg font-semibold mb-4">
                Why Choose Oprax IT Solution
              </p>
              <h2 className="text-4xl font-bold">
                Giving The Job
                <br />
                Opportunity That Fits
                <br />
                With Your Profile
              </h2>
              <p className="text-gray-300 text-md mt-6 max-w-2xl">
                At Oprax IT Services, we bring a fresh perspective to the
                industry, blending innovation with personalized service. Our
                dedicated team is committed to matching exceptional talent with
                cutting-edge companies, ensuring mutual success. Choose Oprax
                for a dynamic partnership that transforms aspirations into
                achievements, as we embark on this journey of growth and
                excellence together. Unlock Your Success: Find Jobs or Talent !
                2024
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:mb-8">
              {/* Left Card */}
              <motion.div
                key={"Left"}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col h-full">
                  <div className="md:mb-8">
                    <div className="bg-[#15B8AE] inline-block p-4 rounded-xs mb-3 md:mb-6">
                      <FontAwesomeIcon
                        className="text-white text-4xl"
                        icon={faUsersLine}
                      />
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tighter mb-4">
                      The Best Hiring Agency Service
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Right Card */}
              <motion.div
                key={"Right"}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="md:mb-8">
                    <div className="bg-[#15B8AE] inline-block p-4 rounded-xs mb-3 md:mb-6">
                      <FontAwesomeIcon
                        className="text-white text-4xl"
                        icon={faChartLine}
                      />
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tighter mb-4">
                      Give The Best Treatment to Worker
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
              <Link
                href="/contact-us"
                className="bg-[#15B8AE] text-white w-max px-5 xl:px-10 py-3 xl:py-5 text-lg font-medium hover:scale-90 duration-500"
              >
                Start Consultation
              </Link>
              <Link
                href="/about-us"
                className="text-white hover:text-[#15B8AE] flex gap-2 items-center hover:mb-4 font-semibold duration-500"
              >
                Learn more about us
                <FontAwesomeIcon
                  className="rounded-full text-lg"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 h-[calc(100vh-200px)] md:h-[calc(100vh-600px)] lg:h-[calc(100vh-900px)] xl:h-screen relative">
          <Image
            src="/images/home/why-choose-us.jpg"
            alt="About Oprax IT Services"
            fill
            style={{ objectFit: "cover" }}
          />
          {/* Statistics */}
          <div className="flex flex-col justify-end md:grid grid-cols-1 md:grid-cols-2 items-end h-full -translate-y-12 gap-8 mx-8">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-white p-4 z-2"
            >
              <div className="relative">
                <svg className="w-24 h-24">
                  <circle
                    className="text-gray-300"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="38"
                    cx="48"
                    cy="48"
                  />
                  <circle
                    className="text-[#15B8AE]"
                    strokeWidth="5"
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
                  <span className="text-2xl text-black font-bold">89%</span>
                </div>
              </div>
              <div>
                <h4 className="text-2xl text-black font-bold mb-2">
                  Expert Team
                </h4>
                <p className="text-gray-400">
                  Oprax excels in bench sales, ensuring top-notch talent
                  acquisition
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-white p-4 z-2"
            >
              <div className="relative">
                <svg className="w-24 h-24">
                  <circle
                    className="text-gray-300"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="38"
                    cx="48"
                    cy="48"
                  />
                  <circle
                    className="text-[#15B8AE]"
                    strokeWidth="5"
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
                  <span className="text-2xl text-black font-bold">85%</span>
                </div>
              </div>
              <div>
                <h4 className="text-2xl text-black font-bold mb-2">
                  Best Service
                </h4>
                <p className="text-gray-400">
                  Oprax delivers the best services, guaranteed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-8 md:py-12 border-t bg-white border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-center md:text-left">
              Are you seeking employment? Contact us now for guaranteed
              placement with Oprax IT Services.
            </p>
            <div className="flex flex-row items-center gap-12">
              <Link
                href="/contact-us"
                className="bg-[#15B8AE] text-white px-5 xl:px-10 py-3 xl:py-5 text-[16px] font-medium hover:scale-90 duration-500"
              >
                Search a Job
              </Link>
              <a
                href="tel:(217) 335-6775"
                className="flex items-center gap-3 text-black transition duration-300"
              >
                <FontAwesomeIcon
                  className="p-4 text-xl bg-black text-white rounded-full"
                  icon={faPhone}
                />
                <span className="font-medium">(217) 335-6775</span>
              </a>
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
