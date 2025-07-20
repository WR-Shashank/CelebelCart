import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">CelebelCart</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for online shopping in India. Quality products, fast delivery, and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@celebelcart.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="h-4 w-4" />
              <span>+91 1800-123-4567</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                All Products
              </Link>
              <Link to="/products?category=Electronics" className="block text-gray-400 hover:text-white transition-colors">
                Electronics
              </Link>
              <Link to="/products?category=Fashion" className="block text-gray-400 hover:text-white transition-colors">
                Fashion
              </Link>
              <Link to="/products?category=Home" className="block text-gray-400 hover:text-white transition-colors">
                Home & Kitchen
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link to="/shipping" className="block text-gray-400 hover:text-white transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="block text-gray-400 hover:text-white transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Office</h3>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div>
                <p>CelebelCart Pvt. Ltd.</p>
                <p>123 Business Park</p>
                <p>Bengaluru, Karnataka 560001</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CelebelCart. All rights reserved.Proudly made in India.🇮🇳
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;