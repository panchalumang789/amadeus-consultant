"use client";
import {
  faChartLine,
  faCircleChevronRight,
  faDatabase,
  faGears,
  faHandshake,
  faHandshakeSimple,
  faHeadset,
  faMagnifyingGlass,
  faPalette,
  faUsers,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface Service {
  title: string;
  description: string;
  image: ReactElement;
}

const services: Service[] = [
  {
    title: "Staffing Services",
    description:
      "Opraxit Services offers premier staffing solutions across the USA, seamlessly matching top talent with leading companies. With our commitment to excellence, we ensure mutual success for candidates and businesses alike. Trust us for the best-in-class staffing experience.",
    image: (
      <FontAwesomeIcon className="text-[#15B8AE] text-3xl" icon={faUsers} />
    ),
  },
  {
    title: "Administrative & Accounting Services",
    description:
      "Opraxit Services provides exceptional administrative and accounting solutions tailored to your business needs. From streamlining operations to ensuring financial efficiency, our expert team delivers unmatched support. Trust Opraxit for seamless administrative and accounting services that drive your success.",
    image: (
      <FontAwesomeIcon className="text-[#15B8AE] text-3xl" icon={faGears} />
    ),
  },
  {
    title: "Design Engineering Services",
    description:
      "Experience excellence with Opraxit Services’ bespoke Design Engineering solutions. Our forward-thinking team blends creativity and technical prowess to deliver unparalleled results. Elevate your projects with our innovative approach to design engineering, setting new standards of excellence in the industry.",
    image: (
      <FontAwesomeIcon className="text-[#15B8AE] text-3xl" icon={faPalette} />
    ),
  },
  {
    title: "Digital Marketing Services",
    description:
      "Discover the power of strategic digital marketing with Opraxit Services. Our data-driven approach and creative expertise converge to amplify your online presence and drive tangible results. Trust Opraxit to craft customized digital marketing solutions tailored to your unique goals, setting you apart in the digital landscape.",
    image: (
      <FontAwesomeIcon className="text-[#15B8AE] text-3xl" icon={faDatabase} />
    ),
  },
  {
    title: "Placement Services",
    description:
      "Your Gateway to Talent Acquisition Excellence. Our dedicated team specializes in sourcing top-tier candidates tailored to your specific requirements. With a commitment to precision and personalized attention, we streamline the hiring process, ensuring optimal placements for mutual success.",
    image: (
      <FontAwesomeIcon
        className="text-[#15B8AE] text-3xl"
        icon={faHandshakeSimple}
      />
    ),
  },
  {
    title: "Interview Guide Support",
    description:
      "Elevating Your Hiring Process to New Heights. Our comprehensive support ensures you’re equipped with the tools and insights needed to conduct effective interviews. From crafting targeted questions to providing valuable feedback, we empower your team to make informed hiring decisions and secure the best talent for your organization.",
    image: (
      <FontAwesomeIcon className="text-[#15B8AE] text-3xl" icon={faHeadset} />
    ),
  },
];

const whyChooseUsFeatures = [
  {
    icon: (
      <FontAwesomeIcon
        className="bg=[#15B8AE] text-white rounded-full text-3xl"
        icon={faUsersLine}
      />
    ),
    title: "The Best Hiring Agency Service",
    description:
      "Elevate your workforce with the unparalleled excellence of Oprax IT Services, the best hiring agency service.",
  },
  {
    icon: (
      <FontAwesomeIcon
        className="bg=[#15B8AE] text-white rounded-full text-3xl"
        icon={faChartLine}
      />
    ),
    title: "Premier Client Engagement",
    description:
      "Oprax IT Services ensures premier client engagement, delivering tailored solutions to meet your staffing needs with exceptional precision and effectiveness.",
  },
  {
    icon: (
      <FontAwesomeIcon
        className="bg=[#15B8AE] text-white rounded-full text-3xl"
        icon={faMagnifyingGlass}
      />
    ),
    title: "Pinnacle Market Research",
    description:
      "Elevate your workforce with the unparalleled excellence of Oprax IT Services, delivering tailored solutions crafted for the unique dynamics of the USA market.",
  },
  {
    icon: (
      <FontAwesomeIcon
        className="bg=[#15B8AE] text-white rounded-full text-3xl"
        icon={faHandshake}
      />
    ),
    title: "Give The Best Treatment to Worker",
    description:
      "At Oprax IT Services, our prime feedback Management ensures continuous improvement by harnessing valuable insights, fostering a responsive and client-centric approach to exceed your expectations.",
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[275px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/services/hero-bg.jpg"
            alt="Services"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
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
              href="/services"
              className="text-white font-normal hover:text-[#15B8AE]"
            >
              Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl font-semibold text-[#15B8AE] mb-2">
              Our Service
            </h2>
            <h3 className="text-5xl font-bold text-black mb-4">
              Service for Job Seeker
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 border border-black hover:shadow-lg transition-shadow"
              >
                <div className="flex items-end border-b border-gray-300 gap-2">
                  <div className="mb-4">{service.image}</div>
                  <h3 className="text-3xl text-black font-bold mb-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-black text-md font-medium mt-2 mb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(at bottom right, #15B8AE 0%, #15B8AE00 37%)",
        }}
      >
        <div className="w-full lg:w-2/3 p-10 lg:p-20">
          <div className="container mx-auto">
            <div className="mb-16">
              <h2 className="text-lg text-[#15B8AE] font-semibold mb-3">
                Why Choose Us
              </h2>
              <h3 className="text-4xl font-bold max-w-2xl">
                Giving The Job Opportunity That Fits With Your Profile
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {whyChooseUsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#15B8AE] rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="text-3xl font-bold">{feature.title}</h4>
                    <p className="text-gray-300 text-md">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full opacity-100">
          <Image
            src="/images/services/lawyer-in-office.jpg"
            alt="Why Choose Us"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </main>
  );
}
