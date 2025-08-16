import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import SPS from "../../images/traxo.png"; // update path if different

function SmartParkingSystem() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white text-black py-20 pt-28">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl text-black font-bold leading-tight">
              Smart Parking System Device
            </h1>
            <p className="text-lg  text-black">
              A next-generation IoT-enabled solution for efficient parking
              management. Our Smart Parking System uses advanced sensors,
              real-time data, and cloud connectivity to streamline parking space
              utilization, reduce congestion, and enhance urban mobility.
            </p>
            <div className="flex space-x-4">
              <a
                href="/customercare"
                className="bg-black px-6 text-yellow-400 py-3 rounded-xl font-semibold hover:bg-green-700"
              >
                Request Demo
              </a>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <img
              src={SPS}
              alt="Smart Parking System"
              className=""
            />
          </motion.div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Features & Specifications
          </motion.h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                title: "Key Features",
                content:
                  "Real-time parking availability detection, mobile app integration, automated payment support, cloud-based monitoring, and predictive analytics for space optimization.",
              },
              {
                title: "Technical Specs",
                content:
                  "• Ultrasonic/IR Sensors for vehicle detection\n• Wireless Connectivity (LoRaWAN / NB-IoT / Wi-Fi)\n• Cloud Dashboard & APIs for integration\n• Weatherproof & vandal-resistant design",
              },
              {
                title: "Use Cases",
                content:
                  "• Smart City Parking Solutions\n• Shopping Malls & Airports\n• Corporate & University Campuses\n• Residential Complexes & Hospitals",
              },
              {
                title: "Benefits",
                content:
                  "• Reduces traffic congestion & fuel waste\n• Provides drivers with real-time parking guidance\n• Enables automated & cashless payments\n• Helps city authorities plan better urban mobility",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-white shadow-md rounded-xl p-6 cursor-pointer"
              >
                <summary className="flex justify-between items-center font-semibold text-lg">
                  {item.title}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-600 whitespace-pre-line">{item.content}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Revolutionize Parking with Smart Solutions
        </h2>
        <p className="text-lg mb-6">
          Deploy IoT-enabled Smart Parking Systems to make urban mobility more
          efficient and user-friendly.
        </p>
        <a
          href="/customercare"
          className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default SmartParkingSystem;
