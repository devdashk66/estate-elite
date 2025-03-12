"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHandshake, FaHome, FaKey, FaSearch } from "react-icons/fa";

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <FaSearch size={32} />,
      title: "Discover Properties",
      description:
        "Browse our extensive collection of premium properties tailored to your preferences and requirements.",
      color: "bg-blue-500",
    },
    {
      icon: <FaHome size={32} />,
      title: "Schedule Viewings",
      description:
        "Book personalized property tours at your convenience with our expert real estate agents.",
      color: "bg-green-500",
    },
    {
      icon: <FaHandshake size={32} />,
      title: "Make an Offer",
      description:
        "Receive professional guidance on making competitive offers and navigating negotiations.",
      color: "bg-purple-500",
    },
    {
      icon: <FaKey size={32} />,
      title: "Close the Deal",
      description:
        "Experience a smooth closing process with our dedicated team handling all the paperwork and details.",
      color: "bg-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our streamlined process makes finding and purchasing your dream
            property simple and stress-free.
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0">
            <motion.div
              variants={lineVariants}
              className="h-full bg-blue-500 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center"
              >
                <div
                  className={`${step.color} text-white p-4 rounded-full mb-5 shadow-md`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Step number indicator */}
                <div className="mt-5 bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold text-gray-700">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
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

export default HowItWorksSection;
