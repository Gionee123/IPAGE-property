import React from "react";
import { IoClose } from "react-icons/io5";

export default function PropertyDetails({ propertyData, isOpen, onClose }) {
  if (!isOpen || !propertyData) {
    return null;
  }

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            View Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 transition-colors hover:text-gray-700 dark:hover:text-gray-200"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Image and Description */}
          <div className="p-6 lg:w-1/2">
            <div className="mb-4">
              <img
                src={propertyData.image}
                alt="Property"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              {propertyData.description}
            </p>
          </div>

          {/* Right Section - Property Details */}
          <div className="p-6 border-l border-gray-200 dark:border-gray-700 lg:w-1/2">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-white">
                  {propertyData.type}
                </h3>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Location:
                  </span>{" "}
                  {propertyData.location}
                </p>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Price:
                  </span>{" "}
                  {propertyData.price}
                </p>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white">
                    Description:
                  </span>
                </p>
                <p className="mt-1 leading-relaxed text-gray-700 dark:text-gray-300">
                  {propertyData.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer - Submit Button */}
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
          <button className="px-6 py-2 font-medium text-white bg-blue-600 rounded-md transition-colors hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
