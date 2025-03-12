"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  phone: string;
  email: string;
  bio: string;
  propertiesSold: number;
  experience: number;
  specializations: string[];
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

const AgentProfiles = () => {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  // Mock data - replace with your actual agents
  const agents: Agent[] = [
    {
      id: "agent1",
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      image: "/images/testimonial/testimonial1.jpg",
      phone: "(555) 123-4567",
      email: "sarah.johnson@estateemail.com",
      bio: "With over 10 years of experience in luxury real estate, Sarah specializes in high-end properties in metropolitan areas. Her attention to detail and negotiation skills have earned her numerous industry awards.",
      propertiesSold: 147,
      experience: 10,
      specializations: [
        "Luxury Homes",
        "Waterfront Properties",
        "Investment Properties",
      ],
      socialMedia: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        instagram: "https://instagram.com/sarahjohnsonrealty",
        facebook: "https://facebook.com/sarahjohnsonrealty",
      },
    },
    {
      id: "agent2",
      name: "Michael Rodriguez",
      title: "Commercial Property Specialist",
      image: "/images/testimonial/testimonial2.jpg",
      phone: "(555) 234-5678",
      email: "michael.rodriguez@estateemail.com",
      bio: "Michael brings 15 years of commercial real estate expertise to the table. His background in urban planning gives him unique insights into property valuation and development potential.",
      propertiesSold: 89,
      experience: 15,
      specializations: [
        "Commercial Real Estate",
        "Office Spaces",
        "Retail Properties",
      ],
      socialMedia: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        instagram: "https://instagram.com/michaelrodriguezrealty",
      },
    },
    {
      id: "agent3",
      name: "Emma Chen",
      title: "Residential Sales Expert",
      image: "/images/testimonial/testimonial3.jpg",
      phone: "(555) 345-6789",
      email: "emma.chen@estateemail.com",
      bio: "Emma has a proven track record of helping first-time homebuyers navigate the real estate market. Her client-centered approach focuses on understanding each family' unique needs and finding their perfect home.",
      propertiesSold: 112,
      experience: 7,
      specializations: [
        "Residential Homes",
        "First-Time Buyers",
        "Family Properties",
      ],
      socialMedia: {
        linkedin: "https://linkedin.com/in/emmachen",
        facebook: "https://facebook.com/emmachenrealty",
        instagram: "https://instagram.com/emmachenrealty",
      },
    },
    {
      id: "agent4",
      name: "David Williams",
      title: "Luxury Estate Agent",
      image: "/images/testimonial/testimonial4.jpg",
      phone: "(555) 456-7890",
      email: "david.williams@estateemail.com",
      bio: "David specializes in exclusive properties and has cultivated a network of high-net-worth clients. His discretion and thorough knowledge of luxury markets make him the go-to agent for discerning buyers.",
      propertiesSold: 75,
      experience: 12,
      specializations: ["Luxury Estates", "Private Sales", "Celebrity Homes"],
      socialMedia: {
        linkedin: "https://linkedin.com/in/davidwilliams",
        instagram: "https://instagram.com/davidwilliamsrealty",
      },
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
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our team of experienced real estate professionals is dedicated to
            helping you find the perfect property or sell your home for the best
            possible price.
          </motion.p>
        </div>

        {/* Agents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              variants={itemVariants}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                activeAgent === agent.id
                  ? "scale-105 ring-2 ring-blue-500"
                  : "hover:scale-103"
              }`}
              onClick={() =>
                setActiveAgent(activeAgent === agent.id ? null : agent.id)
              }
            >
              {/* Agent Image */}
              <div className="relative h-80">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500"
                />
              </div>

              {/* Agent Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {agent.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{agent.title}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <FaPhone className="mr-3 text-gray-400" size={14} />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaEnvelope className="mr-3 text-gray-400" size={14} />
                    <span className="truncate">{agent.email}</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4 mb-4">
                  {agent.socialMedia.linkedin && (
                    <a
                      href={agent.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {agent.socialMedia.instagram && (
                    <a
                      href={agent.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <FaInstagram size={18} />
                    </a>
                  )}
                  {agent.socialMedia.facebook && (
                    <a
                      href={agent.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaFacebook size={18} />
                    </a>
                  )}
                </div>

                {/* Agent Bio - Expandable */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAgent === agent.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 mb-4">{agent.bio}</p>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <p className="text-xl font-bold text-blue-600">
                        {agent.propertiesSold}
                      </p>
                      <p className="text-xs text-gray-500">Properties Sold</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <p className="text-xl font-bold text-blue-600">
                        {agent.experience}
                      </p>
                      <p className="text-xs text-gray-500">Years Exp.</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <p className="text-xl font-bold text-blue-600">
                        4.9<span className="text-sm">/5</span>
                      </p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Specializations:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agent.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Prompt */}
                <div className="mt-4 text-center text-blue-600 text-sm cursor-pointer">
                  {activeAgent === agent.id ? "Show less" : "Show more"}
                </div>
              </div>

              {/* Contact Button */}
              <div className="px-6 pb-6">
                <Link
                  href={`/agents/${agent.id}`}
                  className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Contact {agent.name.split(" ")[0]}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Agents Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/agents"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
          >
            View All Agents
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

export default AgentProfiles;
