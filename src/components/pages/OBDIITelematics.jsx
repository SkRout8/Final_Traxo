// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import OBDImage from "../../images/OBD.png"; // replace with your actual image

// // Accordion Item Component
// const AccordionItem = ({ title, content, isOpen, onClick }) => {
//   return (
//     <div className="border-b border-gray-200">
//       <button
//         onClick={onClick}
//         className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none hover:bg-gray-50"
//       >
//         <span className="text-lg font-semibold text-gray-800">{title}</span>
//         <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="px-6 pb-4"
//           >
//             <table className="min-w-full border border-gray-200 text-gray-700">
//               <tbody>
//                 {content.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className={`border-b border-gray-200 ${
//                       idx % 2 === 0 ? "bg-gray-50" : "bg-white"
//                     }`}
//                   >
//                     <td className="py-3 px-4 font-medium">{row.label}</td>
//                     <td className="py-3 px-4">{row.value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// function OBDIITelematics() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const accordionData = [
//     {
//       title: "Key Features",
//       content: [
//         { label: "Plug-and-Play", value: "Easy installation via OBD-II port" },
//         { label: "Real-Time Tracking", value: "GPS + GLONASS location updates" },
//         { label: "Vehicle Diagnostics", value: "Read and clear DTC fault codes" },
//         { label: "Driving Behavior", value: "Monitors speed, harsh braking, idling" },
//         { label: "Alerts", value: "Overspeed, geofence, and ignition alerts" },
//       ],
//     },
//     {
//       title: "Specifications",
//       content: [
//         { label: "Power Supply", value: "OBD-II port, 12V/24V" },
//         { label: "Dimensions", value: "48 x 25 x 31 mm" },
//         { label: "Weight", value: "35g" },
//         { label: "GNSS", value: "GPS + GLONASS" },
//         { label: "Battery", value: "Built-in backup battery (optional)" },
//       ],
//     },
//     {
//       title: "Cellular Network & Power",
//       content: [
//         { label: "Network Type", value: "2G / 4G LTE / NB-IoT (model-specific)" },
//         { label: "Data Transmission", value: "TCP/UDP over cellular" },
//         { label: "Interfaces", value: "OBD-II, CAN bus, Bluetooth (optional)" },
//         { label: "Power Consumption", value: "<1mA in sleep mode" },
//       ],
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-gray-900 to-yellow-300  text-white min-h-screen py-12 px-6 pt-36">
//       {/* Hero Section */}
//       <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex-1"
//         >
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             OBD-II Telematics – Advanced Vehicle Tracking & Diagnostics
//           </h1>
//           <p className="text-lg text-white mb-4">
//             The OBD-II Telematics device offers real-time tracking, detailed diagnostics, and driver behavior monitoring. 
//             Simply plug it into your vehicle’s OBD-II port for instant access to critical performance and safety data.
//           </p>
//           <p className="text-lg text-white mb-8">
//             Ideal for fleet managers, insurance telematics, and personal vehicle owners who want insight, efficiency, 
//             and safety — all in one compact device.
//           </p>
//           <Link to="/customercare">
//             <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-800 hover:text-white transition">
//               Request a Demo
//             </button>
//           </Link>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex-1 flex justify-center"
//         >
//           <img
//             src={OBDImage}
//             alt="OBD-II Telematics"
//             className="w-full max-w-md"
//           />
//         </motion.div>
//       </section>

//       {/* Accordion Section */}
//       <section className="max-w-7xl mx-auto mt-16">
//         <h2 className="text-3xl font-bold text-white mb-8">Product Details</h2>
//         <div className="bg-white shadow-lg rounded-lg border border-gray-100">
//           {accordionData.map((item, index) => (
//             <AccordionItem
//               key={index}
//               title={item.title}
//               content={item.content}
//               isOpen={openIndex === index}
//               onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Extra Info Section */}
//       <section className="max-w-7xl mx-auto mt-20">
//         <h2 className="text-3xl font-bold text-white mb-6">Why Choose OBD-II Telematics?</h2>
//         <p className="text-lg text-white mb-4">
//           This device doesn’t just track — it analyzes. Receive insights on vehicle health, detect risky driving behavior, 
//           and reduce maintenance costs through predictive diagnostics.
//         </p>
//         <p className="text-lg text-white mb-4">
//           Its plug-and-play nature means no complex wiring or setup. You can have it running in minutes and manage your 
//           vehicles with ease.
//         </p>
//         <p className="text-lg text-white">
//           Perfect for improving fleet efficiency, enhancing driver safety, and ensuring compliance with transportation standards.
//         </p>
//       </section>
//     </div>
//   );
// }

// export default OBDIITelematics;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OBDImage from "../../images/OBD.png"; // Replace with your image path
import Footer from "../Footer";

export default function OBDIITelematics() {
  return (
    <div className="w-full bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-yellow-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              OBD-II Telematics – Plug & Play Vehicle Tracking & Diagnostics
            </h1>
            <p className="text-lg text-gray-100 mb-6">
              Our OBD-II Telematics device is a compact, powerful solution for real-time GPS tracking,
              vehicle diagnostics, and driver behavior monitoring. Simply plug it into your OBD-II
              port — no wiring or installation needed.
            </p>
            <Link to="/customercare">
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
                Request a Demo
              </button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={OBDImage}
              alt="OBD-II Telematics"
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
         Traxo service on OBD-II Telematics Device?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          Our OBD-II Telematics device is designed for fleet managers, logistics companies, and
          personal vehicle owners who demand accurate tracking, vehicle health reports, and driver
          behavior analysis. With plug-and-play installation, you can start tracking in minutes.
          We manufacture this device with precision, ensuring quality, durability, and seamless
          GPS connectivity.
        </motion.p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Real-Time GPS Tracking",
              desc: "Monitor vehicle location, speed, and routes instantly.",
            },
            {
              title: "Vehicle Diagnostics",
              desc: "Read and clear fault codes, monitor engine health, and predict maintenance needs.",
            },
            {
              title: "Driver Behavior Monitoring",
              desc: "Track harsh braking, acceleration, and idling to improve safety.",
            },
            {
              title: "Plug-and-Play",
              desc: "No wiring required — just plug into the OBD-II port.",
            },
            {
              title: "Geo-Fencing & Alerts",
              desc: "Get notified when vehicles enter or exit specific zones.",
            },
            {
              title: "Multi-Network Support",
              desc: "Supports 2G, 4G LTE, and NB-IoT for seamless connectivity.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
