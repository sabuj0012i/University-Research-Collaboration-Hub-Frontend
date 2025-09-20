
import React from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (email && password) {
      navigate("/");  
    } else {
      alert("Please fill all fields before login!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-6"
      >
        {/* Title */}
        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          User Login
        </h3>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Please write your email"
            required
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block p-2.5 
            placeholder-gray-400
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block p-2.5 
            placeholder-gray-400
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
            focus:ring-3 focus:ring-blue-300 
            dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
          px-5 py-2.5 text-center dark:bg-blue-500 
          dark:hover:bg-blue-600 dark:focus:ring-blue-700 cursor-pointer"
        >
          Login
        </button>

        {/* Not Registered Option */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
