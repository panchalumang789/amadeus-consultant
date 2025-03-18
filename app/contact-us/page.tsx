"use client";
import ContactForm from "@/components/common/ContactForm";
import {
  faBuilding,
  faCircleChevronRight,
  faClock,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ContactUsMap = dynamic(() => import("@/components/common/ContactUsMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function ContactUs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[275px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/contact-us/hero-bg.jpg"
            alt="Contact Oprax IT Services"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link
              href="/"
              className="text-white font-normal hover:text-[#15B8AE]"
            >
              Home
            </Link>
            <FontAwesomeIcon
              className="text-[#15B8AE] text-sm font-semibold"
              icon={faCircleChevronRight}
            />
            <Link
              href="/contact-us"
              className="text-white font-normal hover:text-[#15B8AE]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto xl:px-24">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            <div className="lg:w-1/2 p-6 md:ml-14">
              <h4 className="text-xl font-semibold text-[#15B8AE] mb-6">
                Contact Us
              </h4>
              <h2 className="text-4xl font-bold text-black mb-6">
                Get In Touch with Us
              </h2>
              <p className="text-gray-600 text-md">
                Have questions or inquiries? Fill out our
                <Link
                  href="/contact-us"
                  className="font-normal text-[#15B8AE] hover:text-black"
                >
                  {" contact form "}
                </Link>
                below, and our dedicated team will reach out to you within 24
                hours during business days. At{" "}
                <Link
                  href="/"
                  className="font-normal text-[#15B8AE] hover:text-black"
                >
                  {" OpraxIT Services "}
                </Link>
                , we specialize in
                <Link
                  href="/about-us"
                  className="font-normal text-[#15B8AE] hover:text-black"
                >
                  {" staffing and recruiting solutions "}
                </Link>
                tailored to your needs. Let&apos;s connect and explore how we
                can support your workforce requirements.
              </p>

              <div className="grid gap-x-3 gap-y-10 grid-cols-2 py-16 w-full border-b border-gray-300">
                <div className="flex w-full gap-4">
                  <div className="w-[70px] h-[70px]">
                    <FontAwesomeIcon
                      className="text-4xl p-4 text-white bg-[#15B8AE]"
                      icon={faBuilding}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-600 ">
                      6321 N. Campbell Ave Chicago IL 60659
                    </p>
                  </div>
                </div>

                <div className="flex w-full gap-4">
                  <div className="w-[70px] h-[70px]">
                    <FontAwesomeIcon
                      className="text-4xl p-4 text-white bg-[#15B8AE]"
                      icon={faPhoneVolume}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      Calling Support
                    </h3>
                    <p className="text-gray-600 ">
                      <a
                        href="tel:+1234567890"
                        className="hover:text-blue-600 transition duration-300"
                      >
                        +1 (217) 335-6775
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex w-full gap-4">
                  <div className="w-[70px] h-[70px]">
                    <FontAwesomeIcon
                      className="text-4xl p-4 text-white bg-[#15B8AE]"
                      icon={faEnvelope}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      Information
                    </h3>
                    <p className="text-gray-600 ">
                      <a
                        href="mailto:info@opraxitservices.com"
                        className="hover:text-blue-600 transition duration-300"
                      >
                        info@opraxitservices.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-3xl font-semibold text-black ">
                  Working Hours
                </h4>
                <div className="flex my-3 items-start gap-2">
                  <FontAwesomeIcon
                    className="h-full my-auto text-[#15B8AE] text-sm"
                    icon={faClock}
                  />
                  <p className="text-gray-500 font-light hover:text-[#15B8AE] duration-300">
                    Mon - Fri : 9:00 A.M. - 5:00 P.M.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[480px] w-full">
        <ContactUsMap />
      </section>
    </main>
  );
}
