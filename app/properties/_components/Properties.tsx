"use client";

// pages/properties/index.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import {
  FaBath,
  FaBed,
  FaFilter,
  FaHeart,
  FaMapMarkerAlt,
  FaRuler,
  FaSearch,
  FaSort,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// Components that would be imported in your real app

interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
  type: "Sale" | "Rent";
  propertyType: "House" | "Apartment" | "Condo" | "Villa" | "Commercial";
  description: string;
}

// Mock data for demonstration - you would fetch this from an API
const propertiesData: Property[] = [
  {
    id: "prop1",
    title: "Modern Luxury Villa",
    price: 1250000,
    address: "123 Skyline Drive",
    city: "Beverly Hills",
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    image: "/images/properties/property1.jpg",
    featured: true,
    type: "Sale",
    propertyType: "Villa",
    description:
      "Stunning modern villa with panoramic views, infinity pool, and smart home technology.",
  },
  {
    id: "prop2",
    title: "Downtown Penthouse",
    price: 890000,
    address: "456 Urban Avenue",
    city: "Los Angeles",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "/images/properties/property2.jpg",
    featured: true,
    type: "Sale",
    propertyType: "Apartment",
    description:
      "Luxurious penthouse in the heart of downtown with floor-to-ceiling windows and private terrace.",
  },
  {
    id: "prop3",
    title: "Waterfront Apartment",
    price: 4500,
    address: "789 Harbor View",
    city: "Miami",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/images/properties/property3.jpg",
    featured: true,
    type: "Rent",
    propertyType: "Apartment",
    description:
      "Beautiful apartment with direct water views, modern amenities, and access to building facilities.",
  },
  {
    id: "prop4",
    title: "Suburban Family Home",
    price: 750000,
    address: "321 Maple Street",
    city: "Chicago",
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    image: "/images/properties/property4.jpg",
    featured: true,
    type: "Sale",
    propertyType: "House",
    description:
      "Spacious family home in a quiet neighborhood with large backyard and renovated kitchen.",
  },
  {
    id: "prop5",
    title: "Commercial Office Space",
    price: 1200000,
    address: "555 Business Blvd",
    city: "New York",
    bedrooms: 0,
    bathrooms: 2,
    area: 3000,
    image: "/images/properties/property5.jpg",
    featured: false,
    type: "Sale",
    propertyType: "Commercial",
    description:
      "Prime commercial property in bustling business district with modern facilities and parking.",
  },
  {
    id: "prop6",
    title: "Cozy Studio Apartment",
    price: 1800,
    address: "777 College Ave",
    city: "Boston",
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    image: "/images/properties/property6.jpg",
    featured: false,
    type: "Rent",
    propertyType: "Apartment",
    description:
      "Cozy studio apartment near university campus with updated appliances and great amenities.",
  },
  {
    id: "prop7",
    title: "Lakefront Condo",
    price: 420000,
    address: "222 Shoreline Dr",
    city: "Seattle",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: "/images/properties/property7.jpg",
    featured: false,
    type: "Sale",
    propertyType: "Condo",
    description:
      "Modern condo with beautiful lake views, close to shopping and dining options.",
  },
  {
    id: "prop8",
    title: "Historic Townhouse",
    price: 950000,
    address: "123 Heritage Lane",
    city: "Philadelphia",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1850,
    image: "/images/properties/property8.jpg",
    featured: false,
    type: "Sale",
    propertyType: "House",
    description:
      "Beautifully restored historic townhouse with original features and modern updates.",
  },
];

// Available cities for filter
const cities = [
  "All Cities",
  "Beverly Hills",
  "Los Angeles",
  "Miami",
  "Chicago",
  "New York",
  "Boston",
  "Seattle",
  "Philadelphia",
];

// Property types for filter
const propertyTypes = [
  "All Types",
  "House",
  "Apartment",
  "Condo",
  "Villa",
  "Commercial",
];

