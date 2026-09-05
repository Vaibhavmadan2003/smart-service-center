'use client';

const Hero = () => {
  return (
    <section className="pt-72 pb-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-blue-600/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-300/30">
              <span className="text-sm font-semibold">🔧 PROFESSIONAL HOME APPLIANCE REPAIR</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-blue-200">Smaart Service Center</span><br />Appliance Repair Experts
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Professional home appliance repair and maintenance services in Barasat. We specialize in AC, refrigerator, washing machine, microwave, and all major brand appliances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+91 98754 38052"
                className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                📞 Call for Service
              </a>
              <a
                href="https://wa.me/9198754 38052"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                💬 Quick Message
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-200 mb-2">500+</div>
              <p className="text-blue-100 font-semibold">Repairs Done</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-200 mb-2">98%</div>
              <p className="text-blue-100 font-semibold">Satisfaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-200 mb-2">8+</div>
              <p className="text-blue-100 font-semibold">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-blue-200 mb-2">🏆</div>
              <p className="text-blue-100 font-semibold">Trusted Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

