import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import afmImg from "../../images/auto_fire_meter.png"; // replace with your actual image path

// -------------------- Accordion Data --------------------
const accordionData = [
  {
    title: "Key Features",
    table: [
      { name: "Unified Panel", detail: "Single controller for fire alarm, pump control, and system health." },
      { name: "Multi‑Sensor Fusion", detail: "Reads smoke, heat, flame, gas, flow, and pressure sensors simultaneously." },
      { name: "Event Automation", detail: "Auto siren, strobe, pump start, solenoid valve, and SMS/Email alerts on trigger." },
      { name: "24×7 Monitoring", detail: "Real‑time analytics with edge buffering during connectivity loss." },
      { name: "Zone Mapping", detail: "Configurable zones/floors with per‑zone thresholds and delays." },
      { name: "Maintenance Mode", detail: "Isolate zones for testing without affecting active protection." },
      { name: "Remote Access", detail: "Mobile & web dashboard for live status, ACK/RESET, and reports." },
      { name: "Tamper & Power Alerts", detail: "Enclosure open, mains fail, and battery low notifications." },
    ],
  },
  {
    title: "Sensor Inputs",
    table: [
      { name: "Smoke/Photoelectric", detail: "2‑wire/4‑wire loops with EOL supervision (model dependent)." },
      { name: "Heat/Rate‑of‑Rise", detail: "Fixed temperature and ROR detectors for harsh areas." },
      { name: "Flame Detector", detail: "UV/IR input support for critical zones (fuel/paint areas)." },
      { name: "Gas/Leak", detail: "LPG, CNG, CO sensors with programmable thresholds." },
      { name: "Flow Switch", detail: "Line flow detection to confirm water discharge." },
      { name: "Pressure Transducer", detail: "Suction/discharge line monitoring for jockey & main pumps." },
      { name: "Manual Call Point", detail: "Break‑glass triggers with latch & reset." },
      { name: "Door/Tamper", detail: "NO/NC dry contacts for cabinet and hydrant riser doors." },
    ],
  },
  {
    title: "Outputs & Control",
    table: [
      { name: "Sounder/Strobe", detail: "24V DC outputs with NAC supervision; synchronized cadence." },
      { name: "Pump Control", detail: "Auto/Manual start for Jockey, Main, and Diesel pumps with interlocks." },
      { name: "Solenoid/Deluge", detail: "Programmable relay outputs for zone‑based release." },
      { name: "Fire Trip", detail: "Common fire, fault, and supervisory relays for BMS integration." },
      { name: "Hooter Silence & System Reset", detail: "Front‑panel & remote ACK/RESET with audit log." },
    ],
  },
  {
    title: "Technical Specifications",
    table: [
      { name: "Zones", detail: "8 / 16 / 32 zones (expandable) with individual LED indications." },
      { name: "I/O Capacity", detail: "Up to 64 inputs and 32 outputs (mix of analog/digital)." },
      { name: "Processing", detail: "ARM‑based MCU with watchdog; real‑time clock and event log." },
      { name: "Storage", detail: "On‑device buffer for 10,000+ events; FIFO rotation." },
      { name: "Display", detail: "3.5\"–7\" TFT with capacitive keys; buzzer for local alerts." },
      { name: "Operating Temp", detail: "‑10°C to 55°C; RH up to 95% non‑condensing." },
    ],
  },
  {
    title: "Connectivity & Integration",
    table: [
      { name: "Ethernet/Wi‑Fi/4G", detail: "Multiple SKUs; primary + fallback links supported." },
      { name: "Protocols", detail: "MQTT/HTTP(S) to cloud; Modbus RTU/TCP for BMS/SCADA." },
      { name: "API/Webhooks", detail: "REST APIs for incident export, alarms, and asset sync." },
      { name: "Location", detail: "Optional GNSS for campus mapping; per‑panel geotag." },
    ],
  },
  {
    title: "Power & Enclosure",
    table: [
      { name: "Input Supply", detail: "100–240V AC, 50/60Hz with SMPS and surge protection." },
      { name: "Battery Backup", detail: "12V/7Ah or 12V/12Ah SLA; up to 24 hours standby + 30 min alarm (typical)." },
      { name: "Enclosure", detail: "Powder‑coated metal cabinet; IP54 indoor. IP65 outdoor variant available." },
      { name: "Isolation", detail: "OPT‑isolated inputs/relays for electrical noise immunity." },
    ],
  },
  {
    title: "Compliance & Safety",
    table: [
      { name: "Design Intent", detail: "Engineered to align with local fire codes and widely accepted practices (e.g., IS/NBC/NFPA)." },
      { name: "Records", detail: "Audit log with timestamps, operator name, and action trail." },
      { name: "Self‑Diagnostics", detail: "Line fault, ground fault, device missing, and battery health checks." },
    ],
  },
  {
    title: "Use Cases",
    table: [
      { name: "Commercial Buildings", detail: "Offices, malls, hotels with multi‑floor zoning and BMS integration." },
      { name: "Industrial", detail: "Manufacturing, chemical storage, paint shops with flame/gas monitoring." },
      { name: "Warehouses & Logistics", detail: "Sprinkler/Deluge control, pump health, and incident forensics." },
      { name: "Healthcare & Education", detail: "Hospitals, labs, schools—strict alerting and evacuation workflows." },
      { name: "Data Centers", detail: "Early detection, pre‑action/clean agent control (where applicable)." },
    ],
  },
];

// -------------------- Accordion Item --------------------
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
                <tr key={idx} className="border-b align-top">
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

// -------------------- Page Component --------------------
export default function AutoFireMeter() {
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
              AutoFireMeter — Intelligent Fire Monitoring & Control
            </h1>
            <p className="text-lg text-black mb-6">
              Monitor, detect, and respond to fire incidents in real time. AutoFireMeter unifies
              multi‑sensor inputs, automated actions, and remote visibility to keep your facility
              compliant and protected 24×7.
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
            <img
              src={afmImg}
              alt="AutoFireMeter Panel"
              className="max-w-sm w-full drop-shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why AutoFireMeter?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          Traditional fire panels raise alarms—AutoFireMeter goes further. It correlates inputs across
          sensors, validates real discharge via flow/pressure, starts pumps automatically, and
          escalates alerts to responsible teams with full event context and audit trails.
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
        <h2 className="text-3xl font-bold text-white mb-4">Protect people, assets, and uptime</h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          Deploy AutoFireMeter across campuses and get actionable visibility with smart automation.
        </p>
        <Link to="/customercare">
          <button className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-lg shadow-lg hover:bg-yellow-100">
            Talk to an Expert
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
