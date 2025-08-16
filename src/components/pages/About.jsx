import React from "react";
import Traxoabout from '../../images/TraxoAbout.png'
import {
  FaSatelliteDish,
  FaMapMarkedAlt,
  FaTools,
  FaIndustry,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900 pt-16 xl:pt-0 md:pt-0 lg:pt-0 xl:mt-16 lg:mt-16 md:mt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-white">
        <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              TRAXO (India) Automation Pvt. Ltd.
            </h1>
            <p className="text-lg text-black">
              Revolutionizing GPS Tracking & IoT Solutions for Smarter, Safer,
              and More Connected Operations.
            </p>
            <button className="bg-black text-blue-100 px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-100 transition">
              Contact Us
            </button>
          </div>
          <div className="lg:w-1/2 mt-10 ml-32 lg:mt-0">
           <img
  src={Traxoabout}
  className=" "
/>

          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us 🚀</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="About TRAXO"
            className="rounded-xl shadow-lg lg:w-1/2"
          />
          <div className="lg:w-1/2 space-y-4">
            <p>
              Founded on December 11, 2019, TRAXO (India) Automation Private
              Limited is headquartered in Balasore, Odisha. Our mission is to
              deliver cutting-edge GPS tracking and IoT solutions for
              transportation, logistics, banking, and corporate sectors.
            </p>
            <p>
              Incorporated with the Registrar of Companies, Cuttack, we combine
              technical innovation with customer-focused service to make
              operations smarter and safer.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Strengths 🏭
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkedAlt className="text-4xl text-blue-600" />,
                title: "GPS Tracking Systems",
                desc: "Real-time monitoring, geo-fencing, and route optimization.",
              },
              {
                icon: <FaSatelliteDish className="text-4xl text-blue-600" />,
                title: "IoT Solutions",
                desc: "Fuel tracking, accident detection, and data analytics.",
              },
              {
                icon: <FaTools className="text-4xl text-blue-600" />,
                title: "Customization",
                desc: "Tailored software and hardware solutions for your needs.",
              },
              {
                icon: <FaIndustry className="text-4xl text-blue-600" />,
                title: "In-House Manufacturing",
                desc: "Modern PCB assembly and advanced testing facilities.",
              },
              {
                icon: <FaGlobe className="text-4xl text-blue-600" />,
                title: "Market Reach",
                desc: "Growing presence in transport, logistics, and enterprise markets.",
              },
              {
                icon: <FaUsers className="text-4xl text-blue-600" />,
                title: "Expert Team",
                desc: "Skilled developers, engineers, and support professionals.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-center space-y-4"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Infrastructure ⚙️</h2>
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <p>
            📍 Plot No. 443/4516, ITI Chowk, Near RTO Office, 3rd Floor,
            Balasore, Odisha.
          </p>
          <p>
            Our manufacturing unit is equipped with modern PCB design and
            assembly setups, advanced testing tools, and a dedicated R&D lab for
            IoT & GPS innovation.
          </p>
        </div>
      </section>

      {/* Market Presence */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Market Presence 🌏</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Though a young company, TRAXO (India) has established a growing
            presence in transportation, logistics, and enterprise automation.
            Our solutions are trusted by industry leaders who value precision,
            reliability, and adaptability.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Partner with TRAXO for world-class GPS tracking and IoT solutions
            tailored to your needs.
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-100 transition">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
    <section>
      <Footer/>
    </section>
    </div>
  );
}
