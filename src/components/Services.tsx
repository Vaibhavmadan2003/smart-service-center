'use client';

const Services = () => {
  const services = [
    {
      icon: '❄️',
      title: 'AC Repair & Service',
      description: 'Complete air conditioning repair, installation, and annual maintenance'
    },
    {
      icon: '🧊',
      title: 'Refrigerator Repair',
      description: 'Professional refrigerator and deep freezer repair for all brands'
    },
    {
      icon: '🌊',
      title: 'Washing Machine Service',
      description: 'Expert repair and maintenance for automatic and semi-automatic machines'
    },
    {
      icon: '🔥',
      title: 'Microwave Oven Repair',
      description: 'Quick and reliable microwave and oven repair services'
    },
    {
      icon: '⚙️',
      title: 'Installation Services',
      description: 'Professional installation of AC, refrigerator, and other appliances'
    },
    {
      icon: '📞',
      title: 'Maintenance Plans',
      description: 'Annual maintenance contracts with regular checkups and service'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete solutions for all your home appliance repair and maintenance needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-700 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Appliance Repair?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Call Smart Service Center now for fast, reliable, and affordable appliance repair services in Barasat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919875438052"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919875438052"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
