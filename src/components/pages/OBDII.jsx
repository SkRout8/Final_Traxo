import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import obdImg from "../../images/OBD.png"; // update path/name to your OBD-II image

// ----- Accordion Data for OBD-II Vehicle Tracker -----
const accordionData = [
  {
    title: "Key Features",
    table: [
      { name: "Plug & Play", detail: "Instant install via OBD-II port—no wiring, no technician required." },
      { name: "Live Vehicle Data", detail: "Speed, RPM, coolant temp, fuel level, battery voltage, and more (PID-based)." },
      { name: "DTC & MIL Alerts", detail: "Reads Diagnostic Trouble Codes; notifies when the Check Engine light (MIL) turns on." },
      { name: "Driving Behavior", detail: "Detects harsh braking/acceleration, overspeed, cornering, and idling." },
      { name: "Trip History", detail: "Complete trip logs with route replay, distance, time, and average speed." },
      { name: "Unplug/Tamper Alert", detail: "Immediate notification if the device is removed or tampered with." },
      { name: "Geofencing", detail: "Enter/Exit alerts for custom zones like office, school, warehouse, etc." },
      { name: "Crash/Event Recording", detail: "Built-in motion sensing for impact events and incident timelines." },
    ],
  },
  {
    title: "Technical Specifications",
    table: [
      { name: "Form Factor", detail: "Compact OBD-II dongle" },
      { name: "Location Technology", detail: "GNSS (GPS/GLONASS/QZSS) with Assisted-GPS support" },
      { name: "Protocols", detail: "ISO 15765-4 (CAN), ISO 9141-2, ISO 14230 (KWP2000), SAE J1850 PWM/VPW" },
      { name: "Data Interfaces", detail: "OBD-II PID readout + Cellular/BT/Wi‑Fi (model dependent)" },
      { name: "Storage", detail: "On-device buffer; cloud sync when network is available" },
      { name: "Firmware", detail: "OTA (Over‑the‑Air) updates" },
    ],
  },
  {
    title: "Cellular & Connectivity",
    table: [
      { name: "Network Options", detail: "2G / 4G LTE Cat‑M1 / NB‑IoT (regional variants)" },
      { name: "Data Communication", detail: "TCP/UDP/MQTT; fallbacks to SMS for critical alerts (model dependent)" },
      { name: "Wireless", detail: "Bluetooth Low Energy (BLE) / Wi‑Fi for pairing & local diagnostics (select models)" },
      { name: "SIM", detail: "Nano SIM or eSIM options" },
    ],
  },
  {
    title: "Power",
    table: [
      { name: "Input", detail: "From vehicle OBD-II port (typically 12V; supports 9–16V)" },
      { name: "Consumption", detail: "Ultra‑low standby; smart sleep to protect vehicle battery" },
      { name: "Backup Battery", detail: "Optional built‑in battery for unplug alerts & last‑known location" },
    ],
  },
  {
    title: "Vehicle Compatibility",
    table: [
      { name: "Standard", detail: "OBD‑II/EOBD compliant vehicles" },
      { name: "Passenger Cars & SUVs", detail: "Most petrol/diesel vehicles from ~2008+ (region dependent)" },
      { name: "Light Commercial", detail: "Vans & pickups with OBD‑II ports" },
      { name: "Notes", detail: "Some heavy‑duty or older vehicles may require an adapter or are not supported" },
    ],
  },
  {
    title: "Platform & Apps",
    table: [
      { name: "Dashboard", detail: "Web & mobile dashboard for live tracking, analytics, and reports." },
      { name: "Reports", detail: "Trips, fuel usage (estimated), idle time, driver score, DTC history." },
      { name: "APIs & Webhooks", detail: "REST APIs for integration with fleet ERPs and 3rd‑party apps." },
      { name: "User Roles", detail: "Admin, Manager, Driver—granular permissions & alerts." },
    ],
  },
  {
    title: "Use Cases",
    table: [
      { name: "Personal Vehicles", detail: "Health monitoring, driver coaching, theft alerts, teen driver safety." },
      { name: "SMB Fleets", detail: "Quick deployment across vehicles; monitor usage, routes, and maintenance." },
      { name: "Leasing & Rentals", detail: "Protect assets, verify usage, reduce disputes with trip logs." },
      { name: "Corporate Mobility", detail: "Reimbursements via trip classification—business vs. personal." },
    ],
  },
  {
    title: "Compliance & Security",
    table: [
      { name: "Data Security", detail: "Encrypted data in transit & at rest; role‑based access control." },
      { name: "Privacy", detail: "GDPR‑aligned data handling; configurable retention policies." },
      { name: "Standards", detail: "Designed to comply with regional telematics norms and safety guidelines." },
    ],
  },
];

// ----- Accordion Item Component -----
const AccordionItem = ({ title, table, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 transition-colors hover:bg-gray-50 px-4"
    >
      {title}
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
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
                  <td className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{row.name}</td>
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

// ----- Page Component -----
export default function OBDIIPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-white pt-20">
      {/* Hero */}
      <section className="bg-white text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-5xl text-black font-bold mb-6">
              OBD‑II Vehicle Tracker – Plug & Play Telematics
            </h1>
            <p className="text-lg text-black mb-6">
              Turn any car into a connected vehicle in seconds. Our OBD‑II tracker gives you
              live engine diagnostics, real‑time location, driver behavior insights, and instant
              alerts—all without complex installation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/customercare">
                <button className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
                  Request a Demo
                </button>
              </Link>
             
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img src={obdImg} alt="OBD-II Tracker" className="max-w-sm w-full drop-shadow-2xl rounded-lg" />
          </motion.div>
        </div>
      </section>

      {/* Why OBD-II */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Choose an OBD‑II Tracker?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          OBD‑II devices access engine and vehicle health data directly from the ECU using
          standardized PIDs. That means faster deployments, richer diagnostics, and accurate
          driving insights for personal cars and business fleets—without hardwiring.
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to go plug & play?</h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          Get started with fast, wire‑free telematics and unlock actionable insights from your fleet.
        </p>
        <Link to="/customercare">
          <button className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-lg shadow-lg hover:bg-yellow-100">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
