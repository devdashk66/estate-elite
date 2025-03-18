"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBath,
  FaBed,
  FaHeart,
  FaMapMarkerAlt,
  FaRuler,
} from "react-icons/fa";

interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
  type: "Sale" | "Rent";
}

const FeaturedProperties = () => {
  const properties: Property[] = [
    {
      id: "prop1",
      title: "Modern Luxury Villa",
      price: 1250000,
      address: "123 Skyline Drive, Beverly Hills",
      bedrooms: 5,
      bathrooms: 4,
      area: 3200,
      image: "/images/properties/property1.jpg",
      featured: true,
      type: "Sale",
    },
    {
      id: "prop2",
      title: "Downtown Penthouse",
      price: 890000,
      address: "456 Urban Avenue, Los Angeles",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      image: "/images/properties/property2.jpg",
      featured: true,
      type: "Sale",
    },
    {
      id: "prop3",
      title: "Waterfront Apartment",
      price: 4500,
      address: "789 Harbor View, Miami",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      image: "/images/properties/property3.jpg",
      featured: true,
      type: "Rent",
    },
    {
      id: "prop4",
      title: "Suburban Family Home",
      price: 750000,
      address: "321 Maple Street, Chicago",
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      image: "/images/properties/property4.jpg",
      featured: true,
      type: "Sale",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredPropertiesFunc = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const value = event.currentTarget.value;
    setActiveFilter(value);

    if (value === "For Sale") {
      const items = properties.filter((pro) => pro.type === "Sale");
      setFilteredProperties(items);
      console.log(items);
    } else if (value === "For Rent") {
      const items = properties.filter((pro) => pro.type === "Rent");
      setFilteredProperties(items);
      console.log(items);
    } else {
      setFilteredProperties(properties);
      console.log(properties);
    }
  };

  const formatPrice = (price: number, type: "Sale" | "Rent") => {
    return (
      price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }) + (type === "Rent" ? "/mo" : "")
    );
  };

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
    <section className="py-20 px-4 bg-gray-50">
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
            Featured Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium properties. Each one
            represents the finest in location, design, and value.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-white rounded-full shadow-md p-1">
            {["All", "For Sale", "For Rent"].map((filter) => (
              <button
                key={filter}
                value={filter}
                onClick={(event) => filteredPropertiesFunc(event)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Property Image */}
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="720px"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {property.type === "Sale" ? "For Sale" : "For Rent"}
                </div>
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <FaHeart
                    className={
                      favorites.includes(property.id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }
                    size={16}
                  />
                </button>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-blue-600 font-bold">
                    {formatPrice(property.price, property.type)}
                  </p>
                </div>

                <div className="flex items-center text-gray-500 mb-4">
                  <FaMapMarkerAlt className="mr-1" size={14} />
                  <p className="text-sm line-clamp-1">{property.address}</p>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <FaBed className="text-gray-400 mr-1" />
                    <span className="text-gray-700">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-gray-400 mr-1" />
                    <span className="text-gray-700">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <FaRuler className="text-gray-400 mr-1" />
                    <span className="text-gray-700">{property.area} ft²</span>
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="px-6 pb-6">
                <Link
                  href={`/properties/${property.id}`}
                  className="block w-full text-center py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Properties Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/properties"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            See All Properties
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

export default FeaturedProperties;
