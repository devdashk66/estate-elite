"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiBuildingHouse } from "react-icons/bi";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaTag,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PropertyDetails() {
  const pathname = usePathname();
  const path = pathname.replace("/properties/prop", "/properties/property");

  // This would typically come from your API
  const property = {
    id: "prop1",
    title: "Modern Luxury Villa",
    price: 1250000,
    address: "123 Skyline Drive",
    city: "Beverly Hills",
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    image: `/images${path}.jpg`,
    featured: true,
    type: "Sale",
    propertyType: "Villa",
    description:
      "Stunning modern villa with panoramic views, infinity pool, and smart home technology.",
  };

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          sizes="1080px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Property Title Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="container mx-auto">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {property.title}
            </motion.h1>
            <motion.div
              className="flex items-center text-white/90 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <FaMapMarkerAlt className="mr-2" />
              <span>
                {property.address}, {property.city}
              </span>
            </motion.div>
            <motion.div
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {formattedPrice}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Property Details */}
          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Status and Type */}
            <motion.div className="flex flex-wrap gap-3 mb-8" variants={fadeIn}>
              {property.featured && (
                <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <FaTag className="mr-2" /> {property.type}
              </span>
              <span className="bg-muted text-muted-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <BiBuildingHouse className="mr-2" /> {property.propertyType}
              </span>
            </motion.div>

            {/* Property Features */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10 p-6 bg-white rounded-xl shadow-sm"
              variants={fadeIn}
            >
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <FaBed className="text-2xl text-primary mb-2" />
                <span className="text-lg font-semibold">
                  {property.bedrooms}
                </span>
                <span className="text-sm text-muted-foreground">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <FaBath className="text-2xl text-primary mb-2" />
                <span className="text-lg font-semibold">
                  {property.bathrooms}
                </span>
                <span className="text-sm text-muted-foreground">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <FaRulerCombined className="text-2xl text-primary mb-2" />
                <span className="text-lg font-semibold">{property.area}</span>
                <span className="text-sm text-muted-foreground">Sq Ft</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div className="mb-10 text-black" variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>

                {/* Additional description content - in a real app, this would come from the API */}
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This exquisite modern villa offers the perfect blend of luxury
                  and comfort. Nestled in the prestigious Beverly Hills
                  neighborhood, this property boasts breathtaking panoramic
                  views that can be enjoyed from multiple vantage points
                  throughout the home.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The property features an infinity pool that seems to merge
                  with the horizon, creating a stunning visual effect. The smart
                  home technology integrated throughout allows for seamless
                  control of lighting, climate, security, and entertainment
                  systems.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The interior showcases high-end finishes, including marble
                  countertops, hardwood floors, and floor-to-ceiling windows
                  that flood the space with natural light. The open-concept
                  layout creates a flowing space perfect for both everyday
                  living and entertaining.
                </p>
              </div>
            </motion.div>

            {/* Property Features */}
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4">Features & Amenities</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Infinity Pool
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Smart Home Technology
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Panoramic Views
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Gourmet Kitchen
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Home Theater
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Wine Cellar
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Fitness Center
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    Outdoor Kitchen
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact and Map */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Contact Agent Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8 sticky top-8">
              <h3 className="text-xl font-bold mb-4">
                Interested in this property?
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    defaultValue="I'm interested in this property and would like more information."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Agent
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
