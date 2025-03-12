"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  MdDirectionsTransit,
  MdLocalHospital,
  MdRestaurant,
  MdSchool,
} from "react-icons/md";

interface Neighborhood {
  id: string;
  name: string;
  description: string;
  image: string;
  avgPrice: number;
  propertyCount: number;
  amenities: {
    restaurants: number;
    schools: number;
    hospitals: number;
    transit: number;
  };
  stats: {
    walkScore: number;
    crimeRate: string;
    growthRate: string;
  };
}

const NeighborhoodSpotlights = () => {
  const neighborhoods: Neighborhood[] = [
    {
      id: "downtown",
      name: "Downtown",
      description:
        "Experience urban living at its finest in our vibrant downtown area. With a mix of modern high-rises and historic buildings, downtown offers something for everyone, from young professionals to empty nesters looking for an active lifestyle.",
      image: "/images/properties/property1.jpg",
      avgPrice: 750000,
      propertyCount: 45,
      amenities: {
        restaurants: 120,
        schools: 8,
        hospitals: 3,
        transit: 15,
      },
      stats: {
        walkScore: 92,
        crimeRate: "Low",
        growthRate: "High",
      },
    },
    {
      id: "riverside",
      name: "Riverside",
      description:
        "Nestled along the scenic waterfront, Riverside combines natural beauty with upscale amenities. Enjoy waterfront parks, marinas, and walking trails while still being just minutes from urban conveniences.",
      image: "/images/properties/property2.jpg",
      propertyCount: 32,
      amenities: {
        restaurants: 75,
        schools: 12,
        hospitals: 2,
        transit: 8,
      },
      stats: {
        walkScore: 78,
        crimeRate: "Very Low",
        growthRate: "Moderate",
      },
    },
    {
      id: "hillcrest",
      name: "Hillcrest",
      description:
        "Perched on gentle slopes with stunning views, Hillcrest offers a perfect blend of luxury and comfort. Known for its excellent schools and spacious properties, this neighborhood is ideal for families looking for a peaceful suburban setting.",
      image: "/images/properties/property3.jpg",
      avgPrice: 1250000,
      propertyCount: 28,
      amenities: {
        restaurants: 45,
        schools: 15,
        hospitals: 1,
        transit: 5,
      },
      stats: {
        walkScore: 65,
        crimeRate: "Very Low",
        growthRate: "High",
      },
    },
    {
      id: "oakpark",
      name: "Oak Park",
      description:
        "Tree-lined streets and classic architecture define this historic neighborhood. Oak Park combines old-world charm with modern conveniences, offering a tight-knit community feel while still providing easy access to the city center.",
      image: "/images/properties/property4.jpg",
      avgPrice: 680000,
      propertyCount: 52,
      amenities: {
        restaurants: 60,
        schools: 10,
        hospitals: 2,
        transit: 12,
      },
      stats: {
        walkScore: 85,
        crimeRate: "Low",
        growthRate: "Stable",
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % neighborhoods.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + neighborhoods.length) % neighborhoods.length
    );
  };

  const currentNeighborhood = neighborhoods[activeIndex];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Explore Our Neighborhoods
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover the unique character and amenities of our featured
            neighborhoods. Find the perfect location that matches your lifestyle
            and preferences.
          </motion.p>
        </div>

        {/* Neighborhood Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Previous neighborhood"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Next neighborhood"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>

          {/* Slider Content */}
          <motion.div
            ref={sliderRef}
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Neighborhood Image */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image
                  src={currentNeighborhood.image}
                  alt={currentNeighborhood.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6 bg-blue-600 text-white rounded-lg px-4 py-2 font-bold">
                  {currentNeighborhood.name}
                </div>
              </div>

              {/* Neighborhood Details */}
              <div className="p-6 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  About {currentNeighborhood.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentNeighborhood.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm">Average Price</p>
                    <p className="text-gray-800 font-bold">
                      ${currentNeighborhood.avgPrice}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm">Properties</p>
                    <p className="text-gray-800 font-bold">
                      {currentNeighborhood.propertyCount} listings
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm">Walk Score</p>
                    <p className="text-gray-800 font-bold">
                      {currentNeighborhood.stats.walkScore}/100
                    </p>
                  </div>
                </div>

                {/* Amenities */}
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Local Amenities
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-50 p-3 rounded-full mb-2">
                      <MdRestaurant className="text-blue-600" size={20} />
                    </div>
                    <p className="text-gray-700 font-medium">
                      {currentNeighborhood.amenities.restaurants}
                    </p>
                    <p className="text-gray-500 text-sm">Restaurants</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-green-50 p-3 rounded-full mb-2">
                      <MdSchool className="text-green-600" size={20} />
                    </div>
                    <p className="text-gray-700 font-medium">
                      {currentNeighborhood.amenities.schools}
                    </p>
                    <p className="text-gray-500 text-sm">Schools</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-red-50 p-3 rounded-full mb-2">
                      <MdLocalHospital className="text-red-600" size={20} />
                    </div>
                    <p className="text-gray-700 font-medium">
                      {currentNeighborhood.amenities.hospitals}
                    </p>
                    <p className="text-gray-500 text-sm">Hospitals</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-50 p-3 rounded-full mb-2">
                      <MdDirectionsTransit
                        className="text-yellow-600"
                        size={20}
                      />
                    </div>
                    <p className="text-gray-700 font-medium">
                      {currentNeighborhood.amenities.transit}
                    </p>
                    <p className="text-gray-500 text-sm">Transit Stops</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/neighborhoods/${currentNeighborhood.id}`}
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    <FaMapMarkerAlt className="mr-2" /> Explore Neighborhood
                  </Link>
                  <Link
                    href={`/properties?neighborhood=${currentNeighborhood.id}`}
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    <FaHome className="mr-2" /> View Properties
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Neighborhood Pagination Indicators */}
          <div className="flex justify-center mt-8">
            {neighborhoods.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to neighborhood ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Neighborhood Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">150+</h3>
            <p className="text-gray-600">Neighborhoods Covered</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">10+ Years</h3>
            <p className="text-gray-600">Local Market Experience</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </motion.div>

        {/* All Neighborhoods Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/neighborhoods"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Explore All Neighborhoods
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

export default NeighborhoodSpotlights;
