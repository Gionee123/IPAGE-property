import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { IoChevronDown } from "react-icons/io5";
import PropertyDetails from "./propertydetails";
import AddPropertyModal from "./AddPropertyModal";
import { usePropertyContext } from "../context/PropertyContext";

export default function Home() {
  const {
    filteredProperties,
    filterType,
    setFilterType,
    selectedProperty,
    isModalOpen,
    isAddPropertyModalOpen,
    handleViewProperty,
    closeModal,
    openAddPropertyModal,
    closeAddPropertyModal,
  } = usePropertyContext();

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      {/* Dashboard Header */}
      <div className="container px-4 py-6 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Mini Property Listing Dashboard
          </h1>
          <button
            className="px-6 py-2 font-medium text-white bg-blue-600 rounded-lg shadow-sm transition-colors hover:bg-blue-700"
            onClick={openAddPropertyModal}
          >
            Add Property
          </button>
        </div>

        {/* Property Listings Section */}
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
            Property Listings
          </h2>

          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filter by Type:
            </label>
            <div className="relative">
              <select
                value={filterType}
                onChange={handleFilterChange}
                className="px-3 py-2 pr-8 text-sm text-gray-900 bg-white rounded-md border border-gray-300 appearance-none dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              >
                <option value="All">All Types</option>
                <option value="Plot">Plot</option>
                <option value="Shed">Shed</option>
                <option value="Retail Store">Retail Store</option>
                <option value="Plott Store">Plott Store</option>
                <option value="Jalpur">Jalpur</option>
                <option value="Municai">Municai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Jaiper">Jaiper</option>
              </select>
              <IoChevronDown className="absolute right-2 top-1/2 w-4 h-4 text-gray-400 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <h3 className="mb-1 text-lg font-bold text-black dark:text-white">
                {property.type}
              </h3>
              <p className="mb-2 text-sm text-black dark:text-gray-300">
                {property.location}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {property.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-black dark:text-white">
                  {property.price}
                </span>
                <button
                  className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  onClick={() => handleViewProperty(property)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show message when no properties match filter */}
        {filteredProperties.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              No properties found for the selected filter:{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {filterType}
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      {isModalOpen && selectedProperty && (
        <PropertyDetails
          propertyData={selectedProperty}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Add Property Modal */}
      <AddPropertyModal
        isOpen={isAddPropertyModalOpen}
        onClose={closeAddPropertyModal}
      />

      <Footer />
    </div>
  );
}
