'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Smart Service Center, I'm ${formData.name}. ${formData.message}. Contact me at ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919875438052?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in <span className="text-blue-700">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact Smart Service Center for professional appliance repair services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                  <a href="tel:+919875438052" className="text-blue-700 font-semibold hover:underline">
                    +91 98754 38052
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                  <a href="mailto:smartservicecenter2019@gmail.com" className="text-blue-700 font-semibold hover:underline">
                    smartservicecenter2019@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">
                    Bakshibagan Ln, I<br />
                    Barasat<br />
                    West Bengal 700124
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Connect</h3>
                  <a
                    href="https://wa.me/919875438052"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Service</h3>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none transition-colors"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none transition-colors"
                placeholder="+91 Your Number"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Describe Your Appliance Issue *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your appliance problem..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors transform hover:-translate-y-1 shadow-lg hover:shadow-xl duration-300"
            >
              Send via WhatsApp
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              We'll respond to your request immediately
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
