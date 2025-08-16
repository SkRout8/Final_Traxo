import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaBroadcastTower, FaSatellite, FaMicrochip, FaNetworkWired, FaSimCard, FaRobot } from "react-icons/fa";

function AutonomousVehicleSystems() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-yellow-300 text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-[70vh] text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Autonomous Vehicle Systems
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At <span className="font-bold text-yellow-500">Traxo</span>, we are building 
          cutting-edge autonomous vehicle solutions that integrate hardware, sensors, 
          AI, and connectivity to make transportation safer, smarter, and more efficient.
        </motion.p>
      </div>

      {/* Offerings Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature Card */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaCar className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Advanced Driver Assistance</h3>
          <p className="mt-2 text-black">
            Intelligent systems like adaptive cruise control, lane keeping, and 
            collision avoidance powered by AI.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaBroadcastTower className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Radar & LIDAR Integration</h3>
          <p className="mt-2 text-black">
            Precision sensing using LIDAR and RADAR for real-time environment 
            mapping and obstacle detection.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaSatellite className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">GPS + IMU Navigation</h3>
          <p className="mt-2 text-black">
            High-accuracy GPS combined with Inertial Measurement Units for 
            seamless navigation in all terrains.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaMicrochip className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Smart Parking Systems</h3>
          <p className="mt-2 text-black">
            AI-enabled parking assistance and automation with ultrasonic sensors 
            and real-time monitoring.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaSimCard className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">M2M eSIM Manufacturing</h3>
          <p className="mt-2 text-black">
            Seamless connectivity with Machine-to-Machine eSIMs for global 
            communication and telematics.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaNetworkWired className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">V2X Communication</h3>
          <p className="mt-2 text-black">
            Vehicle-to-Everything (V2X) communication for connected vehicles 
            enabling smart traffic and safety solutions.
          </p>
        </motion.div>
      </div>

      {/* Closing Statement */}
      <div className="text-center px-6 pb-16">
        <motion.p
          className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          With Traxo’s autonomous vehicle systems, we are moving towards a future 
          where mobility is autonomous, efficient, and connected to the world around us.
        </motion.p>
      </div>
    </div>
  );
}

export default AutonomousVehicleSystems;
