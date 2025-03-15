"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaBath,
  FaBed,
  FaCalendarAlt,
  FaCar,
  FaHeart,
  FaMapMarkerAlt,
  FaRuler,
  FaShare,
} from "react-icons/fa";

// Create TypeScript interface for Property
interface Property {
  id: string;
  title: string;
  price: number;
  type: "Sale" | "Rent";
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt: number;
  description: string;
  features: string[];
  amenities: string[];
  parkingSpaces: number;
  mainImage: string;
  images: string[];
  agent: {
    id: string;
    name: string;
    photo: string;
    phone: string;
    email: string;
  };
}

const PropertyPage = () => {
  const router = useRouter();

  console.log(router);
  // This would normally be fetched from an API based on the ID
  // For now, using mock data
  const property: Property = {
    id: "123456",
    title: "Modern Luxury Villa with Ocean View",
    price: 1850000,
    type: "Sale",
    address: {
      street: "123 Coastal Drive",
      city: "Malibu",
      state: "CA",
      zip: "90265",
    },
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    yearBuilt: 2022,
    description: `This stunning modern villa offers breathtaking ocean views and luxurious living spaces designed for both comfort and elegance. Featuring an open concept layout, the home seamlessly blends indoor and outdoor living with floor-to-ceiling glass doors that open to an expansive terrace with infinity pool.

The gourmet kitchen comes equipped with high-end appliances, custom cabinetry, and a large island perfect for entertaining. The spacious primary suite includes a private balcony, walk-in closet, and a spa-like bathroom with dual vanities and a freestanding tub.

Additional features include smart home technology throughout, a home office, media room, and a 2-car garage with electric vehicle charging stations. Located in a prestigious neighborhood just minutes from beaches, fine dining, and shopping.`,
    features: [
      "Open Floor Plan",
      "Floor-to-Ceiling Windows",
      "Smart Home Technology",
      "Home Office",
      "Media Room",
      "Gourmet Kitchen",
      "Walk-in Closets",
      "Hardwood Floors",
    ],
    amenities: [
      "Infinity Pool",
      "Outdoor Kitchen",
      "Fire Pit",
      "Ocean View",
      "Terrace",
      "EV Charging Station",
      "Security System",
      "Wine Cellar",
    ],
    parkingSpaces: 2,
    mainImage: "/images/properties/property1.jpg",
    images: [
      "/images/properties/property2.jpg",
      "/images/properties/property3.jpg",
      "/images/properties/property4.jpg",
      "/images/properties/property5.jpg",
    ],
    agent: {
      id: "agent1",
      name: "Sarah Johnson",
      photo: "/images/testimonial/testimonial1.jpg",
      phone: "(555) 123-4567",
      email: "sarah.johnson@example.com",
    },
    virtualTour: "https://example.com/tour",
    floorPlan: "/images/floorplan.jpg",
  };

  const [selectedImage, setSelectedImage] = useState(property.mainImage);
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number, type: "Sale" | "Rent") => {
    return (
      price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }) + (type === "Rent" ? "/mo" : "")
    );
  };

  if (router.isFallback) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{property.title} | EstateElite</title>
        <meta
          name="description"
          content={`${property.bedrooms} bed, ${property.bathrooms} bath, ${
            property.squareFeet
          } sq ft property for ${property.type.toLowerCase()} in ${
            property.address.city
          }, ${property.address.state}`}
        />
      </Head>

      <main>
        {/* Property Header */}
        <section className="bg-gray-900 py-6 border-b pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-100">
                  {property.title}
                </h1>
                <p className="flex items-center text-gray-100 mt-1">
                  <FaMapMarkerAlt className="mr-1" />
                  {property.address.street}, {property.address.city},{" "}
                  {property.address.state} {property.address.zip}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatPrice(property.price, property.type)}
                </div>
                <div className="inline-flex text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  For {property.type}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Gallery */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Main Image Display */}
              <div className="lg:col-span-8">
                <div className="relative rounded-xl overflow-hidden h-96 md:h-[500px] bg-gray-100">
                  <Image
                    src={selectedImage}
                    alt={property.title}
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <FaHeart
                        className={
                          isFavorite ? "text-red-500" : "text-gray-400"
                        }
                        size={18}
                      />
                    </button>
                    <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <FaShare className="text-gray-700" size={18} />
                    </button>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {[property.mainImage, ...property.images]
                    .slice(0, 5)
                    .map((image, index) => (
                      <div
                        key={index}
                        className={`relative rounded-lg overflow-hidden cursor-pointer h-20 ${
                          selectedImage === image ? "ring-2 ring-blue-500" : ""
                        }`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image}
                          alt={`Property image ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Property Summary & Contact */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Property Details
                  </h2>
                  <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex items-center">
                      <FaBed className="text-blue-500 mr-2" size={18} />
                      <span className="text-gray-600">
                        {property.bedrooms} Bedrooms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-blue-500 mr-2" size={18} />
                      <span className="text-gray-600">
                        {property.bathrooms} Bathrooms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaRuler className="text-blue-500 mr-2" size={18} />
                      <span className="text-gray-600">
                        {property.squareFeet.toLocaleString()} sq ft
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaCar className="text-blue-500 mr-2" size={18} />
                      <span className="text-gray-600">
                        {property.parkingSpaces} Parking
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-blue-500 mr-2" size={18} />
                      <span className="text-gray-600">
                        Built in {property.yearBuilt}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaRuler className="text-blue-500 mr-2" size={18} />
                      <span className="text-gray-600">
                        Lot Size: 0.25 acres
                      </span>
                    </div>
                  </div>

                  <hr className="my-6" />

                  {/* Agent Contact Card */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      Listed By
                    </h2>
                    <div className="flex items-center mb-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={property.agent.photo}
                          alt={property.agent.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {property.agent.name}
                        </h3>
                        <Link
                          href={`/agents/${property.agent.id}`}
                          className="text-blue-600 text-sm hover:underline"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a
                        href={`tel:${property.agent.phone}`}
                        className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition-colors"
                      >
                        Call Agent
                      </a>
                      <a
                        href={`mailto:${property.agent.email}?subject=Inquiry about ${property.title}`}
                        className="block w-full py-3 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg text-center transition-colors"
                      >
                        Email Agent
                      </a>
                      <button className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-center transition-colors">
                        Schedule Viewing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PropertyPage;
