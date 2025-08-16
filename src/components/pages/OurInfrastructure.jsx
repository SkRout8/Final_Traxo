import React from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaServer,
  FaWarehouse,
  FaCogs,
  FaTruck,
  FaTools
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaIndustry />,
    title: "Manufacturing Units",
    desc: "High-capacity plants with automated machinery ensuring precision and speed."
  },
  {
    icon: <FaServer />,
    title: "Data Centers",
    desc: "Secure and scalable infrastructure for seamless digital operations."
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing",
    desc: "Optimized storage with climate control and advanced tracking."
  },
  {
    icon: <FaCogs />,
    title: "R&D Labs",
    desc: "Innovation hubs for product testing, prototyping, and research."
  },
  {
    icon: <FaTruck />,
    title: "Logistics Network",
    desc: "Fast, reliable transportation to reach clients worldwide."
  },
  {
    icon: <FaTools />,
    title: "Maintenance Hubs",
    desc: "Technical support centers for on-site and remote assistance."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 }
  })
};

export default function OurInfrastructure() {
  return (
    <div className="relative text-black font-sans overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
       
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-yellow-400 to-white/90 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="min-h-[500px] flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Our Infrastructure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-lg"
        >
          Building excellence with advanced facilities, robust logistics, and
          future-ready technology.
        </motion.p>
      </section>

      {/* Facilities Cards - Staggered Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {facilities.map((facility, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-2 transition-all border border-yellow-300"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-5xl text-black"
              >
                {facility.icon}
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
            <p className="text-gray-700 text-sm">{facility.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-50/80">
        <h2 className="text-3xl font-bold text-center mb-10">Quick Facts</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {[
            { label: "Manufacturing Units", value: "05+" },
            { label: "R&D Labs", value: "03" },
            { label: "Data Centers", value: "02" },
            { label: "Logistics Hubs", value: "12+" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg text-center border border-yellow-300 hover:scale-105 transition"
            >
              <h3 className="text-4xl font-bold text-black">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