// Price ranges for filter
const priceRanges = [
  { label: "Any Price", value: [0, 10000000] },
  { label: "Under $500,000", value: [0, 500000] },
  { label: "$500,000 - $750,000", value: [500000, 750000] },
  { label: "$750,000 - $1,000,000", value: [750000, 1000000] },
  { label: "Over $1,000,000", value: [1000000, 10000000] },
  { label: "Under $2,000/mo", value: [0, 2000] },
  { label: "$2,000 - $5,000/mo", value: [2000, 5000] },
  { label: "Over $5,000/mo", value: [5000, 50000] },
];

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("All Types");
  const [cityFilter, setCityFilter] = useState("All Cities");
  const [listingTypeFilter, setListingTypeFilter] = useState("All");
  const [priceRangeFilter, setPriceRangeFilter] = useState<[number, number]>([
    0, 10000000,
  ]);
  const [bedroomsFilter, setBedroomsFilter] = useState(0);
  const [sortOption, setSortOption] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // Toggle favorite
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter properties based on criteria
  const filteredProperties = propertiesData.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      propertyTypeFilter === "All Types" ||
      property.propertyType === propertyTypeFilter;
    const matchesCity =
      cityFilter === "All Cities" || property.city === cityFilter;
    const matchesListingType =
      listingTypeFilter === "All" ||
      (listingTypeFilter === "For Sale" && property.type === "Sale") ||
      (listingTypeFilter === "For Rent" && property.type === "Rent");
    const matchesPrice =
      property.price >= priceRangeFilter[0] &&
      property.price <= priceRangeFilter[1];
    const matchesBedrooms =
      bedroomsFilter === 0 || property.bedrooms >= bedroomsFilter;

    return (
      matchesSearch &&
      matchesType &&
      matchesCity &&
      matchesListingType &&
      matchesPrice &&
      matchesBedrooms
    );
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "newest":
        // In a real app, you would compare date fields
        return a.id > b.id ? -1 : 1;
      case "featured":
      default:
        return b.featured ? 1 : -1;
    }
  });

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
    setPropertyTypeFilter("All Types");
    setCityFilter("All Cities");
    setListingTypeFilter("All");
    setPriceRangeFilter([0, 10000000]);
    setBedroomsFilter(0);
    setSortOption("featured");
  };

  useEffect(() => {
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [
    searchTerm,
    propertyTypeFilter,
    cityFilter,
    listingTypeFilter,
    priceRangeFilter,
    bedroomsFilter,
    sortOption,
  ]);

  return (
    <>
      <main>
        {/* Page Header */}
        <section className="relative h-64 bg-gray-900">
          <div className="absolute inset-0 bg-opacity-70 bg-gray-900 z-10"></div>
          <Image
            src="/images/properties/properties-header.jpg"
            alt="Properties"
            fill
            priority
            sizes="720px"
            style={{ objectFit: "cover" }}
            className="z-10 opacity-5"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse Properties
            </h1>
            <p className="text-xl max-w-2xl text-center">
              Find your perfect property from our extensive collection
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white py-6 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="mb-4 md:mb-0 w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by keyword..."
                    className="pl-10 pr-4 py-2 w-full md:w-96 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-4 w-full md:w-auto">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors text-gray-700"
                >
                  <FaFilter className="mr-2" />
                  Filters
                </button>

                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-gray-100 hover:bg-gray-200 pl-10 pr-8 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="featured">Featured</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <FaSort className="absolute left-3 top-3 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Expanded Filters */}
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 p-6 rounded-lg mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Listing Type Filter */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Listing Type
                    </label>
                    <div className="flex space-x-2">
                      {["All", "For Sale", "For Rent"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setListingTypeFilter(type)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium flex-1 ${
                            listingTypeFilter === type
                              ? "bg-blue-600 text-white"
                              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Type Filter */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Property Type
                    </label>
                    <div className="relative">
                      <select
                        value={propertyTypeFilter}
                        onChange={(e) => setPropertyTypeFilter(e.target.value)}
                        className="block w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <BiHomeAlt className="absolute left-3 top-3 text-gray-500" />
                    </div>
                  </div>

                  {/* City Filter */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      City
                    </label>
                    <div className="relative">
                      <select
                        value={cityFilter}
                        onChange={(e) => setCityFilter(e.target.value)}
                        className="block w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      <MdLocationCity className="absolute left-3 top-3 text-gray-500" />
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Price Range
                    </label>
                    <div className="relative">
                      <select
                        value={`${priceRangeFilter[0]}-${priceRangeFilter[1]}`}
                        onChange={(e) => {
                          const [min, max] = e.target.value
                            .split("-")
                            .map(Number);
                          setPriceRangeFilter([min, max]);
                        }}
                        className="block w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {priceRanges.map((range) => (
                          <option
                            key={range.label}
                            value={`${range.value[0]}-${range.value[1]}`}
                          >
                            {range.label}
                          </option>
                        ))}
                      </select>
                      <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-500" />
                    </div>
                  </div>

                  {/* Bedrooms Filter */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Bedrooms
                    </label>
                    <div className="flex space-x-2">
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          onClick={() => setBedroomsFilter(num)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium flex-1 ${
                            bedroomsFilter === num
                              ? "bg-blue-600 text-white"
                              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {num === 0 ? "Any" : num === 5 ? "5+" : num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reset Filters Button */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}

            {/* Results Count */}
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-medium">{currentProperties.length}</span>{" "}
                of{" "}
                <span className="font-medium">{filteredProperties.length}</span>{" "}
                properties
              </p>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            {currentProperties.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProperties.map((property) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Property Image */}
                      <div className="relative h-64">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          loading="lazy"
                          sizes={720}
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {property.type === "Sale" ? "For Sale" : "For Rent"}
                        </div>
                        {property.featured && (
                          <div className="absolute top-4 right-12 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Featured
                          </div>
                        )}
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
                          <p className="text-sm line-clamp-1">
                            {property.address}, {property.city}
                          </p>
                        </div>

                        <p className="text-gray-600 line-clamp-2 mb-4">
                          {property.description}
                        </p>

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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <nav
                      className="inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <button
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                          currentPage === 1
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Previous
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => paginate(page)}
                            className={`relative inline-flex items-center px-4 py-2 border ${
                              currentPage === page
                                ? "bg-blue-600 text-white border-blue-600 z-10"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            } text-sm font-medium`}
                          >
                            {page}
                          </button>
                        )
                      )}

                      <button
                        onClick={() =>
                          paginate(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className={`relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                          currentPage === totalPages
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mb-4 text-gray-400">
                  <svg
                    className="mx-auto h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or filters to find more
                  properties.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default PropertiesPage;
