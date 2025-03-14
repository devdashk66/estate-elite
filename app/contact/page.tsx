"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      setFormStatus("sending");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setFormStatus("success");

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | EstateElite</title>
        <meta
          name="description"
          content="Get in touch with our team of real estate experts. We&#39;re here to help you find your dream property or sell your current one."
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              We&#39;re here to help you with all your real estate needs
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select an option</option>
                        <option value="buying">Buying a Property</option>
                        <option value="selling">Selling a Property</option>
                        <option value="renting">Renting</option>
                        <option value="investment">
                          Investment Opportunities
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  {formStatus === "success" && (
                    <p className="mt-4 text-green-600 text-center">
                      Thank you! Your message has been sent successfully.
                    </p>
                  )}

                  {formStatus === "error" && (
                    <p className="mt-4 text-red-600 text-center">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">Our Office</p>
                        <p className="text-gray-600">
                          123 Real Estate Avenue, Suite 456
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaPhone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">Phone</p>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaEnvelope className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">Email</p>
                        <p className="text-gray-600">info@estateelite.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaClock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">
                          Business Hours
                        </p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-gray-700 font-medium mb-3">Follow Us</p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <FaFacebook className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <FaTwitter className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-pink-600 transition-colors"
                      >
                        <FaInstagram className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-800 transition-colors"
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Map (placeholder) */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-64 relative">
                  <Image
                    src="/images/map-placeholder.jpg"
                    alt="Office location map"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <p className="text-white text-center px-4">
                      Interactive map would be integrated here.
                      <br />
                      For implementation, use Google Maps API or similar
                      service.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Got questions? We&#39;ve got answers. If you don&#39;t see what
                you&#39;re looking for, feel free to contact us.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I schedule a property viewing?",
                  answer:
                    "You can schedule a property viewing by contacting us directly via phone or email, or by filling out the contact form on this page. One of our agents will get back to you promptly to arrange a convenient time.",
                },
                {
                  question: "What documents do I need when buying a property?",
                  answer:
                    "When buying a property, you&#39;ll typically need identification documents, proof of income, bank statements, tax returns, and documentation of other assets. Our agents can provide a comprehensive list based on your specific situation.",
                },
                {
                  question: "How long does the buying process take?",
                  answer:
                    "The buying process typically takes 30-60 days from offer acceptance to closing, but this can vary based on financing, inspections, appraisals, and other factors. Our team will guide you through each step of the process.",
                },
                {
                  question: "Do you offer virtual tours?",
                  answer:
                    "Yes, we offer virtual tours for many of our properties. You can request a virtual tour by contacting us or checking the property listing for virtual tour availability.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
