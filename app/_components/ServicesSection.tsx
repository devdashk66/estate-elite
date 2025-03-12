"use client";

// components/ServicesSection.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaChartLine,
  FaFileContract,
  FaHandshake,
  FaHome,
  FaLock,
  FaMoneyBillWave,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services: Service[] = [
    {
      id: 1,
      title: "Property Search",
      description:
        "Advanced search tools to find properties matching your exact criteria, including location, price, and features.",
      icon: <FaSearch size={28} />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      title: "Expert Guidance",
      description:
        "Our licensed real estate agents provide personalized advice to help you make informed decisions.",
      icon: <FaHandshake size={28} />,
      color: "bg-green-50 text-green-600",
    },
    {
      id: 3,
      title: "Market Analysis",
      description:
        "Access detailed market reports and property valuations backed by comprehensive data.",
      icon: <FaChartLine size={28} />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      id: 4,
      title: "Verified Listings",
      description:
        "Every property is verified by our team to ensure accuracy and prevent fraudulent listings.",
      icon: <FaShieldAlt size={28} />,
      color: "bg-red-50 text-red-600",
    },
    {
      id: 5,
      title: "Virtual Tours",
      description:
        "Explore properties remotely with our immersive 3D virtual tours and detailed photo galleries.",
      icon: <FaHome size={28} />,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      id: 6,
      title: "Financing Support",
      description:
        "Connect with trusted mortgage lenders and get pre-approved to streamline your buying process.",
      icon: <FaMoneyBillWave size={28} />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      id: 7,
      title: "Legal Assistance",
      description:
        "Our network of legal experts ensures all transactions and contracts are properly handled.",
      icon: <FaFileContract size={28} />,
      color: "bg-teal-50 text-teal-600",
    },
    {
      id: 8,
      title: "Secure Transactions",
      description:
        "End-to-end encryption and secure payment systems protect your sensitive information.",
      icon: <FaLock size={28} />,
      color: "bg-pink-50 text-pink-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold"
          >
            OUR SERVICES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4"
          >
            How We Help You Find Your Perfect Home
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive suite of services designed to make your
            real estate journey smooth, transparent, and successful from start
            to finish.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`rounded-full w-16 h-16 flex items-center justify-center mb-5 ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row gap-4 bg-gray-50 p-8 rounded-2xl shadow-sm">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Ready to start your journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with our team of experts today and let us help you find
                your dream property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Contact Us
                </button>
                <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg border border-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
