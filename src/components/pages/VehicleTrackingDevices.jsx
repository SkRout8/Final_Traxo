// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import traxo from "../../images/traxo2.png";
// import Footer from "../Footer";
// import { Link } from "react-router-dom";

// // Accordion Data with table format
// const accordionData = [
//   {
//     title: "Features",
//     table: [
//       { name: "Integrated SOS", detail: "Instantly alerts emergency contacts with real-time location." },
//       { name: "Built-in Battery Backup", detail: "Long-lasting performance for uninterrupted tracking." },
//       { name: "Higher GNSS Accuracy", detail: "Precise location tracking for optimal navigation." },
//       { name: "Tamper Alert", detail: "Notifies when device is disconnected or tampered." },
//       { name: "Geo-fencing", detail: "Alerts when a vehicle enters or exits designated areas." },
//       { name: "Over-Speed Alert", detail: "Real-time alerts for speeding violations." },
//     ],
//   },
//   {
//     title: "Specifications",
//     table: [
//       { name: "Dimensions", detail: "85mm x 65mm x 25mm" },
//       { name: "Weight", detail: "120g" },
//       { name: "Operating Temperature", detail: "-20°C to 70°C" },
//       { name: "Humidity", detail: "5% to 95% non-condensing" },
//       { name: "Ingress Protection", detail: "IP65 (Dust and Water Resistant)" },
//       { name: "Location Technology", detail: "GPS, GLONASS, QZSS, SBAS" },
//     ],
//   },
//   {
//     title: "Cellular & Network",
//     table: [
//       { name: "2G", detail: "Quad-Band GSM/GPRS" },
//       { name: "4G LTE", detail: "Cat-M1/NB-IoT (Optional Model)" },
//       { name: "SIM Type", detail: "Nano SIM / eSIM Support" },
//       { name: "Data Communication", detail: "TCP/UDP/SMS" },
//       { name: "Antenna", detail: "Internal GSM and GNSS antenna" },
//     ],
//   },
//   {
//     title: "Power",
//     table: [
//       { name: "Input Voltage", detail: "8V – 32V DC" },
//       { name: "Battery", detail: "500mAh Li-Polymer Rechargeable" },
//       { name: "Power Consumption", detail: "< 20mA in idle mode" },
//       { name: "Battery Backup", detail: "Up to 8 hours (standard tracking)" },
//     ],
//   },
//   {
//     title: "Compliance & Certifications",
//     table: [
//       { name: "Certification", detail: "AIS 140 Certified by ARAI" },
//       { name: "Quality", detail: "ISO 9001:2015 Quality Management" },
//       { name: "Ingress Protection", detail: "IP65 Waterproof and Dustproof" },
//       { name: "Standard", detail: "Meets Indian Automotive Industry Standards" },
//     ],
//   },
//   {
//     title: "Use Cases",
//     table: [
//       { name: "Public Transport", detail: "Vehicle Tracking for buses & commercial fleets" },
//       { name: "Fleet Management", detail: "Logistics and delivery tracking" },
//       { name: "School Bus", detail: "Safety Monitoring" },
//       { name: "Emergency Vehicles", detail: "Ambulance & disaster response tracking" },
//       { name: "Taxi", detail: "Ride-Hailing and monitoring" },
//     ],
//   },
// ];

// // Accordion Item Component
// const AccordionItem = ({ title, table, isOpen, onClick }) => (
//   <div className="border-b border-gray-200">
//     <button
//       onClick={onClick}
//       className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 transition-colors hover:bg-gray-50 px-4"
//     >
//       {title}
//       <motion.div
//         animate={{ rotate: isOpen ? 180 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <ChevronDown />
//       </motion.div>
//     </button>
//     <AnimatePresence initial={false}>
//       {isOpen && (
//         <motion.div
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: "auto", opacity: 1 }}
//           exit={{ height: 0, opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           className="overflow-hidden"
//         >
//           <table className="min-w-full text-left border-t">
//             <tbody>
//               {table.map((row, idx) => (
//                 <tr key={idx} className="border-b">
//                   <td className="px-4 py-2 font-medium text-gray-700">{row.name}</td>
//                   <td className="px-4 py-2 text-gray-600">{row.detail}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </div>
// );

