'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl"></span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-wider">Home Appliences Repair Services Center</h3>
                <p className="text-sm text-gray-400">Appliance Repair</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional home appliance repair and maintenance services in Barasat. Experienced technicians providing quick diagnosis, reliable repairs, and genuine spare parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-choose" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-blue-400 transition-colors font-medium cursor-pointer">
                AC Repair & Service
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors font-medium cursor-pointer">
                Refrigerator Repair
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors font-medium cursor-pointer">
                Washing Machine Service
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors font-medium cursor-pointer">
                Microwave Oven Repair
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors font-medium cursor-pointer">
                Installation Services
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1"> Phone</p>
                <a href="tel:+91 98754 38052" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  +91 98754 38052
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1"> Email</p>
                <a href="mailto:smartservicecenter2019@gmail.com" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors break-all">
                  smartservicecenter2019@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1"> Location</p>
                <p className="text-gray-400 text-sm">
                  Bakshibagan Ln, I<br />
                  Barasat, West Bengal 700124
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://wa.me/9198754 38052"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
               {currentYear} Home Appliences Repair Services Center. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


