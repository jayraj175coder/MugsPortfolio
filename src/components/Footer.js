// components/Footer.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing social media icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-700 py-6">
      <div className="container text-center">
        {/* Social Media Icons */}
        <div className="mb-4 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram className="text-xl" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-white">&copy; 2024 MyPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