// export default function VehicleTrackingDevices() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div className="w-full bg-white pt-20">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-gray-900 to-yellow-300 text-white py-20">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="flex-1"
//           >
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//               AIS 140 VLTD – Advanced Vehicle Tracking Device
//             </h1>
//             <p className="text-lg text-gray-100 mb-6">
//               Ensure compliance, safety, and efficiency with our AIS 140 certified VLTD.
//               Designed for precision, durability, and real-time monitoring.
//             </p>
//            <Link to="/customercare">
//   <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
//     Request a Demo
//   </button>
// </Link>
//           </motion.div>
//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="flex-1 flex justify-center"
//           >
//             <img
//               src={traxo}
//               alt="AIS 140 VLTD Device"
//               className="max-w-sm w-full drop-shadow-2xl rounded-lg"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Detailed Description */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold text-gray-800 mb-6"
//         >
//           Why Choose AIS 140 VLTD?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-lg text-gray-700 leading-relaxed mb-10"
//         >
//           The AIS 140 VLTD is a government-mandated tracking device for all public transport
//           and commercial vehicles in India. It ensures passenger safety, real-time monitoring,
//           and compliance with transport regulations. Our device stands out with superior GNSS
//           accuracy, rugged design, and seamless network connectivity across urban and rural areas.
//         </motion.p>

//         {/* Accordion */}
//         <div className="bg-white shadow-lg rounded-lg border border-gray-100">
//           {accordionData.map((item, index) => (
//             <AccordionItem
//               key={index}
//               title={item.title}
//               table={item.table}
//               isOpen={openIndex === index}
//               onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             />
//           ))}
//         </div>
//       </section>

//      <section>
//       <Footer/>
//      </section>
    
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import traxo from "../../images/traxo22.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function VehicleTrackingDevices() {
  return (
    <div className="w-full bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-yellow-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              AIS 140 VLTD – Advanced Vehicle Tracking Device
            </h1>
            <p className="text-lg text-gray-100 mb-6">
              Ensure compliance, safety, and efficiency with our AIS 140 certified VLTD.
              Designed for precision, durability, and real-time monitoring.
            </p>
            <Link to="/customercare">
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
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

      {/* Company Statement */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Why Choose Traxo for AIS 140 VLTD?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 leading-relaxed mb-10"
        >
          At <strong>Traxo</strong>, we are proud manufacturers of the AIS 140 VLTD (Vehicle Location
          Tracking Device), fully certified and compliant with the latest transport safety standards in India. 
          Our devices are designed and assembled with precision, ensuring long-lasting durability and unmatched GNSS 
          location accuracy. Beyond manufacturing, we offer end-to-end <strong>GPS tracking solutions</strong> that help 
          you monitor your vehicles in real time — from urban streets to remote rural routes.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-10 text-center"
          >
            Traxo Services on VLTD
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Manufacturing Excellence</h3>
              <p className="text-gray-700">
                Our AIS 140 VLTD devices are manufactured in-house using high-quality components,
                ensuring robust performance, reliability, and compliance with industry standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Real-Time GPS Tracking</h3>
              <p className="text-gray-700">
                Get live location updates for your entire fleet with our advanced tracking platform.
                Stay informed with route history, speed monitoring, and geo-fencing alerts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Custom Solutions</h3>
              <p className="text-gray-700">
                Whether you manage public transport, logistics, or emergency services, 
                we tailor our GPS tracking and VLTD configurations to suit your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">24/7 Support</h3>
              <p className="text-gray-700">
                Our technical support team is available round the clock to ensure your tracking
                systems run smoothly without interruptions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Data Security</h3>
              <p className="text-gray-700">
                We ensure that all tracking data is securely stored and transmitted, 
                keeping your business operations safe and compliant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Nationwide Deployment</h3>
              <p className="text-gray-700">
                From metropolitan cities to rural areas, our devices are ready for quick
                installation and activation anywhere in India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
