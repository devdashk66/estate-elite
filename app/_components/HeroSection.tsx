"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaBuilding, FaHome, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

interface LocationOption {
  id: number;
  name: string;
}

interface PropertyTypeOption {
  id: number;
  name: string;
  icon: JSX.Element;
}

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);

  const locations: LocationOption[] = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
    { id: 4, name: "Miami" },
    { id: 5, name: "San Francisco" },
  ];

  const propertyTypes: PropertyTypeOption[] = [
    { id: 1, name: "Houses", icon: <FaHome /> },
    { id: 2, name: "Apartments", icon: <FaBuilding /> },
    { id: 3, name: "Condos", icon: <FaBuilding /> },
    { id: 4, name: "Commercial", icon: <FaBuilding /> },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log({
      searchTerm,
      location: selectedLocation
        ? locations.find((loc) => loc.id === selectedLocation)?.name
        : null,
      type: selectedType
        ? propertyTypes.find((type) => type.id === selectedType)?.name
        : null,
      priceRange,
    });
  };

  // const formatPrice = (price: number) => {
  //   return price.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     maximumFractionDigits: 0,
  //   });
  // };

  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury real estate"
          fill
          style={{ objectFit: "cover" }}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGESEiMTJBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCZ3fKtrbI9ncSiNJeigvuK0wGGaRQA8pG596UpB//Z"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 md:px-8 pt-10 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the perfect property that matches your lifestyle and
            aspirations with our extensive listings.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg p-6 mt-4"
        >
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Search Term */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-300" />
                </div>
                <input
                  type="text"
                  placeholder="Keywords"
                  className="pl-10 w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Location Dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="text-gray-300" />
                </div>
                <select
                  className="pl-10 w-full p-3 rounded-md bg-white/20 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedLocation || ""}
                  onChange={(e) =>
                    setSelectedLocation(Number(e.target.value) || null)
                  }
                >
                  <option value="" className="bg-gray-800">
                    Any Location
                  </option>
                  {locations.map((location) => (
                    <option
                      key={location.id}
                      value={location.id}
                      className="bg-gray-800"
                    >
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaHome className="text-gray-300" />
                </div>
                <select
                  className="pl-10 w-full p-3 rounded-md bg-white/20 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedType || ""}
                  onChange={(e) =>
                    setSelectedType(Number(e.target.value) || null)
                  }
                >
                  <option value="" className="bg-gray-800">
                    Any Type
                  </option>
                  {propertyTypes.map((type) => (
                    <option
                      key={type.id}
                      value={type.id}
                      className="bg-gray-800"
                    >
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiMoneyDollarCircleLine className="text-gray-300" />
                </div>
                <select
                  className="pl-10 w-full p-3 rounded-md bg-white/20 border border-white/30 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={`${priceRange[0]}-${priceRange[1]}`}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split("-").map(Number);
                    setPriceRange([min, max]);
                  }}
                >
                  <option value="0-1000000" className="bg-gray-800">
                    Any Price
                  </option>
                  <option value="0-200000" className="bg-gray-800">
                    Up to $200,000
                  </option>
                  <option value="200000-500000" className="bg-gray-800">
                    $200,000 - $500,000
                  </option>
                  <option value="500000-1000000" className="bg-gray-800">
                    $500,000 - $1,000,000
                  </option>
                  <option value="1000000-5000000" className="bg-gray-800">
                    $1,000,000+
                  </option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            >
              Search Properties
            </motion.button>
          </form>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-4 md:grid-cols-4 gap-8"
        >
          {[
            { value: "1,500+", label: "Properties" },
            { value: "90+", label: "Cities Covered" },
            { value: "2,500+", label: "Happy Clients" },
            { value: "100+", label: "Expert Agents" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.8 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
