import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import cameraImg from "../../images/Camera.png"; // Update with actual camera image
import Footer from "../Footer";
import { Link } from "react-router-dom";

// Accordion Data for Vehicle Camera System
const accordionData = [
  {
    title: "Key Features",
    table: [
      { name: "Dual-Lens Recording", detail: "Simultaneous front and cabin monitoring with HD clarity." },
      { name: "Night Vision", detail: "Infrared-enabled for clear video even in low-light conditions." },
      { name: "Real-Time Streaming", detail: "Live video feed accessible via mobile app or web dashboard." },
      { name: "AI-Powered Alerts", detail: "Driver fatigue, distraction, and collision warnings." },
      { name: "Cloud Storage", detail: "Automatic backup of recordings with secure access." },
      { name: "GPS Integration", detail: "Track vehicle route alongside video footage." },
    ],
  },
  {
    title: "Technical Specifications",
    table: [
      { name: "Camera Resolution", detail: "1080p Full HD (Front) + 720p (Cabin)" },
      { name: "Lens Angle", detail: "150° Wide-Angle" },
      { name: "Connectivity", detail: "4G LTE / Wi-Fi / Hotspot Support" },
      { name: "Storage", detail: "Up to 256GB SD card + Cloud" },
      { name: "Operating Temperature", detail: "-10°C to 65°C" },
      { name: "Power Supply", detail: "12V/24V Vehicle Power Compatible" },
    ],
  },
  {
    title: "Safety & Compliance",
    table: [
      { name: "Driver Monitoring", detail: "Detects drowsiness, phone usage, and seatbelt compliance." },
      { name: "Event Recording", detail: "Automatic video lock during accidents or harsh braking." },
      { name: "Compliance", detail: "Meets global fleet surveillance and safety standards." },
      { name: "Tamper Protection", detail: "Alerts if device is disconnected or tampered." },
    ],
  },
  {
    title: "Power & Battery",
    table: [
      { name: "Input Voltage", detail: "9V – 36V DC" },
      { name: "Battery Backup", detail: "Up to 6 hours (built-in Li-ion)" },
      { name: "Power Consumption", detail: "< 25mA in standby mode" },
      { name: "Charging", detail: "Supports fast charging via vehicle power" },
    ],
  },
  {
    title: "Use Cases",
    table: [
      { name: "Public Transport", detail: "Monitor driver behavior and passenger safety." },
      { name: "Fleet Management", detail: "Track goods and ensure driver accountability." },
      { name: "School Buses", detail: "Monitor children’s safety and driver discipline." },
      { name: "Logistics & Delivery", detail: "Protect goods in transit with video proof." },
      { name: "Taxis & Ride-Hailing", detail: "Enhance passenger trust and security." },
      { name: "Emergency Vehicles", detail: "Record response journeys for audits and safety." },
    ],
  },
];

// Accordion Item Component
const AccordionItem = ({ title, table, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 transition-colors hover:bg-gray-50 px-4"
    >
      {title}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <table className="min-w-full text-left border-t">
            <tbody>
              {table.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">{row.name}</td>
                  <td className="px-4 py-2 text-gray-600">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function VehicleCameraSystem() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-white text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-5xl text-black font-bold mb-6">
              Smart Vehicle Camera System – Advanced Safety & Monitoring
            </h1>
            <p className="text-lg text-black mb-6 ">
              Our intelligent vehicle camera system combines real-time video monitoring,
              AI-driven driver alerts, and cloud storage to enhance road safety, ensure
              compliance, and protect passengers and assets. Designed for fleets, schools,
              taxis, and logistics.
            </p>
            <Link to="/customercare">
              <button className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition ">
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
              src={cameraImg}
              alt="Vehicle Camera System"
              className="max-w-sm w-full drop-shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Choose Our Vehicle Camera System?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          Vehicle safety goes beyond GPS tracking. Our advanced camera system provides
          real-time visibility inside and outside the vehicle, backed by AI to prevent
          accidents and ensure accountability. With HD video, night vision, and cloud
          integration, it’s the ultimate solution for fleet operators, schools, and
          commercial transport.
        </motion.p>

        {/* Accordion */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-100">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              table={item.table}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}