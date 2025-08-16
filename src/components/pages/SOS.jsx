import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import SOSImg from "../../images/SOS.png"; // Update path if different

function SOS() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white text-black py-20 pt-28">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl text-black font-bold leading-tight">
              SOS Emergency Alert System
            </h1>
            <p className="text-lg text-black">
              The SOS Emergency System ensures safety at your fingertips. 
              With one press, it immediately sends distress alerts, 
              shares live GPS location, and connects to emergency contacts or 
              command centers in real time, making it a lifesaving device 
              for personal and vehicle safety.
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

          {/* Right Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <img
              src={SOSImg}
              alt="SOS Device"
              className="w-full max-w-md mx-auto"
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
                  "• One-touch SOS emergency trigger\n• Real-time GPS location sharing\n• Instant alerts to predefined contacts\n• Direct integration with command/control centers",
              },
              {
                title: "Technical Specs",
                content:
                  "• Compact design with durable hardware\n• GSM/GPRS/4G connectivity for instant alerts\n• Integrated GPS module\n• Low-power consumption with long battery backup",
              },
              {
                title: "Use Cases",
                content:
                  "• Personal safety in emergencies\n• Women & child safety\n• Vehicle driver emergency alerts\n• Fleet management and transport safety",
              },
              {
                title: "Benefits",
                content:
                  "• Rapid response during critical events\n• Enhances passenger and driver safety\n• Ensures compliance with transport safety norms\n• Peace of mind for families and organizations",
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
          Stay Safe with SOS Emergency Solutions
        </h2>
        <p className="text-lg mb-6">
          Empower your safety with instant emergency alerts and real-time
          assistance. Protect lives, reduce response time, and ensure peace of mind.
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

export default SOS;
