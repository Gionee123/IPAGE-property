import React, { createContext, useContext, useState, useEffect } from "react";

const PropertyContext = createContext();

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error(
      "usePropertyContext must be used within a PropertyProvider"
    );
  }
  return context;
};

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      type: "Plot",
      location: "Pune",
      description: "A large-plot of land available for development.",
      price: "$250,000",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      type: "Shed",
      location: "Buegalore",
      description: "An inclabria shind a primee locatioit.",
      price: "$76,000",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      type: "Retail Store",
      location: "Hyderabad",
      description: "A commercai rioil space in c city center.",
      price: "$150,000",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      type: "Plott Store",
      location: "Khermai",
      description: "A prime retail location with high foot traffic.",
      price: "$200,000",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      type: "Jalpur",
      location: "Chennai",
      description: "A spacious commercial property in the heart of the city.",
      price: "$300,000",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      type: "Municai",
      location: "Municai",
      description: "A small but well-located property for business.",
      price: "$30,000",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 7,
      type: "Kolkata",
      location: "Kolkata",
      description: "A premium property in a developing area.",
      price: "$175,000",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 8,
      type: "Jaiper",
      location: "Jaiper",
      description: "A beautiful property with great potential.",
      price: "$160,000",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);

  // Filter properties based on search term and type filter
  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.price.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "All" || property.type === filterType;

    return matchesSearch && matchesType;
  });

  // Add new property
  const addProperty = (newProperty) => {
    const propertyWithId = {
      ...newProperty,
      id: properties.length + 1,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    };
    setProperties([...properties, propertyWithId]);
  };

  // Handle view property
  const handleViewProperty = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  // Open add property modal
  const openAddPropertyModal = () => {
    setIsAddPropertyModalOpen(true);
  };

  // Close add property modal
  const closeAddPropertyModal = () => {
    setIsAddPropertyModalOpen(false);
  };

  const value = {
    properties,
    filteredProperties,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    selectedProperty,
    isModalOpen,
    isAddPropertyModalOpen,
    addProperty,
    handleViewProperty,
    closeModal,
    openAddPropertyModal,
    closeAddPropertyModal,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};
