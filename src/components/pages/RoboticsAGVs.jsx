import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaCogs, FaTruck, FaBoxes, FaUserShield, FaChartLine } from "react-icons/fa";
import RoboticsAGV from "../../images/IOT.png"; // Replace with your actual AGV image path
import Footer from "../Footer";

function RoboticsAGVs() {
  const services = [
    {
      icon: <FaIndustry className="text-yellow-500 text-4xl mb-4" />,
      title: "Industrial Automation",
      description:
        "Traxo provides AGV solutions that integrate seamlessly into manufacturing workflows, reducing manual labor and boosting production efficiency."
    },
    {
      icon: <FaCogs className="text-yellow-500 text-4xl mb-4" />,
      title: "Custom AGV Design",
      description:
        "We develop AGVs tailored to your facility’s layout, payload needs, and operational goals, ensuring maximum performance."
    },
    {
      icon: <FaTruck className="text-yellow-500 text-4xl mb-4" />,
      title: "Logistics & Material Handling",
      description:
        "Our AGVs transport raw materials, finished goods, and components with precision, reducing delays in the supply chain."
    },
    {
      icon: <FaBoxes className="text-yellow-500 text-4xl mb-4" />,
      title: "Warehouse Integration",
      description:
        "Seamless integration with Warehouse Management Systems for automated storage, retrieval, and inventory control."
    },
    {
      icon: <FaUserShield className="text-yellow-500 text-4xl mb-4" />,
      title: "Safety & Compliance",
      description:
        "Equipped with obstacle detection and safety sensors, our AGVs meet global safety standards for industrial automation."
    },
    {
      icon: <FaChartLine className="text-yellow-500 text-4xl mb-4" />,
      title: "Performance Monitoring",
      description:
        "Real-time data analytics to track AGV performance, uptime, and productivity, helping optimize operational decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-yellow-400 text-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Robotics Automated Guided Vehicles (AGVs)
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Traxo’s Robotics AGVs are revolutionizing material handling in warehouses,
            factories, and industrial facilities. With autonomous navigation, precision
            control, and seamless integration, we help businesses boost productivity and safety.
          </p>
          <a
            href="/customercare"
            className="inline-block bg-white text-yellow-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Request a Demo
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src={RoboticsAGV}
            alt="Robotics AGV"
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </section>

      {/* Traxo Services Section */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Traxo Offers for Robotics AGVs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black p-6 rounded-lg"
            >
              {service.icon}
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default RoboticsAGVs;
