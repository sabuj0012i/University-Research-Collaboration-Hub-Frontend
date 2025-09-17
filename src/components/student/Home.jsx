
import React from "react";
import { useNavigate } from "react-router-dom";


import ManWithLaptop from "../../assets/ManWithLaptop.png";


import CollaborationIllustration from "../../assets/Collaboration.png";
import ResearchIllustration from "../../assets/Research.png";
import AnalyticsIllustration from "../../assets/Analytics.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
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
            onClick={() => navigate("/login")}
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
        <div className="flex flex-wrap items-center justify-center gap-12">
          {/* Placeholder logos - এগুলো আপনি নিজের লোগো বসাতে পারবেন */}
          <div className="w-32 h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-32 h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-32 h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-32 h-12 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
