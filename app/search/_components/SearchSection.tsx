"use client";

// pages/search.tsx
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBath,
  FaBed,
  FaFilter,
  FaHeart,
  FaMapMarkerAlt,
  FaRuler,
  FaSearch,
  FaSortAmountDown,
} from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

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
  yearBuilt: number;
  description: string;
}

const SearchSection: NextPage = () => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState<"All" | "Sale" | "Rent">(
    "All"
  );
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [minArea, setMinArea] = useState(0);
  const [sortBy, setSortBy] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);

  // Mock data - replace with API call in real implementation
  useEffect(() => {
    // Simulate API loading
    setLoading(true);

    // Mock data
    const mockProperties: Property[] = [
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
        yearBuilt: 2020,
        description: "Spacious villa with panoramic views of the city.",
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
        yearBuilt: 2018,
        description: "Elegant penthouse in the heart of downtown.",
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
        yearBuilt: 2019,
        description: "Stunning apartment with direct access to the beach.",
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
        featured: false,
        type: "Sale",
        yearBuilt: 2015,
        description: "Perfect family home in a quiet suburban neighborhood.",
      },
      {
        id: "prop5",
        title: "Mountain View Cabin",
        price: 450000,
        address: "555 Pine Road, Aspen",
        bedrooms: 3,
        bathrooms: 2,
        area: 1600,
        image: "/images/properties/property5.jpg",
        featured: false,
        type: "Sale",
        yearBuilt: 2010,
        description: "Cozy cabin with breathtaking mountain views.",
      },
      {
        id: "prop6",
        title: "Studio Apartment",
        price: 2200,
        address: "888 College Blvd, Boston",
        bedrooms: 1,
        bathrooms: 1,
        area: 650,
        image: "/images/properties/property6.jpg",
        featured: false,
        type: "Rent",
        yearBuilt: 2017,
        description:
          "Modern studio apartment, perfect for students or young professionals.",
      },
    ];

    // Simulate API delay
    setTimeout(() => {
      setProperties(mockProperties);
      setLoading(false);
    }, 800);
  }, []);

  // Apply filters
  const filteredProperties = properties.filter((property) => {
    // Search term filter
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Property type filter
    const matchesType =
      propertyType === "All" ||
      (propertyType === "Sale" && property.type === "Sale") ||
      (propertyType === "Rent" && property.type === "Rent");

    // Price filter
    const matchesPrice =
      property.price >= minPrice && property.price <= maxPrice;

    // Bedrooms filter
    const matchesBedrooms = bedrooms === 0 || property.bedrooms >= bedrooms;

    // Bathrooms filter
    const matchesBathrooms = bathrooms === 0 || property.bathrooms >= bathrooms;

    // Area filter
    const matchesArea = property.area >= minArea;

    return (
      matchesSearch &&
      matchesType &&
      matchesPrice &&
      matchesBedrooms &&
      matchesBathrooms &&
      matchesArea
    );
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return b.yearBuilt - a.yearBuilt;
      case "oldest":
        return a.yearBuilt - b.yearBuilt;
      case "size-asc":
        return a.area - b.area;
      case "size-desc":
        return b.area - a.area;
      default:
        return 0;
    }
  });

  // Toggle favorite
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Format price
  const formatPrice = (price: number, type: "Sale" | "Rent") => {
    return (
      price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }) + (type === "Rent" ? "/mo" : "")
    );
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setPropertyType("All");
    setMinPrice(0);
    setMaxPrice(10000000);
    setBedrooms(0);
    setBathrooms(0);
    setMinArea(0);
    setSortBy("newest");
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen pb-20">
        {/* Search Header */}
        <div className="bg-gray-900 text-white py-20 px-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 pt-10">
              <div className="flex-grow relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location, property name, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-100 placeholder:text-gray-400 ring-1 ring-blue-100"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <MdClear />
                  </button>
                )}
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-colors md:w-auto"
              >
                <FaFilter className="mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8">
          {/* Advanced Filters */}
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Advanced Filters
                </h2>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Reset All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Property Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Property Type
                  </label>
                  <div className="flex space-x-2">
                    {["All", "Sale", "Rent"].map((type) => (
                      <button
                        key={type}
                        onClick={() =>
                          setPropertyType(type as "All" | "Sale" | "Rent")
                        }
                        className={`px-4 py-2 rounded-md text-sm font-medium flex-grow ${
                          propertyType === type
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {type === "All" ? "All" : `For ${type}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <RiMoneyDollarCircleLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="number"
                          placeholder="Min"
                          value={minPrice > 0 ? minPrice : ""}
                          onChange={(e) =>
                            setMinPrice(Number(e.target.value) || 0)
                          }
                          className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <RiMoneyDollarCircleLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="number"
                          placeholder="Max"
                          value={maxPrice < 10000000 ? maxPrice : ""}
                          onChange={(e) =>
                            setMaxPrice(Number(e.target.value) || 10000000)
                          }
                          className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bedrooms & Bathrooms */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Bedrooms
                  </label>
                  <div className="flex space-x-2">
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={`bed-${num}`}
                        onClick={() => setBedrooms(num)}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex-grow ${
                          bedrooms === num
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {num === 0 ? "Any" : num === 5 ? "5+" : num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Bathrooms
                  </label>
                  <div className="flex space-x-2">
                    {[0, 1, 2, 3, 4].map((num) => (
                      <button
                        key={`bath-${num}`}
                        onClick={() => setBathrooms(num)}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex-grow ${
                          bathrooms === num
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {num === 0 ? "Any" : num === 4 ? "4+" : num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Square Footage */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Square Footage (min)
                  </label>
                  <div className="relative">
                    <FaRuler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Min area in sq ft"
                      value={minArea > 0 ? minArea : ""}
                      onChange={(e) => setMinArea(Number(e.target.value) || 0)}
                      className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Sort By
                  </label>
                  <div className="relative">
                    <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white !text-gray-700"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="size-asc">Size: Small to Large</option>
                      <option value="size-desc">Size: Large to Small</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}

          {/* Search Results */}
          <div className="mb-6 flex justify-between items-center">
            <div className="text-gray-700">
              {loading ? (
                <p>Searching properties...</p>
              ) : (
                <p>
                  <span className="font-medium">{sortedProperties.length}</span>{" "}
                  properties found
                </p>
              )}
            </div>

            <div className="flex items-center text-sm">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Size: Large to Small</option>
              </select>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : sortedProperties.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-gray-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all available
                properties.
              </p>
              <button
                onClick={resetFilters}
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProperties.map((property) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Property Image */}
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 hover:scale-105"
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
                        <span className="text-gray-700">
                          {property.bedrooms}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaBath className="text-gray-400 mr-1" />
                        <span className="text-gray-700">
                          {property.bathrooms}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaRuler className="text-gray-400 mr-1" />
                        <span className="text-gray-700">
                          {property.area} ft²
                        </span>
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchSection;
