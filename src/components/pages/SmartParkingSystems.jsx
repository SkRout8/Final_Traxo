import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import SmartParkingImg from "../../images/Camera.png"; // Replace with your actual image

const features = [
  "Real-time detection of parking spot availability.",
  "Mobile app integration for navigation and reservations.",
  "Automated payment through QR, NFC, or RFID.",
  "License plate recognition for seamless entry/exit.",
  "Data analytics for usage patterns and optimization.",
];

const benefits = [
  "Reduces time spent searching for parking.",
  "Lowers traffic congestion and emissions.",
  "Improves revenue collection for operators.",
  "Enhances driver convenience and satisfaction.",
  "Supports smart city infrastructure.",
];

function SmartParkingSystems() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-yellow-400 text-white min-h-screen pt-10">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Parking Systems
            </h1>
            <p className="text-lg mb-6">
              Our IoT-powered Smart Parking System makes finding and managing parking
              easy, efficient, and eco-friendly. Using real-time data, drivers can
              quickly locate vacant spots, reserve them, and make hassle-free payments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={SmartParkingImg}
              alt="Smart Parking"
              className="w-full h-auto object-contain "
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10"> Traxo Services On This System</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between bg-white p-6 rounded-xl shadow-lg text-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[150px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-yellow-500 text-2xl flex-shrink-0 mt-1" />
                <span className="text-base leading-relaxed">{feature}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Accordion */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10">Your Benefits</h2>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-900"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 cursor-pointer text-lg font-semibold hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {benefit}
                <ChevronDown
                  className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-200"
                  >
                    {benefit} helps improve parking operations, user experience,
                    and overall traffic flow.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SmartParkingSystems;
