import React from "react";

import "./css/Results.css";
import { Link } from "react-router-dom";

function Results() {
    return (
        <div id="webcrumbs">
            <div className="w-[100vw] font-sans bg-slate-100 mx-auto">
                <header className="bg-blue-900 text-white p-6 rounded-b-lg shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h1 className="text-2xl font-bold mb-4 md:mb-0">VehicleRental</h1>
                        <div className="flex items-center space-x-4"></div>
                    </div>

                    <div className="mt-8 bg-blue-800 rounded-lg p-5">
                        <h2 className="text-xl font-semibold mb-3">
                            Results for: <span className="text-blue-300">New York | 24 Jun - 28 Jun | SUV</span>
                        </h2>
                        {/* Next: "Add date range picker component" */}
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Toyota RAV4"
                                className="h-48 w-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                                Available
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">Toyota RAV4</h3>
                                <div className="flex">
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-gray-300">star</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600">
                                <span className="material-symbols-outlined mr-1">location_on</span>
                                <span>New York, Manhattan</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <span className="text-2xl font-bold text-blue-900">$89</span>
                                    <span className="text-gray-600">/day</span>
                                </div>
                                <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center">
                                    <span className="material-symbols-outlined mr-1">directions_car</span>
                                    Rent Now
                                </button>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-2 text-sm"></div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Honda CR-V"
                                className="h-48 w-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                                Available
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">Honda CR-V</h3>
                                <div className="flex">
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600">
                                <span className="material-symbols-outlined mr-1">location_on</span>
                                <span>New York, Brooklyn</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <span className="text-2xl font-bold text-blue-900">$94</span>
                                    <span className="text-gray-600">/day</span>
                                </div>
                                <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center">
                                    <span className="material-symbols-outlined mr-1">directions_car</span>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Jeep Cherokee"
                                className="h-48 w-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                                Booked
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">Jeep Cherokee</h3>
                                <div className="flex">
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-gray-300">star</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600">
                                <span className="material-symbols-outlined mr-1">location_on</span>
                                <span>New York, Queens</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <span className="text-2xl font-bold text-blue-900">$112</span>
                                    <span className="text-gray-600">/day</span>
                                </div>
                                <button className="bg-gray-400 cursor-not-allowed text-white px-4 py-2 rounded-lg flex items-center">
                                    <span className="material-symbols-outlined mr-1">directions_car</span>
                                    Unavailable
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Ford Explorer"
                                className="h-48 w-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                                Available
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">Ford Explorer</h3>
                                <div className="flex">
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-gray-300">star</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600">
                                <span className="material-symbols-outlined mr-1">location_on</span>
                                <span>New York, Bronx</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <span className="text-2xl font-bold text-blue-900">$105</span>
                                    <span className="text-gray-600">/day</span>
                                </div>
                                <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center">
                                    <span className="material-symbols-outlined mr-1">directions_car</span>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Nissan Rogue"
                                className="h-48 w-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                                Available
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">Nissan Rogue</h3>
                                <div className="flex">
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600">
                                <span className="material-symbols-outlined mr-1">location_on</span>
                                <span>New York, Manhattan</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <span className="text-2xl font-bold text-blue-900">$87</span>
                                    <span className="text-gray-600">/day</span>
                                </div>
                                <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center">
                                    <span className="material-symbols-outlined mr-1">directions_car</span>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Mazda CX-5"
                                className="h-48 w-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                                Available
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold">Mazda CX-5</h3>
                                <div className="flex">
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-yellow-500">star</span>
                                    <span className="material-symbols-outlined text-gray-300">star</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600">
                                <span className="material-symbols-outlined mr-1">location_on</span>
                                <span>New York, Brooklyn</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <span className="text-2xl font-bold text-blue-900">$92</span>
                                    <span className="text-gray-600">/day</span>
                                </div>
                                <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center">
                                    <span className="material-symbols-outlined mr-1">directions_car</span>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 mb-8">
                    <nav className="flex items-center space-x-2">
                        <button className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                            1
                        </button>
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">2</button>
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">3</button>
                        <button className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </nav>
                </div>
                {/* Next: "Add footer with company information and quick links" */}
            </div>
        </div>)
}

export default Results;