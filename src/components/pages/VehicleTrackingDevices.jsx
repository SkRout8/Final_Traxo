
import React from "react";
import { motion } from "framer-motion";
import traxo from "../../images/traxo22.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function VehicleTrackingDevices() {
  return (
    <div className="w-full bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-yellow-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              AIS 140 VLTD – Advanced Vehicle Tracking Device
            </h1>
            <p className="text-lg text-gray-100 mb-6">
              Ensure compliance, safety, and efficiency with our AIS 140 certified VLTD.
              Designed for precision, durability, and real-time monitoring.
            </p>
            <Link to="/customercare">
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
                Request a Demo
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={traxo}
              alt="AIS 140 VLTD Device"
              className="max-w-sm w-full drop-shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Company Statement */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Choose Traxo for AIS 140 VLTD?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          At <strong>Traxo</strong>, we are proud manufacturers of the AIS 140 VLTD (Vehicle Location
          Tracking Device), fully certified and compliant with the latest transport safety standards in India. 
          Our devices are designed and assembled with precision, ensuring long-lasting durability and unmatched GNSS 
          location accuracy. Beyond manufacturing, we offer end-to-end <strong>GPS tracking solutions</strong> that help 
          you monitor your vehicles in real time — from urban streets to remote rural routes.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-10 text-center"
          >
            Traxo Services on VLTD
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Manufacturing Excellence</h3>
              <p className="text-gray-700">
                Our AIS 140 VLTD devices are manufactured in-house using high-quality components,
                ensuring robust performance, reliability, and compliance with industry standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Real-Time GPS Tracking</h3>
              <p className="text-gray-700">
                Get live location updates for your entire fleet with our advanced tracking platform.
                Stay informed with route history, speed monitoring, and geo-fencing alerts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Custom Solutions</h3>
              <p className="text-gray-700">
                Whether you manage public transport, logistics, or emergency services, 
                we tailor our GPS tracking and VLTD configurations to suit your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">24/7 Support</h3>
              <p className="text-gray-700">
                Our technical support team is available round the clock to ensure your tracking
                systems run smoothly without interruptions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Data Security</h3>
              <p className="text-gray-700">
                We ensure that all tracking data is securely stored and transmitted, 
                keeping your business operations safe and compliant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Nationwide Deployment</h3>
              <p className="text-gray-700">
                From metropolitan cities to rural areas, our devices are ready for quick
                installation and activation anywhere in India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
