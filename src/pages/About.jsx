import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function About() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "10+ years of experience in real estate development",
    },
    {
      name: "Sarah Johnson",
      position: "Property Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Expert in property management and client relations",
    },
    {
      name: "Michael Chen",
      position: "Sales Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Specialized in commercial property sales",
    },
    {
      name: "Emily Davis",
      position: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Creative marketing strategies for property listings",
    },
  ];

  const stats = [
    { number: "500+", label: "Properties Sold" },
    { number: "1000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Cities Covered" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="py-20 text-white bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl">
            We are a leading property management company dedicated to helping
            you find your dream property
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Our Story
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Founded in 2008, our company has been at the forefront of the
                real estate industry, helping thousands of families and
                businesses find their perfect properties. We started with a
                simple mission: to make property hunting easier and more
                transparent.
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                Over the years, we've expanded our services to include property
                management, commercial real estate, and investment consulting.
                Our team of experienced professionals is committed to providing
                exceptional service and personalized solutions for every client.
              </p>
              <p className="leading-relaxed text-gray-600">
                Today, we're proud to be one of the most trusted names in the
                property industry, serving clients across multiple cities with
                integrity, professionalism, and dedication.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Our Office"
                className="object-cover w-full h-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600 md:text-5xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Our Mission & Values
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              We are committed to excellence in everything we do, from finding
              the perfect property to providing ongoing support to our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 text-center bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Trust & Integrity
              </h3>
              <p className="text-gray-600">
                We build lasting relationships based on trust, transparency, and
                honest communication.
              </p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every transaction and service we
                provide to our clients.
              </p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do, and their
                satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Our experienced team of professionals is dedicated to helping you
              find the perfect property and providing exceptional service
              throughout your journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-medium text-blue-600">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-white bg-blue-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Find Your Dream Property?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Let our experienced team help you find the perfect property that
            meets your needs and budget.
          </p>
          <button className="px-8 py-3 font-medium text-blue-600 bg-white rounded-lg transition-colors hover:bg-gray-100">
            Get Started Today
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
