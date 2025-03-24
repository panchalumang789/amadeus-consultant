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
      <section className="relative bg-black text-white ">
        <div className="container mx-auto flex flex-col gap-8 xl:gap-0 px- 4 py-14 md:px-20 md:py-20 xl:px-32 xl:flex-row">
          <div className="w-full xl:w-3/5 xs:mx-auto px-4">
            <div className="max-w-3xl text-center xl:text-left">
              <p className="text-[#60a8f3] mb-4 text-xl font-semibold -tracking-normal">
                Find your dream job. Top Talents. Everything at One Place.
              </p>
              <h1 className="text-5xl xl:text-6xl font-bold text-left mb-6">
                Your Trusted Staffing Partners
              </h1>
              <div>
                <p className="text-xl">
                  Staffing Professors help connect companies and job applicant
                  with the right jobs in finance, law, and technology. Get
                  started by contacting us today.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full xl:w-2/5 flex-col gap-1 justify-center text-lg text-gray-300">
            <p>
              <FontAwesomeIcon
                className="text-white px-2"
                icon={faCircleCheck}
              />{" "}
              Find over 200+ Jobs Opportunity in our Service
            </p>
            <p>
              <FontAwesomeIcon
                className="text-white px-2"
                icon={faCircleCheck}
              />{" "}
              Leveling Up new Skill to prepare you to get a Job
            </p>
            <p>
              <FontAwesomeIcon
                className="text-white px-2"
                icon={faCircleCheck}
              />{" "}
              Maintain The Progression of Every Talent
            </p>
            <p>
              <FontAwesomeIcon
                className="text-white px-2"
                icon={faCircleCheck}
              />{" "}
              Connection Over 90+ Company
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/about"
                className="inline-block bg-[#60a8f3] text-white px-9 py-5 hover:scale-90 duration-500 transition"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-black text-white h-[250px]"
        style={{
          backgroundImage:
            "radial-gradient(at bottom right, #60a8f3 -37%, #60a8f300 37%)",
        }}
      >
        <div className="flex container flex-col md:flex-row px-4 lg:px-20 xl:px-32 mx-auto">
          <div className="flex items-center p-3 md:p-6 xl:w-1/2">
            <Image
              src="/images/home/slider1-scaled.jpg"
              alt="About Amadeus Consultant"
              height={600}
              width={900}
              style={{ contain: "strict" }}
            />
          </div>
          <div className="flex items-center p-3 md:p-6 xl:w-1/2">
            <Image
              className="xl:translate-y-32"
              src="/images/home/recruitment-consulting-venn-diagram-1536x1388.jpg"
              alt="About Amadeus Consultant"
              height={600}
              width={900}
              style={{ contain: "strict" }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white pt-[250px] md:pt-0 xl:pt-[350px]">
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-0">
            {/* Left side - Images */}
            <div className="relative px-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="hidden md:block relative w-full h-64 md:h-72">
                  <Image
                    src="/images/home/happy-young-business-people-standing-in-the-office-and-looking-forward-to-success-in-the-office.jpg"
                    alt="Team collaborating in office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mx-auto">
                  <div className="relative w-80 xl:w-64 h-[420px] xl:h-96 z-2 md:translate-x-6 md:-translate-y-16 border-[20px] border-white">
                    <Image
                      src="/images/home/african-manager-working-at-office-1024x1536.jpg"
                      alt="Professional at desk"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="hidden md:block relative w-full h-64">
                    <div className="relative w-72 h-96 z-2 -translate-x-3 -translate-y-4 border-[20px] border-white">
                      <Image
                        src="/images/home/young-couple-in-office.jpg"
                        alt="Team members working together"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-end bg-white/10 p-6 text-center">
                        <div className="bg-white px-9 py-2 translate-y-6">
                          <h3 className="text-3xl text-black font-bold mt-2 bg-white">
                            150
                            <span className="text-teal-500 text-xl"> + </span>
                          </h3>
                          <p className="text-gray-600 text-sm translate-y-2">
                            Job Recruitment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-center">
              <div className="text-teal-500 font-semibold text-lg mb-2">
                About Amadeus Consultant
              </div>
              <h1 className="text-4xl text-black md:text-5xl font-bold mb-6 tracking-tighter">
                Finding The Jobs That You Have Been Dreaming
              </h1>
              <p className="text-gray-400 mb-10">
                Navigating the realm of bench sales to land your dream job
                requires a strategic approach. Tailor your resume to highlight
                relevant skills, actively engage with bench sales platforms, and
                foster connections within the industry. Stay persistent in
                showcasing your strengths and networking to unlock the doors to
                the ideal bench sales opportunity you&apos;ve been dreaming of
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col items-start">
                  <div className="bg-[#60a8f3] p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <path d="M14 2v6h6"></path>
                      <circle cx="12" cy="14" r="4"></circle>
                      <path d="M12 10v8"></path>
                      <path d="M8 14h8"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl text-black font-bold mb-2 tracking-tighter">
                    Fast Recognition
                  </h3>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-[#60a8f3] p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl text-black font-bold mb-2 tracking-tighter">
                    Job For Everyone
                  </h3>
                </div>
              </div>

              <div className="text-white text-center md:text-left w-full md:w-max hover:scale-90 duration-500">
                <Link
                  href="/about-us"
                  className="bg-[#60a8f3] text-white px-4 xl:px-9 py-3 xl:py-5 text-[16px] w-full font-medium"
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex bg-black text-white flex-col xl:flex-row">
        <div
          className="container flex items-center mx-auto p-8 md:px-16 lg:px-28 md:py-10 lg:py-20 xl:w-1/2"
          style={{
            backgroundImage:
              "radial-gradient(at bottom right, #60a8f3 -37%, #60a8f300 37%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="text-[#60a8f3] text-lg font-semibold mb-4">
                Why Choose Amadeus Consultant
              </p>
              <h2 className="text-4xl font-bold">
                Giving The Job
                <br />
                Opportunity That Fits
                <br />
                With Your Profile
              </h2>
              <p className="text-gray-300 text-md mt-6 max-w-2xl">
                At Amadeus Consultant, we bring a fresh perspective to the
                industry, blending innovation with personalized service. Our
                dedicated team is committed to matching exceptional talent with
                cutting-edge companies, ensuring mutual success. Choose Amadeus
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
                    <div className="bg-[#60a8f3] inline-block p-4 rounded-xs mb-3 md:mb-6">
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
                    <div className="bg-[#60a8f3] inline-block p-4 rounded-xs mb-3 md:mb-6">
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
                className="bg-[#60a8f3] text-white w-max px-5 xl:px-10 py-3 xl:py-5 text-lg font-medium hover:scale-90 duration-500"
              >
                Start Consultation
              </Link>
              <Link
                href="/about-us"
                className="text-white hover:text-[#60a8f3] flex gap-2 items-center hover:mb-4 font-semibold duration-500"
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
            alt="About Amadeus Consultant"
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
                    className="text-[#60a8f3]"
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
                  Amadeus excels in bench sales, ensuring top-notch talent
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
                    className="text-[#60a8f3]"
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
                  Amadeus delivers the best services, guaranteed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-8 md:py-12 border-t bg-white border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-center md:text-left">
              Are you seeking employment? Contact us now for guaranteed
              placement with Amadeus Consultant.
            </p>
            <div className="flex flex-row items-center gap-12">
              <Link
                href="/contact-us"
                className="bg-[#60a8f3] text-white px-5 xl:px-10 py-3 xl:py-5 text-[16px] font-medium hover:scale-90 duration-500"
              >
                Search a Job
              </Link>
              <a
                href="tel:(217) 335-6775"
                className="flex items-center gap-3 text-black transition duration-300"
              >
                <FontAwesomeIcon
                  className="p-4 text-xl bg-[#60a8f3] text-white rounded-full"
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
