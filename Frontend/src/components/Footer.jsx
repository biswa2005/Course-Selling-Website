import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#1e1b4b] to-[#1a1740] text-white px-6 md:px-16 pt-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold leading-tight uppercase">
            Pragati Coaching <br /> Centre
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm">
            Best coaching centre for NEET, JEE, and competitive exam
            preparation. Expert faculty, proven results, personalized learning.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <FaFacebookF />
            </a>
            <a className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <FaInstagram />
            </a>
            <a className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <FaYoutube />
            </a>
            <a className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-5 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/coaches">Our Coaches</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Courses Offered */}
        <div>
          <h3 className="font-semibold mb-5 text-lg">Courses Offered</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>NEET Preparation</li>
            <li>JEE Main & Advanced</li>
            <li>WBP SI Coaching</li>
            <li>WBP Constable</li>
            <li>Bank Clerk Exam</li>
            <li>Foundation Courses</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-5 text-lg">Contact Us</h3>

          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex gap-3 items-start">
              <MdLocationOn className="text-blue-400 text-lg mt-1" />
              <span>
                Pragati Coaching Centre,
                <br />
                Education District,
                <br />
                Kolkata, West Bengal
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <MdPhone className="text-blue-400 text-lg" />
              <span>
                +91 98765 43210 <br />
                +91 98765 43211
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <MdEmail className="text-blue-400 text-lg" />
              <span>support@pragatilive.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Pragati Coaching Centre. All Rights Reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/refund-policy">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
