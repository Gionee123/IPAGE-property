import React, { useState } from "react";
import Header from "../common/Header";
import { IoLocation, IoCall, IoMail, IoTime } from "react-icons/io5";
import Footer from "../common/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <IoLocation className="w-6 h-6" />,
      title: "Main Office",
      address: "123 Property Plaza, Downtown District",
      city: "Mumbai, Maharashtra 400001",
      phone: "+91 98765 43210",
      email: "info@propertycompany.com",
    },
    {
      icon: <IoLocation className="w-6 h-6" />,
      title: "Branch Office",
      address: "456 Business Park, Tech Hub",
      city: "Bangalore, Karnataka 560001",
      phone: "+91 87654 32109",
      email: "bangalore@propertycompany.com",
    },
    {
      icon: <IoLocation className="w-6 h-6" />,
      title: "Sales Office",
      address: "789 Commercial Street, City Center",
      city: "Delhi, NCR 110001",
      phone: "+91 76543 21098",
      email: "delhi@propertycompany.com",
    },
  ];

  const quickContact = [
    {
      icon: <IoCall className="w-6 h-6" />,
      title: "Call Us",
      info: "+91 98765 43210",
      subtitle: "24/7 Support Available",
    },
    {
      icon: <IoMail className="w-6 h-6" />,
      title: "Email Us",
      info: "info@propertycompany.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: <IoTime className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon - Sat: 9:00 AM - 7:00 PM",
      subtitle: "Sunday: 10:00 AM - 4:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="py-20 text-white bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl">
            Get in touch with our team for any questions about properties or
            services
          </p>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {quickContact.map((contact, index) => (
              <div
                key={index}
                className="p-6 text-center bg-gray-50 rounded-lg"
              >
                <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full">
                  <div className="text-blue-600">{contact.icon}</div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {contact.title}
                </h3>
                <p className="mb-1 font-medium text-blue-600">{contact.info}</p>
                <p className="text-sm text-gray-600">{contact.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter subject"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  Our Offices
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((office, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white rounded-lg shadow-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-blue-100 rounded-full">
                          <div className="text-blue-600">{office.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 text-xl font-bold text-gray-800">
                            {office.title}
                          </h3>
                          <p className="mb-1 text-gray-600">{office.address}</p>
                          <p className="mb-2 text-gray-600">{office.city}</p>
                          <div className="space-y-1">
                            <p className="font-medium text-blue-600">
                              <IoCall className="inline mr-2 w-4 h-4" />
                              {office.phone}
                            </p>
                            <p className="font-medium text-blue-600">
                              <IoMail className="inline mr-2 w-4 h-4" />
                              {office.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Find Us on Map
                </h3>
                <div className="flex justify-center items-center h-64 bg-gray-200 rounded-lg">
                  <div className="text-center text-gray-500">
                    <IoLocation className="mx-auto mb-2 w-12 h-12" />
                    <p>Interactive Map Coming Soon</p>
                    <p className="text-sm">Main Office: Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Find answers to common questions about our services and properties
            </p>
          </div>

          <div className="grid gap-8 mx-auto max-w-4xl md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-lg font-bold text-gray-800">
                How can I schedule a property viewing?
              </h3>
              <p className="text-gray-600">
                You can call us at +91 98765 43210 or fill out the contact form
                above. We'll arrange a viewing at your convenience.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-lg font-bold text-gray-800">
                What documents do I need for property purchase?
              </h3>
              <p className="text-gray-600">
                You'll need ID proof, address proof, income documents, and bank
                statements. Our team will guide you through the complete
                process.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-lg font-bold text-gray-800">
                Do you offer property management services?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive property management services
                including tenant screening, maintenance, and rent collection.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-lg font-bold text-gray-800">
                What are your business hours?
              </h3>
              <p className="text-gray-600">
                We're open Monday to Saturday from 9:00 AM to 7:00 PM, and
                Sundays from 10:00 AM to 4:00 PM.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
