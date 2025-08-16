import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import Wemis from "../../images/Wemis.png"; // Update path if needed

function VMIS() {
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
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Vehicle Management Information System (VMIS)
            </h1>
            <p className="text-lg">
              A powerful cloud-based platform designed to monitor, manage, and
              optimize your entire fleet. VMIS provides real-time tracking,
              performance analytics, and predictive insights to ensure safer,
              smarter, and more efficient vehicle operations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wemis.in/"
                className="bg-black px-6 text-yellow-400 py-3 rounded-xl font-semibold hover:bg-green-700"
              >
               Go To Wemis
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
              src={Wemis}
              alt="Vehicle Management Information System"
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
                  "• Real-time GPS tracking & route monitoring\n• Driver behavior analysis (speed, braking, idling)\n• Predictive maintenance alerts\n• Fuel usage monitoring\n• Customizable reports & dashboards",
              },
              {
                title: "Technical Specs",
                content:
                  "• Cloud-based architecture with API integrations\n• Compatible with GPS & IoT-enabled devices\n• Secure data storage & role-based access\n• Mobile & desktop accessibility",
              },
              {
                title: "Use Cases",
                content:
                  "• Logistics & Transportation companies\n• School & Corporate Fleets\n• Public Transport Authorities\n• Rental & Leasing Businesses\n• Emergency Service Vehicles",
              },
              {
                title: "Benefits",
                content:
                  "• Increases fleet efficiency & reduces downtime\n• Improves driver safety & accountability\n• Saves fuel & operational costs\n• Provides actionable insights for decision-making",
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
          Transform Fleet Management with VMIS
        </h2>
        <p className="text-lg mb-6">
          Gain complete visibility and control of your vehicles, reduce costs,
          and improve safety with our Vehicle Management Information System.
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

export default VMIS;
