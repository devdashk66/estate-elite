"use client";

// components/Testimonials.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  property: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      image: "/images/testimonial/testimonial1.jpg",
      rating: 5,
      text: "Working with this real estate team was an absolute dream. They found us the perfect family home within our budget in just two weeks. Their knowledge of the market and negotiation skills saved us thousands!",
      property: "Purchased a 4-bedroom home in Westwood",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      image: "/images/testimonial/testimonial2.jpg",
      rating: 5,
      text: "As an investor, I needed a team that understood ROI and market trends. They not only found me three excellent investment properties but also provided valuable insights on future market direction.",
      property: "Acquired multiple investment properties",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "First-time Seller",
      image: "/images/testimonial/testimonial3.jpg",
      rating: 5,
      text: "Selling my first home was intimidating, but they guided me through every step. Their staging advice and professional photography helped me sell above asking price in less than a week!",
      property: "Sold a condo in Downtown",
    },
    {
      id: 4,
      name: "David Williams",
      role: "Luxury Home Buyer",
      image: "/images/testimonial/testimonial4.jpg",
      rating: 5,
      text: "The VIP treatment I received while searching for my luxury property was exceptional. They respected my privacy while showing me exclusive listings that weren't available on the market.",
      property: "Purchased a beachfront estate",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  // Pause autoplay when user interacts with carousel
  const handleManualNavigation = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&#39;t just take our word for it. Hear from our satisfied clients
            who found their perfect properties through our services.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              {/* Testimonial Image - Only visible on md and up */}
              <div className="relative hidden md:block md:w-1/3 lg:w-2/5">
                <div className="absolute inset-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="h-full w-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20" />
              </div>

              {/* Testimonial Content */}
              <div className="p-6 md:p-10 md:w-2/3 lg:w-3/5">
                <FaQuoteLeft className="text-blue-400 mb-6" size={36} />

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonials[currentIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } mr-1`}
                      size={20}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-lg mb-6 italic">
                  &#34;{testimonials[currentIndex].text}&#34;
                </p>

                <div className="flex items-center">
                  {/* Small profile picture - Only visible on mobile */}
                  <div className="relative md:hidden mr-4 w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-600 mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].property}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-blue-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:block">
            <button
              onClick={() =>
                handleManualNavigation(
                  (currentIndex - 1 + testimonials.length) % testimonials.length
                )
              }
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                handleManualNavigation((currentIndex + 1) % testimonials.length)
              }
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-700"
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
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Join hundreds of satisfied clients who found their dream properties
            with us.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Start Your Journey
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
