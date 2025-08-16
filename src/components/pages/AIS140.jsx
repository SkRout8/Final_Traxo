import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import traxo from "../../images/traxo22.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

// Accordion Data with table format
const accordionData = [
  {
    title: "Features",
    table: [
      { name: "Integrated SOS", detail: "Instantly alerts emergency contacts with real-time location." },
      { name: "Built-in Battery Backup", detail: "Long-lasting performance for uninterrupted tracking." },
      { name: "Higher GNSS Accuracy", detail: "Precise location tracking for optimal navigation." },
      { name: "Tamper Alert", detail: "Notifies when device is disconnected or tampered." },
      { name: "Geo-fencing", detail: "Alerts when a vehicle enters or exits designated areas." },
      { name: "Over-Speed Alert", detail: "Real-time alerts for speeding violations." },
    ],
  },
  {
    title: "Specifications",
    table: [
      { name: "Dimensions", detail: "85mm x 65mm x 25mm" },
      { name: "Weight", detail: "120g" },
      { name: "Operating Temperature", detail: "-20°C to 70°C" },
      { name: "Humidity", detail: "5% to 95% non-condensing" },
      { name: "Ingress Protection", detail: "IP65 (Dust and Water Resistant)" },
      { name: "Location Technology", detail: "GPS, GLONASS, QZSS, SBAS" },
    ],
  },
  {
    title: "Cellular & Network",
    table: [
      { name: "2G", detail: "Quad-Band GSM/GPRS" },
      { name: "4G LTE", detail: "Cat-M1/NB-IoT (Optional Model)" },
      { name: "SIM Type", detail: "Nano SIM / eSIM Support" },
      { name: "Data Communication", detail: "TCP/UDP/SMS" },
      { name: "Antenna", detail: "Internal GSM and GNSS antenna" },
    ],
  },
  {
    title: "Power",
    table: [
      { name: "Input Voltage", detail: "8V – 32V DC" },
      { name: "Battery", detail: "500mAh Li-Polymer Rechargeable" },
      { name: "Power Consumption", detail: "< 20mA in idle mode" },
      { name: "Battery Backup", detail: "Up to 8 hours (standard tracking)" },
    ],
  },
  {
    title: "Compliance & Certifications",
    table: [
      { name: "Certification", detail: "AIS 140 Certified by ARAI" },
      { name: "Quality", detail: "ISO 9001:2015 Quality Management" },
      { name: "Ingress Protection", detail: "IP65 Waterproof and Dustproof" },
      { name: "Standard", detail: "Meets Indian Automotive Industry Standards" },
    ],
  },
  {
    title: "Use Cases",
    table: [
      { name: "Public Transport", detail: "Vehicle Tracking for buses & commercial fleets" },
      { name: "Fleet Management", detail: "Logistics and delivery tracking" },
      { name: "School Bus", detail: "Safety Monitoring" },
      { name: "Emergency Vehicles", detail: "Ambulance & disaster response tracking" },
      { name: "Taxi", detail: "Ride-Hailing and monitoring" },
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

export default function AIS140() {
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
              AIS 140 VLTD – Advanced Vehicle Tracking Device
            </h1>
            <p className="text-lg text-black mb-6 ">
              Ensure compliance, safety, and efficiency with our AIS 140 certified VLTD.
              Designed for precision, durability, and real-time monitoring.
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
              src={traxo}
              alt="AIS 140 VLTD Device"
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
          Why Choose AIS 140 VLTD?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          The AIS 140 VLTD is a government-mandated tracking device for all public transport
          and commercial vehicles in India. It ensures passenger safety, real-time monitoring,
          and compliance with transport regulations. Our device stands out with superior GNSS
          accuracy, rugged design, and seamless network connectivity across urban and rural areas.
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
      <Footer/>
     </section>
    
    </div>
  );
}
