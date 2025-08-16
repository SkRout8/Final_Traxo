import React from "react";
import {
  FaMicrochip, FaCarSide, FaTools, FaCamera, FaParking, FaIndustry, FaRobot,
  FaSatelliteDish, FaShieldAlt, FaCogs, FaLightbulb, FaServer, FaNetworkWired,
  FaCloud, FaMobile, FaLock, FaCertificate, FaMapMarkerAlt, FaBrain, FaSimCard
} from "react-icons/fa";

export default function Manufacture() {
  return (
    <div className="bg-gray-50 pt-16 xl:pt-0 md:pt-0 lg:pt-0 xl:mt-16 lg:mt-16 md:mt-16">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold">Manufacturing Excellence at Traxo India Automation</h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Delivering world-class IoT devices, vehicle robotics, ADAS systems, and advanced communication solutions.
            From concept to manufacturing, we build technology that drives the future.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#services" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200">
              View Our Products
            </a>
            <a href="#contact" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section id="services" className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Manufacturing Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* IoT Device Manufacturing */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaMicrochip className="text-blue-600 text-3xl" />
              <h3 className="text-xl font-semibold">IoT Device Manufacturing</h3>
            </div>
            <p className="text-gray-600 mb-3">Smart devices for transportation, industry, and smart cities.</p>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Vehicle Tracking Devices</li>
              <li>OBD-II Telematics</li>
              <li>Dash Cameras</li>
              <li>Smart Parking Systems</li>
              <li>Industrial IoT Devices</li>
              <li>Robotics & AGVs</li>
            </ul>
          </div>

          {/* Vehicle Robotics */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaRobot className="text-green-600 text-3xl" />
              <h3 className="text-xl font-semibold">Vehicle Robotics Manufacturing</h3>
            </div>
            <p className="text-gray-600 mb-3">Innovative robotics for mobility, defense, and automation.</p>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Autonomous Vehicle Systems</li>
              <li>Robotic Delivery Vehicles</li>
              <li>In-Vehicle Robotics</li>
              <li>AGVs and AMRs</li>
              <li>Teleoperation Devices</li>
              <li>Defense Robotics</li>
            </ul>
          </div>

          {/* IoT Product Design */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaCogs className="text-orange-600 text-3xl" />
              <h3 className="text-xl font-semibold">IoT Product Design & Engineering</h3>
            </div>
            <p className="text-gray-600 mb-3">Full lifecycle design and engineering services.</p>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Concept & Requirement Definition</li>
              <li>Hardware Design</li>
              <li>Firmware Development</li>
              <li>Networking & Connectivity</li>
              <li>Cloud Backend & API</li>
              <li>Mobile Apps</li>
              <li>Testing & Compliance</li>
            </ul>
          </div>

          {/* ADAS */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaCarSide className="text-red-600 text-3xl" />
              <h3 className="text-xl font-semibold">Advanced Driver Assistance Systems</h3>
            </div>
            <p className="text-gray-600 mb-3">Safety-enhancing technologies for vehicles.</p>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Cameras</li>
              <li>Radar & LIDAR</li>
              <li>Ultrasonic Sensors</li>
              <li>GPS + IMU</li>
              <li>AI & Computer Vision</li>
            </ul>
          </div>

          {/* V2X */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaNetworkWired className="text-purple-600 text-3xl" />
              <h3 className="text-xl font-semibold">V2X Communication</h3>
            </div>
            <p className="text-gray-600">Vehicle-to-everything communication for connected mobility.</p>
          </div>

          {/* eSIM */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaSimCard className="text-yellow-500 text-3xl" />
              <h3 className="text-xl font-semibold">M2M eSIM Manufacturing</h3>
            </div>
            <p className="text-gray-600">Secure eSIM production for IoT and industrial devices.</p>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              We’re here to answer your queries and discuss how our manufacturing expertise can support your business.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Phone:</strong> +91-9876543210</li>
              <li><strong>Email:</strong> contact@traxoindia.com</li>
              <li><strong>Address:</strong> Plot 45, Industrial Area, Pune, India</li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-xl shadow-lg space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg border border-gray-300"></textarea>
            <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
              Send Message
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}
