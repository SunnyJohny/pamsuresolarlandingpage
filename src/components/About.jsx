import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-16 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">
            About Us
          </h2>
          <p className="text-sm text-gray-500">
            Home &gt; <span className="text-indigo-600 font-bold">About Us</span>
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Image Section */}
          <div>
            <img
              src="/images/FB_IMG_1739522405045.jpg"
              alt="Solar Solutions"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-blue-500">Pamsure Solar Solutions</strong> – Your Trusted Renewable Energy Partner.
              <br />
              Located in <strong>Nigeria</strong>, we specialize in providing top-tier solar energy solutions tailored for homes, businesses, and industries.
              Our goal is to make clean, sustainable, and cost-effective energy accessible to all.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At <strong className="text-blue-500">Pamsure Solar Solutions</strong>, we are committed to reducing energy costs and ensuring uninterrupted power supply through advanced solar technology.
              Our range of products and services are designed to meet the diverse needs of our clients, fostering energy independence and sustainability.
            </p>
          </div>
        </div>

        {/* Core Services Section */}
        <h3 id="services" className="text-2xl font-bold text-gray-800 text-center uppercase tracking-wide mb-8">
          Our Core Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { title: "Solar Panel Sales", description: "We offer high-quality solar panels that ensure maximum efficiency and durability for residential, commercial, and industrial use." },
            { title: "Installation Services", description: "Our expert team provides seamless solar panel installation, ensuring optimal positioning and performance." },
            { title: "Maintenance & Support", description: "We offer ongoing maintenance and technical support to keep your solar systems running at peak efficiency." },
            { title: "Energy Consulting", description: "We provide expert advice on energy-saving strategies and customized solar solutions tailored to your needs." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h4>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <h3 className="text-2xl font-bold text-gray-800 text-center uppercase mb-8">
          Our Commitment to Renewable Energy
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Eco-Friendly Solutions</h4>
            <p className="text-gray-700">
              We are dedicated to reducing carbon footprints by promoting sustainable energy alternatives, ensuring a greener future for generations to come.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Affordability & Accessibility</h4>
            <p className="text-gray-700">
              Our solar solutions are designed to be cost-effective, making renewable energy accessible to individuals, businesses, and communities at large.
            </p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <h3 className="text-3xl font-bold text-gray-900 text-center uppercase tracking-wide mb-8">
          Our Vision & Mission
        </h3>
        <div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h4>
          <p className="text-lg text-gray-700 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 p-4 border-l-4 border-gray-800 rounded-lg shadow-md mb-8">
            To be a leading provider of renewable energy solutions, revolutionizing how individuals and businesses access sustainable power across Africa.
          </p>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h4>
          <p className="text-lg text-gray-700 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 p-4 border-l-4 border-gray-800 rounded-lg shadow-md">
            Our mission is to deliver innovative and efficient solar energy solutions, empowering communities with clean and reliable power while promoting environmental sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
