'use client';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-700">Home Appliences Repair Services Center</span>
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for all home appliance repair needs in Barasat
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Quality Service You Can Depend On</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Home Appliences Repair Services Center has been providing professional home appliance repair and maintenance services in Barasat and nearby areas for over 8 years. Our experienced technicians are dedicated to delivering quick, reliable repairs with genuine spare parts and excellent customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-700 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4"> Our Mission</h4>
                <p className="text-blue-100 leading-relaxed">
                  To provide affordable, reliable, and professional home appliance repair services with quick response time and genuine parts for all major brands.
                </p>
              </div>

              <div className="bg-blue-800 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4"> Our Vision</h4>
                <p className="text-blue-100 leading-relaxed">
                  To be the most trusted appliance repair service provider in Barasat, known for quality workmanship, affordability, and exceptional customer care.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Home Appliences Repair Services Center?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl"></div>
                  <div>
                    <h4 className="font-bold mb-2">Experienced Technicians</h4>
                    <p className="text-blue-100">8+ years of professional repair experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl"></div>
                  <div>
                    <h4 className="font-bold mb-2">Genuine Parts</h4>
                    <p className="text-blue-100">Only authentic spare parts used</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl"></div>
                  <div>
                    <h4 className="font-bold mb-2">Affordable Pricing</h4>
                    <p className="text-blue-100">Competitive rates with transparent pricing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl"></div>
                  <div>
                    <h4 className="font-bold mb-2">Doorstep Service</h4>
                    <p className="text-blue-100">We come to your home for repairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


