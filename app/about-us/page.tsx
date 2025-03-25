import {
  faCircleChevronRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import CTASection from "../components/CTASection";

export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[275px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/about-us/hero-bg.jpg"
            alt="About Amadeus Consultant"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link
              href="/"
              className="text-white font-normal hover:text-[#60a8f3]"
            >
              Home
            </Link>
            <FontAwesomeIcon
              className="text-[#60a8f3] text-sm font-semibold"
              icon={faCircleChevronRight}
            />
            <Link
              href="/about-us"
              className="text-white font-normal hover:text-[#60a8f3]"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-us/team-meeting.jpg"
                alt="Team Meeting"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div>
              <span className="text-[#60a8f3] text-xl font-semibold tracking-wider mb-2 block">
                Unveiling Our Essence
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Amadeus Consultant
              </h2>
              <div className="space-y-4 text-lg font-medium text-gray-600">
                <p>
                  At Amadeus Consultant, we specialize in providing top-notch IT
                  recruitment and staffing solutions tailored to meet the
                  dynamic needs of today’s businesses. With a relentless focus
                  on excellence and a commitment to customer satisfaction, we
                  strive to be the preferred partner for companies seeking
                  exceptional talent and for individuals aspiring to advance
                  their careers in the IT industry. Our comprehensive suite of
                  services includes IT Recruitment We excel in identifying,
                  attracting, and retaining the best talent in the IT sector,
                  ensuring that our clients have access to the skills and
                  expertise they need to drive their businesses forward Career
                  Development: We are dedicated to helping professionals reach
                  their full potential by providing them with access to
                  training, mentorship, and resources that enable them to thrive
                  in their careers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leaders Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
            Core Values
          </h2>
          <div className="flex flex-col lg:flex-row gap-14 justify-center">
            <div className="relative flex flex-col items-center justify-center lg:justify-start gap-2 w-[300px] mx-auto">
              <Image
                src="/images/about-us/service-1-icon-1.jpg"
                alt="Co-Founder"
                height={90}
                width={90}
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Excellence
              </h3>
              <p className="text-gray-600 text-center">
                Quality of work does not stop at competence but goes beyond
                clients’ expectations.
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center lg:justify-start gap-2 w-[300px] mx-auto">
              <Image
                src="/images/about-us/service-1-icon-2.jpg"
                alt="Co-Founder"
                height={90}
                width={90}
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Commitment
              </h3>
              <p className="text-gray-600 text-center">
                The dedication of our team extends beyond the good of the
                company, to the betterment and success of our clients by
                allocating the required resources and training to exceed your
                goals.
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center lg:justify-start gap-2 w-[300px] mx-auto">
              <Image
                src="/images/about-us/service-1-icon-3.jpg"
                alt="Co-Founder"
                height={90}
                width={90}
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Integrity
              </h3>
              <p className="text-gray-600 text-center">
                Winaxis only believes in doing work the right way with the right
                attitude and motivation.
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center lg:justify-start gap-2 w-[300px] mx-auto">
              <Image
                src="/images/about-us/service-1-icon-4.jpg"
                alt="Co-Founder"
                height={90}
                width={90}
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Innovation
              </h3>
              <p className="text-gray-600 text-center">
                The call center industry is fast-paced and ever-changing. With
                Winaxis, you are assured that you are never left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Job Search Section */}
      <section className="py-8 md:py-12 border-t bg-white border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
    </main>
  );
}
