"use client";
// pages/signup.tsx
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Signup successful!");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up | EstateElite</title>
        <meta
          name="description"
          content="Create an EstateElite account to start your journey."
        />
      </Head>

      <div className="min-h-screen flex">
        <div className="hidden lg:block lg:w-1/2 bg-blue-600 relative overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury real estate"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-800/80 opacity-80"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 max-w-md text-center">
              Join EstateElite Today
            </h2>
            <p className="text-lg max-w-md text-center mb-8">
              Sign up now and start your journey towards finding your dream
              home.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12 lg:p-20">
          <div className="w-full max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-100 mb-2">
                Create an account
              </h2>
              <p className="text-gray-300 mb-8">
                Join us and start your journey today!
              </p>

              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-gray-200 font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-gray-200 font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-gray-200 font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400" />
                      ) : (
                        <FaEye className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-gray-200 font-medium mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {isLoading ? "Signing up..." : "Sign Up"}
                </button>
              </form>

              <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
