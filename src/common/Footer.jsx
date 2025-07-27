import React from "react";
import { Link } from "react-router-dom";
import { IoLocation, IoCall, IoMail, IoTime } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Properties", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Property Management",
    "Real Estate Investment",
    "Property Valuation",
    "Legal Services",
  ];

  const contactInfo = [
    {
      icon: <IoLocation className="w-5 h-5" />,
      text: "123 Property Street, City Center, State 12345",
    },
    {
      icon: <IoCall className="w-5 h-5" />,
      text: "+1 (555) 123-4567",
    },
    {
      icon: <IoMail className="w-5 h-5" />,
      text: "info@propertyfinder.com",
    },
    {
      icon: <IoTime className="w-5 h-5" />,
      text: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="text-white bg-gray-900">
      {/* Main Footer Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/download.jpeg" className="w-10 h-10 rounded" />
              <span className="text-xl font-bold">Property Finder</span>
            </div>
            <p className="leading-relaxed text-gray-300">
              Your trusted partner in finding the perfect property. We
              specialize in residential and commercial properties with
              exceptional service and expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 text-gray-400 rounded-lg transition-colors hover:text-white hover:bg-gray-800"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 transition-colors cursor-pointer hover:text-white">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-blue-400 mt-0.5">{contact.icon}</div>
                  <span className="text-sm text-gray-300">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col justify-between items-center space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Property Finder. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
