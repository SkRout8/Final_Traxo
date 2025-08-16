
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IOT from "../../images/IOT.png";

// const accordionData = [
//   {
//     title: "Technical Specifications",
//     content: [
//       ["Processor", "Quad-core ARM Cortex-A53 1.5GHz"],
//       ["Memory", "2GB DDR4 RAM"],
//       ["Storage", "32GB eMMC, expandable via SD card"],
//       ["Connectivity", "Wi-Fi, Ethernet, LTE, Bluetooth 5.0"],
//     ],
//   },
//   {
//     title: "Supported Networks",
//     content: [
//       ["Cellular", "4G LTE, 3G, NB-IoT, LoRaWAN"],
//       ["Frequency Bands", "Global LTE Bands Supported"],
//       ["GPS", "GNSS with high-accuracy positioning"],
//     ],
//   },
//   {
//     title: "Power & Environment",
//     content: [
//       ["Input Voltage", "9–36V DC"],
//       ["Power Consumption", "≤ 5W"],
//       ["Operating Temperature", "-20°C to +70°C"],
//       ["Enclosure", "IP67 Industrial Grade"],
//     ],
//   },
// ];

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-gray-100 text-black  transition"
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white"
          >
            <table className="w-full text-left border-collapse">
              <tbody>
                {content.map(([key, value], i) => (
                  <tr key={i} className="border-t">
                    <td className="px-6 py-3 font-medium text-gray-700">{key}</td>
                    <td className="px-6 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function IndustrialIoTDevices() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-50 text-gray-800 pt-28">
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-800 to-yellow-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">
              Industrial IoT Devices
            </h1>
            <p className="text-lg">
              Revolutionizing industrial operations with smart, connected devices that
              improve efficiency, safety, and decision-making.
            </p>
          </div>
          <img src={IOT} alt="Industrial IoT" className="w-96 " />
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">What Are Industrial IoT Devices?</h2>
          <p className="mb-4">
            Industrial IoT (IIoT) devices connect machines, sensors, and analytics to
            provide real-time insights into industrial processes. From predictive
            maintenance to supply chain optimization, IIoT is at the core of modern
            industry transformation.
          </p>
          <p>
            With seamless integration into your existing infrastructure, these devices
            ensure better operational visibility, higher productivity, and enhanced
            safety measures.
          </p>
        </div>
        <img src={IOT} alt="IoT Devices" className="" />
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Traxo Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Real-time Data Collection",
              "Predictive Maintenance",
              "Seamless Cloud Integration",
              "High-Precision GPS Tracking",
              "Secure Data Encryption",
              "Remote Monitoring & Control",
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Specifications</h2>
        <div className="bg-white shadow-lg rounded-lg border border-gray-100 divide-y">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-yellow-400 text-gray-900 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Upgrade Your Industry Today</h2>
        <p className="mb-6">
          Discover how Industrial IoT Devices can transform your business operations.
        </p>
        <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition">
          Request a Demo
        </button>
      </section>
    </div>
  );
}
