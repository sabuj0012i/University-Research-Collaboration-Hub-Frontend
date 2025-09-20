import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import ManWithLaptop from "../../assets/ManWithLaptop.png";
import CollaborationIllustration from "../../assets/Collaboration.png";
import ResearchIllustration from "../../assets/Research.png";
import AnalyticsIllustration from "../../assets/Analytics.png";

// Login Modal Component
const Login = ({ onClose }) => {
  const navigate = useNavigate();

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (email && password) {
      onClose(); 
      navigate("/"); 
    } else {
      alert("Please fill all fields before login!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 space-y-6 relative"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        {/* Title */}
        <h3 className="text-2xl font-bold text-center text-gray-800">
          User Login
        </h3>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please write your email"
            required
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block p-2.5 
            placeholder-gray-400"
          />
        </div>
        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block p-2.5 
            placeholder-gray-400"
          />
        </div>
        {/* Remember Me */}
        <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Remember me
          </label>
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
          px-5 py-2.5 text-center cursor-pointer"
        >
          Login
        </button>
        {/* Not Registered Option */}
        <p className="text-sm text-center text-gray-600">
          Not registered?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
            onClick={onClose} // close modal on register
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

 
  const blurIfModal = showLogin ? "blur-sm pointer-events-none select-none" : "";

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      {/* Main Content */}
      <div className={blurIfModal}>
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between px-20 py-16 gap-8">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
              University Research Collaboration Hub
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              A centralized platform for academic collaboration across universities.
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300 cursor-pointer shadow-md"
            >
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={ManWithLaptop}
              alt="Man with Laptop"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
        {/* Features Section */}
        <div className="px-12 py-16 bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <img
                src={CollaborationIllustration}
                alt="Collaboration"
                className="w-24 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
                Seamless Collaboration
              </h3>
              <p className="text-gray-600 text-center">
                Connect with researchers across universities and work together in real-time.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <img
                src={ResearchIllustration}
                alt="Research Tools"
                className="w-24 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
                Powerful Research Tools
              </h3>
              <p className="text-gray-600 text-center">
                Access digital libraries, research papers, and project management tools.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <img
                src={AnalyticsIllustration}
                alt="Analytics"
                className="w-24 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
                Research Analytics
              </h3>
              <p className="text-gray-600 text-center">
                Gain insights into your research progress and collaborations.
              </p>
            </div>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="px-12 py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Future of Academic Research
          </h2>
          <p className="text-lg mb-8">
            Be a part of a global community of scholars and innovators.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md cursor-pointer"
          >
            Sign Up Now
          </button>
        </div>
        {/* Trusted Universities Section */}
        <div className="px-12 py-16 bg-gray-50">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Trusted by Top Universities
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 py-6">
            <div className="w-36 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-wide">BRUR</span>
            </div>
            <div className="w-36 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-wide">BUET</span>
            </div>
            <div className="w-36 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-wide">DU</span>
            </div>
            <div className="w-36 h-16 bg-gradient-to-r from-yellow-400 to-red-400 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-wide">NSU</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;