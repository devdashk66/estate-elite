"use client";
// pages/login.tsx
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaApple,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaLock,
} from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Reset error state
    setError("");
    setIsLoading(true);

    // Simulate login API call
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Handle successful login
      console.log("Login successful!");
      // Redirect to dashboard or home page
      // Router.push('/dashboard');
    } catch (err) {
      // Handle login failure
      setError("Invalid email or password");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login | EstateElite</title>
        <meta
          name="description"
          content="Login to your EstateElite account to manage your property journey."
        />
      </Head>

      <div className="min-h-screen flex">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12 lg:p-20">
          <div className="w-full max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-100 mb-2">
                Welcome back
              </h2>
              <p className="text-gray-300 mb-8">
                Please sign in to access your account
              </p>

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4">
                    {error}
                  </div>
                )}

                {/* Email Field */}
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-5">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block text-gray-200 font-medium"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                      ) : (
                        <FaEye className="text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center mb-6">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                    isLoading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink px-3 text-gray-500 text-sm">
                  or continue with
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaGoogle className="text-red-500" />
                </button>
                <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaFacebook className="text-blue-600" />
                </button>
                <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaApple className="text-gray-800" />
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600">
                Don&#39;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign up
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-blue-600 relative overflow-hidden">
          <Image
            src="/images/hero-bg.jpg" // Add a luxury interior or property image
            alt="Luxury real estate"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-800/80 opacity-80"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-white">
            <h2 className="text-3xl font-bold mb-6 max-w-md text-center">
              Find Your Dream Home with EstateElite
            </h2>
            <p className="text-lg max-w-md text-center mb-8">
              Access exclusive listings, save your favorites, and connect with
              top agents to find the perfect property.
            </p>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-white opacity-50"
                  style={{ opacity: i === 1 ? 1 : 0.5 }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
