import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import M2MeSIMImg from "../../images/C55.png"; // replace with correct image if available

function M2MeSIM() {
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
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              M2M eSIM Device
            </h1>
            <p className="text-lg">
              The M2M eSIM Device provides seamless connectivity for IoT devices,
              enabling secure, scalable, and global communication without the
              need to swap physical SIM cards. Perfect for industries requiring
              reliable machine-to-machine communication.
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
              src={M2MeSIMImg}
              alt="M2M eSIM Device"
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
                  "• Embedded SIM (eSIM) technology for remote provisioning\n• Global coverage with multi-operator support\n• Secure, tamper-resistant hardware\n• Over-the-air (OTA) updates and profile switching",
              },
              {
                title: "Technical Specs",
                content:
                  "• Form Factor: MFF2 / eUICC\n• Supported Networks: 2G / 3G / 4G LTE / 5G ready\n• Compliance: GSMA eSIM standards\n• Security: End-to-end encryption with secure key storage",
              },
              {
                title: "Use Cases",
                content:
                  "• Smart Vehicles & Fleet Management\n• Industrial IoT Devices\n• Healthcare & Medical Equipment\n• Consumer Electronics & Wearables",
              },
              {
                title: "Benefits",
                content:
                  "• Eliminates need for physical SIM replacement\n• Ensures uninterrupted global connectivity\n• Enhances IoT scalability with flexible provisioning\n• Reduces operational costs for enterprises",
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
                <p className="mt-4 text-gray-600 whitespace-pre-line">
                  {item.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Connect Smarter with M2M eSIM Solutions
        </h2>
        <p className="text-lg mb-6">
          Deploy eSIM-enabled devices to unlock global connectivity and
          streamline your IoT operations.
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

export default M2MeSIM;
