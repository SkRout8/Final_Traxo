import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import FleetImg from "../../images/Wemis.png"; // Replace with your actual image path

function FMS() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white text-black py-20 pt-44">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl text-black font-bold leading-tight">
              Fleet Management Software
            </h1>
            <p className="text-lg text-black">
              A comprehensive software solution to monitor, optimize, and
              streamline fleet operations. Our Fleet Management Software ensures
              real-time tracking, fuel monitoring, route optimization, and
              compliance management.
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
            <img src={FleetImg} alt="Fleet Management" />
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
                  "Real-time GPS tracking, driver behavior monitoring, route optimization, predictive maintenance alerts, and compliance reporting.",
              },
              {
                title: "Technical Specs",
                content:
                  "• Cloud-based dashboard\n• Mobile app support\n• API integration\n• AI-powered data analytics\n• Secure access controls",
              },
              {
                title: "Use Cases",
                content:
                  "• Logistics & Transportation Companies\n• Car Rental Services\n• Public Transport Authorities\n• Delivery & Supply Chain Businesses",
              },
              {
                title: "Benefits",
                content:
                  "• Reduce fuel costs & maintenance expenses\n• Improve driver safety & productivity\n• Enhance on-time delivery rates\n• Optimize fleet utilization",
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
          Optimize Your Fleet with Smart Management
        </h2>
        <p className="text-lg mb-6">
          Leverage AI-driven Fleet Management Software to improve safety,
          efficiency, and ROI.
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

export default FMS;
