"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";

// Define interfaces for TypeScript
interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

interface Agent {
  id: string;
  name: string;
  title: string;
  photo: string;
  email: string;
  phone: string;
  bio: string;
  specialty: string[];
  experience: number;
  listings: number;
  reviews: number;
  rating: number;
  social: SocialLinks;
}

const AgentsPage = () => {
  const agents: Agent[] = [
    {
      id: "agent1",
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      photo: "/images/testimonial/testimonial1.jpg",
      email: "sarah.johnson@example.com",
      phone: "(555) 123-4567",
      bio: "Sarah specializes in luxury properties with over 10 years of experience in the real estate market. Her attention to detail and negotiation skills have helped hundreds of clients find their dream homes.",
      specialty: ["Luxury Homes", "Waterfront", "Investment Properties"],
      experience: 10,
      listings: 42,
      reviews: 87,
      rating: 4.9,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "agent2",
      name: "David Martinez",
      title: "Commercial Property Specialist",
      photo: "/images/testimonial/testimonial2.jpg",
      email: "david.martinez@example.com",
      phone: "(555) 234-5678",
      bio: "David has been helping businesses find the perfect commercial spaces for over 8 years. His background in business administration gives him unique insights into what companies need from their properties.",
      specialty: ["Commercial", "Office Space", "Retail Properties"],
      experience: 8,
      listings: 35,
      reviews: 56,
      rating: 4.7,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "agent3",
      name: "Jennifer Lee",
      title: "First-Time Homebuyer Specialist",
      photo: "/images/testimonial/testimonial3.jpg",
      email: "jennifer.lee@example.com",
      phone: "(555) 345-6789",
      bio: "Jennifer is passionate about helping first-time homebuyers navigate the complex process of purchasing their first property. Her patient approach and educational background make her perfect for guiding new buyers.",
      specialty: ["First-Time Buyers", "Suburban Homes", "Condominiums"],
      experience: 5,
      listings: 28,
      reviews: 42,
      rating: 4.8,
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "agent4",
      name: "Michael Wilson",
      title: "Luxury Estate Specialist",
      photo: "/images/testimonial/testimonial4.jpg",
      email: "michael.wilson@example.com",
      phone: "(555) 456-7890",
      bio: "Michael has built a reputation for excellence in the luxury real estate market. His clientele includes high-net-worth individuals and celebrities who value his discretion and extensive network.",
      specialty: ["Celebrity Homes", "Luxury Estates", "Private Sales"],
      experience: 12,
      listings: 18,
      reviews: 31,
      rating: 4.9,
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "agent5",
      name: "Alexandra Chen",
      title: "International Property Consultant",
      photo: "/images/testimonial/testimonial1.jpg",
      email: "alexandra.chen@example.com",
      phone: "(555) 567-8901",
      bio: "Alexandra specializes in helping international clients purchase properties in the US. Her multilingual skills and understanding of global real estate markets make her invaluable for overseas investors.",
      specialty: [
        "International Clients",
        "Investment Properties",
        "Luxury Condos",
      ],
      experience: 7,
      listings: 31,
      reviews: 48,
      rating: 4.6,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "agent6",
      name: "Robert Taylor",
      title: "Residential Sales Manager",
      photo: "/images/testimonial/testimonial2.jpg",
      email: "robert.taylor@example.com",
      phone: "(555) 678-9012",
      bio: "Robert leads our residential sales team with over 15 years in the industry. His extensive knowledge of the local market and commitment to client satisfaction have made him one of our top-performing agents.",
      specialty: ["Residential Homes", "Family Properties", "Urban Living"],
      experience: 15,
      listings: 53,
      reviews: 92,
      rating: 4.8,
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  // Get all unique specialties from agents
  const allSpecialties = Array.from(
    new Set(agents.flatMap((agent) => agent.specialty))
  );

  // Filter agents based on search term and selected specialty
  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      searchTerm === "" ||
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.specialty.some((s) =>
        s.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesSpecialty =
      selectedSpecialty === "" || agent.specialty.includes(selectedSpecialty);

    return matchesSearch && matchesSpecialty;
  });

  // Animation variants
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
    <>
      <Head>
        <title>Our Expert Agents | EstateElite</title>
        <meta
          name="description"
          content="Meet our team of expert real estate agents at EstateElite. Find the perfect agent to help you buy, sell, or rent your property."
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative  text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-950 opacity-80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Meet Our Expert Agents
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Our team of dedicated professionals is ready to help you find your
              dream property
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="w-full md:w-1/3 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search agents by name or specialty..."
                  className="pl-10 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Specialty Filter */}
              <div className="w-full md:w-1/3">
                <select
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  <option value="">All Specialties</option>
                  {allSpecialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="w-full md:w-1/3 text-right text-gray-600">
                Found {filteredAgents.length} agent
                {filteredAgents.length !== 1 ? "s" : ""}
              </div>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredAgents.map((agent) => (
                <motion.div
                  key={agent.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Agent Photo */}
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={agent.photo}
                      alt={agent.name}
                      sizes={720}
                      priority
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Agent Info */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {agent.name}
                    </h2>
                    <p className="text-blue-600 mb-3">{agent.title}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        <svg
                          className="w-4 h-4 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="font-bold text-gray-800">
                          {agent.rating}
                        </span>
                        <span className="text-gray-500 ml-1">
                          ({agent.reviews})
                        </span>
                      </div>
                      <div className="text-gray-600">
                        {agent.experience} years exp.
                      </div>
                    </div>

                    <p className="text-gray-600 mb-5 line-clamp-3">
                      {agent.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Specialties:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialty.map((spec, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <a
                        href={`tel:${agent.phone}`}
                        className="flex items-center text-gray-700 hover:text-blue-600"
                      >
                        <FaPhone className="mr-2" size={14} />
                        <span className="truncate">{agent.phone}</span>
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center text-gray-700 hover:text-blue-600"
                      >
                        <FaEnvelope className="mr-2" size={14} />
                        <span className="truncate">{agent.email}</span>
                      </a>
                    </div>

                    {/* Social Media */}
                    <div className="flex space-x-3">
                      {agent.social.facebook && (
                        <a
                          href={agent.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600"
                        >
                          <FaFacebook size={20} />
                        </a>
                      )}
                      {agent.social.twitter && (
                        <a
                          href={agent.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <FaTwitter size={20} />
                        </a>
                      )}
                      {agent.social.instagram && (
                        <a
                          href={agent.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-pink-600"
                        >
                          <FaInstagram size={20} />
                        </a>
                      )}
                      {agent.social.linkedin && (
                        <a
                          href={agent.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-700"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <div className="px-6 pb-6">
                    <Link
                      href={`/agents/${agent.id}`}
                      className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      View Full Profile
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results Message */}
            {filteredAgents.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No agents found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Join Our Team of Agents
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Are you a passionate real estate professional looking to
                    take your career to the next level? We&#39;re always looking
                    for talented individuals to join our team.
                  </p>
                  <ul className="space-y-2 mb-8 text-gray-700">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Competitive commission structure
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Advanced marketing tools and resources
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Ongoing professional development
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Supportive and collaborative environment
                    </li>
                  </ul>
                  <Link
                    href="/careers"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Learn More About Careers
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="hidden md:block relative">
                  <div className="absolute inset-0 bg-blue-600">
                    <Image
                      src="/images/hero-bg.jpg"
                      alt="Team meeting"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        opacity: 0.85,
                      }}
                    />
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

export default AgentsPage;
