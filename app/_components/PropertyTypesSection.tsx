"use client";
// components/PropertyTypesSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropertyType {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
  slug: string;
}

const PropertyTypesSection: React.FC = () => {
  // Sample data - replace with your actual property types
  const propertyTypes: PropertyType[] = [
    {
      id: "1",
      name: "Luxury Villas",
      description:
        "Exclusive homes with premium amenities and spacious layouts",
      image: "/images/properties/property1.jpg",
      count: 48,
      slug: "luxury-villas",
    },
    {
      id: "2",
      name: "Modern Apartments",
      description:
        "Contemporary urban living with stylish designs and convenience",
      image: "/images/properties/property2.jpg",
      count: 136,
      slug: "modern-apartments",
    },
    {
      id: "3",
      name: "Family Houses",
      description:
        "Comfortable homes perfect for growing families and long-term living",
      image: "/images/properties/property3.jpg",
      count: 94,
      slug: "family-houses",
    },
    {
      id: "4",
      name: "Vacation Homes",
      description:
        "Getaway properties in prime locations for relaxation and investment",
      image: "/images/properties/property4.jpg",
      count: 52,
      slug: "vacation-homes",
    },
    {
      id: "5",
      name: "Commercial Spaces",
      description:
        "Premium office and retail locations for your business needs",
      image: "/images/properties/property5.jpg",
      count: 67,
      slug: "commercial-spaces",
    },
    {
      id: "6",
      name: "Eco-Friendly Homes",
      description:
        "Sustainable properties with energy-efficient designs and features",
      image: "/images/properties/property6.jpg",
      count: 33,
      slug: "eco-friendly-homes",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
          >
            Browse By Category
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
          >
            Explore Our Property Types
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover the perfect property category that suits your lifestyle and
            needs, from luxurious villas to modern urban apartments.
          </motion.p>
        </div>

        {/* Property Types Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {propertyTypes.map((type) => (
            <motion.div
              key={type.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Property Type Image */}
              <div className="h-64 relative">
                <Image
                  src={type.image}
                  alt={type.name}
                  sizes="720px"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Property Type Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                      {type.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 opacity-90 line-clamp-2">
                      {type.description}
                    </p>
                    <Link
                      href={`/properties/type/${type.slug}`}
                      className="inline-flex items-center text-sm font-medium text-white hover:text-blue-300 transition-colors"
                    >
                      <span className="border-b border-current pb-0.5">
                        {type.count} Properties
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Overlay Link */}
              <Link
                href={`/properties/type/${type.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View all ${type.name}`}
              >
                <span className="sr-only">View all {type.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Properties CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/properties"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            View All Properties
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyTypesSection;
