import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import heroImg from "../../images/traxo1.png"; // update with your actual asset path

// -------------------- Accordion Data --------------------
const accordionData = [
  {
    title: "Key Capabilities",
    rows: [
      { name: "Multi‑Sensor Fusion", detail: "Combine mmWave radar depth/velocity with LiDAR point‑cloud geometry for robust perception." },
      { name: "All‑Weather Performance", detail: "Radar pierces fog, rain, and dust; LiDAR delivers high‑resolution object shapes in clear conditions." },
      { name: "Real‑Time Tracking", detail: "Multi‑object tracking with ID persistence, trajectory prediction, and occupancy mapping." },
      { name: "Edge AI", detail: "On‑device filtering, clustering (DBSCAN), object classification, and sensor confidence scoring." },
      { name: "Open APIs", detail: "ROS/ROS2 topics, gRPC/REST, and WebSocket streams for easy app integration." },
    ],
  },
  {
    title: "Radar Specifications",
    rows: [
      { name: "Band", detail: "77–81 GHz mmWave (automotive)" },
      { name: "Range", detail: "Up to 200 m (vehicle scale); near‑field module up to 30 m for robotics." },
      { name: "Velocity", detail: "± 70 m/s radial speed; micro‑Doppler support (model dependent)." },
      { name: "FOV", detail: "± 60° azimuth, ± 15° elevation (typical)" },
      { name: "Resolution", detail: "Range < 0.1 m; velocity < 0.1 m/s (typical)" },
      { name: "Interfaces", detail: "CAN / Ethernet / UART; PPS sync input; Trigger I/O." },
    ],
  },
  {
    title: "LiDAR Specifications",
    rows: [
      { name: "Type", detail: "Solid‑state or mechanical spinning (SKU dependent)" },
      { name: "Range", detail: "Up to 120 m @ 10% reflectivity (typical)" },
      { name: "Vertical Channels", detail: "16 / 32 / 64 lines (model options)" },
      { name: "Angular Res.", detail: "0.1°–0.4° (H); 0.2°–2.0° (V), SKU dependent" },
      { name: "Point Rate", detail: "Up to 1.2M pts/s" },
      { name: "Wavelength", detail: "905 nm or 1550 nm (SKU dependent)" },
    ],
  },
  {
    title: "Fusion & Time Sync",
    rows: [
      { name: "Clocking", detail: "PTP (IEEE‑1588), PPS/Time‑In, and hardware trigger lines for sensor alignment." },
      { name: "Calibration", detail: "Extrinsic calibration matrix (6‑DoF); on‑device calibration helper UI." },
      { name: "Fusion Modes", detail: "Early (raw), mid‑level (tracks), late (object level) fusion selectable per pipeline." },
      { name: "Outputs", detail: "Fused object list, free‑space grid, and confidence heatmaps." },
    ],
  },
  {
    title: "Software & SDK",
    rows: [
      { name: "SDKs", detail: "C++/Python bindings; ROS/ROS2 packages; sample apps for mapping and tracking." },
      { name: "Visualization", detail: "Web UI with 3D point‑cloud viewer, radar detections, and track overlays." },
      { name: "Updates", detail: "Secure OTA firmware and model updates with rollback." },
      { name: "Export", detail: "PCAP/ROS bag/CSV capture; anonymization tools for compliance." },
    ],
  },
  {
    title: "Power & Environmental",
    rows: [
      { name: "Input Voltage", detail: "9–36 V DC (vehicle/RGV/AGV compatible)" },
      { name: "Consumption", detail: "15–35 W typical depending on LiDAR SKU" },
      { name: "Ingress", detail: "IP65/67 device options; automotive‑grade connectors" },
      { name: "Operating Temp", detail: "‑20 °C to +65 °C (extended options available)" },
      { name: "EMC/ESD", detail: "Designed to meet CISPR‑25/ISO‑7637 (vehicle) variants" },
    ],
  },
  {
    title: "Use Cases",
    rows: [
      { name: "Autonomous & ADAS", detail: "High‑confidence perception for braking/ACC, blind‑spot, and collision avoidance." },
      { name: "Smart Infrastructure", detail: "Intersection analytics, people/vehicle counting, and safety zones." },
      { name: "Robotics & AMRs", detail: "Navigation in warehouses and outdoor sites with dynamic obstacle handling." },
      { name: "Security & Perimeter", detail: "Intrusion detection in low‑visibility environments with low false alarms." },
      { name: "Industrial Vehicles", detail: "Cranes, mining, and ports—range/velocity sensing in harsh conditions." },
    ],
  },
  {
    title: "Radar vs. LiDAR (At a Glance)",
    rows: [
      { name: "Resolution", detail: "LiDAR higher spatial resolution; radar lower but includes velocity via Doppler." },
      { name: "Weather Robustness", detail: "Radar excels in rain/fog/dust; LiDAR best in clear conditions." },
      { name: "Range & Cost", detail: "Radar often longer range/cost‑effective; LiDAR offers detailed shape at higher cost." },
      { name: "Best Together", detail: "Fusion delivers superior reliability and fewer false positives." },
    ],
  },
  {
    title: "Compliance & Safety",
    rows: [
      { name: "Eye Safety (LiDAR)", detail: "Class 1 eye‑safe per IEC 60825‑1 (for 905/1550 nm devices)." },
      { name: "RF (Radar)", detail: "Operates in regulated 77–81 GHz bands; designed to meet regional RF norms." },
      { name: "Data Privacy", detail: "On‑device anonymization and retention controls for public deployments." },
    ],
  },
];

// -------------------- Reusable Components --------------------
const AccordionItem = ({ title, rows, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 transition-colors hover:bg-gray-50 px-4"
    >
      {title}
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
        <ChevronDown />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <table className="min-w-full text-left border-t">
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b align-top">
                  <td className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap">{r.name}</td>
                  <td className="px-4 py-2 text-gray-600">{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// -------------------- Page --------------------
export default function RadarLidar() {
  const [open, setOpen] = useState(null);

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
              Radar + LiDAR Perception Suite
            </h1>
            <p className="text-lg text-black mb-6">
              A fused sensing platform that pairs mmWave radar with high‑resolution LiDAR to deliver
              dependable perception in all lighting and weather conditions. Built for ADAS, robotics,
              and smart infrastructure deployments.
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
              src={heroImg}
              alt="Radar + LiDAR Device"
              className="max-w-sm w-full drop-shadow-2xl rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Radar + LiDAR?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          Each modality has strengths: LiDAR excels at high‑resolution geometry; radar provides
          velocity and resilience in adverse conditions. Fusing both dramatically reduces false
          positives, improves object classification, and yields better path planning.
        </motion.p>

        <div className="bg-white shadow-lg rounded-lg border border-gray-100">
          {accordionData.map((sec, idx) => (
            <AccordionItem
              key={sec.title}
              title={sec.title}
              rows={sec.rows}
              isOpen={open === idx}
              onToggle={() => setOpen(open === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Build safer, smarter autonomy</h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          Talk to our team about the right radar/LiDAR configuration, mounts, and SDK for your use case.
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