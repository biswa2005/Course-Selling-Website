import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-extrabold uppercase leading-tight">
            PRAGATI COACHING <br /> CENTRE
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed w-64">
            Transform your learning journey with expert coaching, personalized
            training plans, and a supportive community.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-sm tracking-wide">
            SERVICES
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer">
              Academic Guidance
            </li>
            <li className="transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer">
              Training Plans
            </li>
            <li className="transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer">
              Batch Classes
            </li>
            <li className="transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer">
              Exam Preparation
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-sm tracking-wide">
            COMPANY
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link
                to="/success-stories"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white inline-block"
              >
                Success Stories
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white inline-block"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white inline-block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-sm tracking-wide">
            GET STARTED
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link
                to="/register"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white inline-block"
              >
                Register Now
              </Link>
            </li>
            <li>
              <Link
                to="/consultation"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white inline-block"
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Pragati Coaching Centre. All rights reserved.</p>

        <div className="flex items-center gap-2 mt-4 md:mt-0 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="w-5 h-5 border-4 border-white rounded-full"></div>
          <span className="font-bold tracking-wide">
            PRAGATI COACHING CENTRE
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
