import React from "react";

import "./css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="webcrumbs">
      <div className="vw-[100] bg-white">

        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white shadow-lg">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-3xl transform hover:scale-110 transition-transform">
                directions_car
              </span>
              <h1 className="text-2xl font-bold">RentCar</h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">Services</a>
              <a href="#" className="hover:text-blue-600">About Us</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
              <Link to='/register'><button className="bg-blue-600 text-white px-8 py-2 hover:bg-blue-700 transition-colors rounded-full">
                Login
              </button></Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative flex flex-col items-center justify-center h-full text-white p-8">
            <h2 className="text-5xl font-bold mb-6">Find Your Perfect Ride Anytime, Anywhere</h2>
            <div className="bg-white rounded-lg p-4 w-full max-w-3xl flex items-center space-x-4">
              <input type="text" placeholder="Location" className="flex-1 p-2 rounded border text-black" />
              <input type="date" className="p-2 rounded border text-black" />
              <select className="p-2 rounded border text-black">
                <option>Any Car</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Luxury</option>
              </select>
              <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Car Categories Section */}
        <section className="py-16 px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Car Categories</h3>
          <div className="grid grid-cols-4 gap-8">
            {["SUV", "Sedan", "Electric", "Luxury"].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{category}</h4>
                  <p className="text-gray-600">Experience the best in {category.toLowerCase()} vehicles</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16 px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-4 gap-8">
            {["Affordable Pricing", "Flexible Duration", "24/7 Support", "User Reviews"].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <span className="material-symbols-outlined text-4xl mb-4">verified</span>
                <h4 className="text-xl font-bold mb-2">{feature}</h4>
                <p className="text-gray-600">We provide the best service in the industry</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 px-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h3>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">John Doe</h4>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <span key={i} className="material-symbols-outlined">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">Amazing service! The car was in perfect condition and the rental process was smooth.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
            <form className="flex flex-col space-y-6">
              <div className="mb-3">
                <label className="font-bold block mb-2">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-3">
                <label className="font-bold block mb-2">Your Email</label>
                <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-3">
                <label className="font-bold block mb-2">Your Query</label>
                <textarea placeholder="Enter your query" className="w-full p-2 border rounded h-32"></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-25">
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-blue-400">Home</a>
                <a href="#" className="hover:text-blue-400">Services</a>
                <a href="#" className="hover:text-blue-400">About Us</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <i className="fa-brands fa-facebook text-2xl hover:text-blue-400 transition-colors"></i>
                <i className="fa-brands fa-twitter text-2xl hover:text-blue-400 transition-colors"></i>
                <i className="fa-brands fa-instagram text-2xl hover:text-pink-400 transition-colors"></i>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© 2024 RentCar. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
