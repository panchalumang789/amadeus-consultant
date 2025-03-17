"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    text: "Oprax IT Services played a pivotal role in helping me secure my dream IT job. Their marketing expertise and dedicated support were outstanding. They provided personalized guidance and prepared me thoroughly for interviews, making my job search efficient and successful. I highly recommend their services to anyone seeking to advance their IT career",
    name: "Shreyas",
    role: "Candidate",
  },
  {
    text: "I had a great experience working with Oprax. The team is professional, and dedicated, and delivers exceptional results. Highly recommended!",
    name: "Jacob",
    role: "Client",
  },
  {
    text: "I can't speak highly enough of Oprax IT Services! From the moment we reached out to them for assistance with our company's IT needs, they provided exemplary service that exceeded all expectations.",
    name: "Priyanka",
    role: "Candidate",
  },
  {
    text: "Clients consistently praise Oprax IT Services for their prompt and reliable support. The team is known for its quick response times and proactive approach to addressing issues, ensuring minimal downtime and maximum satisfaction.",
    name: "Erick",
    role: "Candidate",
  },
  {
    text: "Oprax IT Services excels in delivering high-quality work. Their technical proficiency is evident in the robust, scalable solutions they developed for us. The implementation was flawless, and we experienced minimal downtime, which is crucial for our operations. They also went above and beyond to provide comprehensive training and support, ensuring that our team could fully leverage the new systems.",
    name: "Gourav",
    role: "Candidate",
  },
  {
    text: "Oprax IT Services stands out for its innovative approach to solving complex business challenges. By leveraging the latest technologies and industry best practices, they deliver forward-thinking solutions that drive efficiency, productivity, and growth.",
    name: "Aron",
    role: "Candidate",
  },
  {
    text: "What sets Oprax IT Services apart is their commitment to customer satisfaction. They took the time to understand our unique challenges and provided insightful recommendations that have significantly improved our efficiency and productivity. Their innovative approach and attention to detail have truly transformed our IT infrastructure.",
    name: "Krishan",
    role: "Candidate",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(1);

  const totalSlides = Math.ceil(testimonials.length / isMobile);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 768) setIsMobile(1);
        else if (window.innerWidth < 1024) setIsMobile(2);
        else setIsMobile(3);
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, totalSlides]);

  const getCurrentTestimonials = () => {
    const start = currentSlide * isMobile;
    return testimonials.slice(start, start + isMobile);
  };

  const handleDragEnd = (e: Event, info: PanInfo) => {
    if (info.offset.x < -100) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else if (info.offset.x > 100) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <div className="w-[4px] h-[4px] rounded-full bg-[#0c5adb]"></div>
            <div className="w-[4px] h-[4px] rounded-full bg-[#0c5adb]"></div>
            <div className="w-[4px] h-[4px] rounded-full bg-[#0c5adb]"></div>
            <div className="w-8 h-[3px] rounded-full bg-[#0c5adb]"></div>
          </div>
          <p className="text-white font-light text-lg">What Our Clients Say</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#15B8AE] p-8 rounded-2xl border border-[#2A2F3D] hover:border-[#00D2C7] transition-all duration-300"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <p className="text-black leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-black text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-white text-xs">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="text-white text-4xl font-serif">
                          <FontAwesomeIcon icon={faQuoteRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentSlide === index
                  ? "bg-[#2575fc] scale-150"
                  : "bg-[#2A2F3D] hover:bg-[#2575fc]"
              }`}
              aria-label={`Testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
