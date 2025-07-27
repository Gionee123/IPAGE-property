import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { usePropertyContext } from "../context/PropertyContext";

export default function AddPropertyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    propertyName: "Plot",
    type: "Plot",
    price: "$20,000",
    location: "",
  });

  const { addProperty } = usePropertyContext();

  const propertyTypes = [
    "Plot",
    "Shed",
    "Retail Store",
    "Plott Store",
    "Jalpur",
    "Municai",
    "Kolkata",
    "Jaiper",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Add the new property using context
    addProperty(formData);

    // Close modal and reset form
    onClose();
    setFormData({
      propertyName: "Plot",
      type: "Plot",
      price: "$20,000",
      location: "",
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-black dark:text-white">
            Add Property
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-700 dark:hover:text-gray-200"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Property Name Field */}
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Property Name
            </label>
            <input
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter property name"
            />
          </div>

          {/* Type Field */}
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Type
            </label>
            <div className="relative">
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 pr-8 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Price Field */}
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Price:
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter price"
            />
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter location"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
