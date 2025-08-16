// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import Camera from "../../images/Camera.png";

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

// function DashCameras() {
//   const [openIndex, setOpenIndex] = useState(null);

//   // Accordion Data
//   const accordionData = [
//     {
//       title: "Key Features",
//       content: [
//         { label: "Full HD Video Recording", value: "Captures clear 1080p footage." },
//         { label: "Wide-Angle Lens", value: "140° field of view for maximum coverage." },
//         { label: "Loop Recording", value: "Overwrites oldest footage when storage is full." },
//         { label: "G-Sensor", value: "Automatically locks videos during sudden impacts." },
//         { label: "Night Vision", value: "Clear recording in low-light conditions." },
//       ],
//     },
//     {
//       title: "Specifications",
//       content: [
//         { label: "Resolution", value: "1920 x 1080 (Full HD)" },
//         { label: "Frame Rate", value: "30 FPS" },
//         { label: "Lens", value: "140° wide-angle, 6-layer glass lens" },
//         { label: "Display", value: "2.0-inch LCD" },
//         { label: "Storage", value: "Supports microSD up to 128GB" },
//       ],
//     },
//     {
//       title: "Connectivity & Power",
//       content: [
//         { label: "GPS Tracking", value: "Optional, built-in GPS module" },
//         { label: "Wi-Fi", value: "For mobile app connectivity" },
//         { label: "Battery", value: "Supercapacitor for durability" },
//         { label: "Power Supply", value: "DC 12V–24V vehicle power" },
//         { label: "Mount Type", value: "Suction or adhesive mount" },
//       ],
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-gray-900 to-yellow-300 text-white min-h-screen py-12 px-6 pt-36">
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
//             Dash Camera – Advanced Vehicle Monitoring
//           </h1>
//           <p className="text-lg text-white mb-4">
//             Our Dash Camera ensures continuous recording of your journey, capturing every detail for safety, security, and evidence collection. 
//             Equipped with high-definition video, night vision, GPS tracking, and G-sensor technology, it provides unmatched reliability for both personal and commercial vehicles.
//           </p>
//           <p className="text-lg text-white mb-8">
//             Whether you're monitoring fleet operations or safeguarding your personal car, this dash camera offers comprehensive monitoring 
//             capabilities in a compact, durable package.
//           </p>
//           <Link to="/customercare">
//             <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition">
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
//             src={Camera}
//             alt="Dash Camera"
//             className="w-full max-w-md "
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
//         <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Dash Camera?</h2>
//         <p className="text-lg text-whitemb-4">
//           Our dash cameras are designed with both safety and convenience in mind. With built-in GPS and Wi-Fi, 
//           you can track routes, download footage instantly, and share important moments with ease.
//         </p>
//         <p className="text-lg text-white mb-4">
//           The device operates flawlessly in extreme weather conditions, thanks to its high-quality components and rugged build. 
//           From hot summers to freezing winters, you can rely on this dash camera for consistent performance.
//         </p>
//         <p className="text-lg text-white">
//           It’s perfect for individual drivers, rideshare operators, and fleet managers who need to ensure accountability, safety, and compliance.
//         </p>
//       </section>
//     </div>
//   );
// }

// export default DashCameras;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCar, FaShieldAlt, FaVideo, FaMapMarkedAlt, FaUserShield, FaTools } from "react-icons/fa";
import Camera from "../../images/Camera.png"; // Replace with your actual image

function DashCameras() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-yellow-300 text-white min-h-screen py-12 px-6 pt-36">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Dash Camera – Advanced Vehicle Monitoring
          </h1>
          <p className="text-lg text-white mb-4">
            Traxo’s Dash Cameras capture every detail of your journey, providing crystal-clear
            video evidence for safety, security, and operational efficiency. 
            With GPS tracking, night vision, and motion detection, they offer unmatched reliability.
          </p>
          <p className="text-lg text-white mb-8">
            Perfect for fleet managers, rideshare operators, and personal car owners, our cameras
            combine high-tech features with rugged durability.
          </p>
          <Link to="/customercare">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition">
              Request a Demo
            </button>
          </Link>
        </motion.div>

        {/* Right Image - No shadow or rounded */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <img src={Camera} alt="Dash Camera" className="w-full max-w-md" />
        </motion.div>
      </section>

      {/* Traxo Services Section */}
      <section className="max-w-7xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Traxo Services for Dash Cameras
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg"
          >
            <FaCar className="text-black text-4xl mb-4" />
            <h3 className="font-semibold text-black text-xl mb-2">Fleet Monitoring</h3>
            <p className="text-black">
              Track and manage your entire fleet with real-time location, driver behavior, and video monitoring.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg"
          >
            <FaShieldAlt className="text-black text-4xl mb-4" />
            <h3 className="font-semibold text-black text-xl mb-2">Driver Safety</h3>
            <p className="text-black">
              Protect drivers with automated alerts, collision detection, and secure data storage for incident review.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg"
          >
            <FaVideo className="text-black text-4xl mb-4" />
            <h3 className="font-semibold text-black text-xl mb-2">Evidence Recording</h3>
            <p className="text-black">
              High-definition video footage to provide irrefutable evidence in case of disputes, accidents, or claims.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg"
          >
            <FaMapMarkedAlt className="text-black text-4xl mb-4" />
            <h3 className="font-semibold text-black text-xl mb-2">GPS Integration</h3>
            <p className="text-black">
              Combine video with precise GPS coordinates for full situational awareness and journey mapping.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg"
          >
            <FaUserShield className="text-black text-4xl mb-4" />
            <h3 className="font-semibold text-black text-xl mb-2">Security Alerts</h3>
            <p className="text-black">
              Get instant notifications for unauthorized vehicle movement or suspicious activity detection.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg"
          >
            <FaTools className="text-black text-4xl mb-4" />
            <h3 className="font-semibold text-black text-xl mb-2">Easy Maintenance</h3>
            <p className="text-black">
              Simple setup and cloud-based software updates keep your dash camera running at peak performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="max-w-7xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-white mb-6 rounded-lg">Why Choose Traxo Dash Cameras?</h2>
        <p className="text-lg text-white mb-4">
          Built for reliability and performance, Traxo dash cameras ensure safety, compliance, and operational efficiency.
        </p>
        <p className="text-lg text-white mb-4">
          Our devices are engineered to withstand extreme weather conditions and deliver consistent, high-quality video day or night.
        </p>
        <p className="text-lg text-white">
          Whether you manage a fleet or drive for personal use, Traxo’s solutions provide the protection and insights you need.
        </p>
      </section>
    </div>
  );
}

export default DashCameras;
