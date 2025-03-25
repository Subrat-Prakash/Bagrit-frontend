import { Link } from "react-router-dom";
import logo from '../assets/logomain.png'; // Existing logo
// import ecobharatLogo from '../assets/ecobharat-logo.png'; // New EcoBharat logo
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

export function FooterThree() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo & Vision */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-16 mb-4" />
            </Link>
            <p className="text-lg leading-relaxed">
              <strong>Bagrit</strong> is an initiative that strives with a strong vision to 
              create a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-green-600">About</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-green-600">FAQ</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-green-600">Our Shop</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-600">Blog</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-green-600">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-600">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              <strong>Bagrit Pvt. Ltd.</strong><br />
              Survey No: 44-617/1-2, KishanGanj, Bihar 855107
            </p>
            <p className="mt-4">
              <a href="tel:+9185xxxxxxxx" className="block hover:text-green-600">
                +91 85xxxxxxxx
              </a>
              <a href="tel:+9192xxxxxxxx" className="block hover:text-green-600">
                +91 92xxxxxxxx
              </a>
              <a href="mailto:bagrit.help@gmail.com" className="block hover:text-green-600">
                bagrit.help@gmail.com
              </a>
            </p>
          </div>

        </div>

          {/* Socia; Media Icon */}
          <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/bagrit_official/" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-green-600 transition duration-300">
                <FaInstagram size={28} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-blue-400 transition duration-300">
                <FaTwitter size={28} />
              </a>
              <a href="https://www.linkedin.com/company/bagrit/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-blue-700 transition duration-300">
                <FaLinkedin size={28} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-blue-500 transition duration-300">
                <FaFacebookF size={28} />
              </a>
            
          </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center">
          <p className="text-sm">
            Copyright © 2025 Bagrit. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link to="/privacy" className="hover:text-green-600">Privacy Policy</Link>
            <Link to="/return-policy" className="hover:text-green-600">Return & Refund Policy</Link>
            <p className="text-sm">Designed and Developed by Bagrit team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
