import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { IoPeopleOutline, IoBusinessOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import {
  FaHandshake,
  FaHeadset,
  FaServer,
  FaCloud,
  FaPlug,
  FaMobile,
  FaLock,
  FaCertificate,
  FaMapMarkerAlt,
  FaBrain,
  FaSimCard,
  FaDownload,
  FaMicrochip,
  FaNetworkWired,
  FaFileAlt,
  FaSignInAlt,
  FaBoxOpen,
  FaGlobeAsia,
  FaIndustry,
  FaRocket,
  FaCogs,
  FaBullseye,
  FaEye,
  FaProjectDiagram,
  FaCheckCircle,
  FaPuzzlePiece,
  FaLightbulb,
  FaBatteryFull,
  FaCamera,
  FaBell,
  FaCarSide,
  FaTools,
  FaParking,
  FaIdCard,
  FaRobot,
  FaSatelliteDish,
  FaShieldAlt,
  FaSatellite,
  FaBroadcastTower,
  FaFireExtinguisher,
} from "react-icons/fa";
import logo from "../images/logo.png";

const NavbarTraxo = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // any useEffect hooks
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Add the function here
  const handleNavClick = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setIsMobileMenuOpen(false);
  };


  const navItems = [
    { name: "About Us", key: "about", path: "/about", hasDropdown: true, icon: <IoPeopleOutline className="text-lg" /> },
    { name: "Manufacture", key: "manufacture", path: "/manufacture", hasDropdown: true, icon: <IoBusinessOutline className="text-lg" /> },
    { name: "Services", key: "services", path: "/services", hasDropdown: true, icon: <MdOutlineMiscellaneousServices className="text-lg" /> },
    { name: "Products", key: "products", path: "/products", hasDropdown: true, icon: <FaBoxOpen className="text-lg" /> },
    { name: "Dealer Center", key: "dealer", path: "/dealer", hasDropdown: false, icon: <FaHandshake className="text-lg" /> },
    { name: "Customer Centre", key: "customer", path: "/customercare", hasDropdown: false, icon: <FaHeadset className="text-lg" /> },
  ];

  const topNavItems = [
    { name: "Certificate Documents", path: "/CertificateDocuments", icon: <FaFileAlt className="text-sm" /> },
    { name: "Sim Networks", path: "/sim-networks", icon: <FaNetworkWired className="text-sm" /> },
    { name: "VLTD Backends", path: "/vltd-backends", icon: <FaMicrochip className="text-sm" /> },
    { name: "Downloads", path: "/downloads", icon: <FaDownload className="text-sm" /> },
    { name: "Logins", path: "/login", icon: <FaSignInAlt className="text-sm" /> },
  ];

  const dropdownContent = {
    about: [
      { icon: <FaRocket />, label: "Our Story", path: "/about/our-story" },
      { icon: <FaIndustry />, label: "Our Strengths", path: "/about/our-strengths" },
      { icon: <FaCogs />, label: "Our Infrastructure", path: "/about/our-infrastructure" },
      { icon: <FaGlobeAsia />, label: "Market Presence", path: "/about/market-presence" },
      { icon: <FaBullseye />, label: "Our Mission", path: "/about/our-mission" },
      { icon: <FaEye />, label: "Our Vision", path: "/about/our-vision" },
    ],
    manufacture: [
      { icon: <FaMicrochip />, label: "Circuit Design", path: "/manufacture/circuit-design" },
      { icon: <FaProjectDiagram />, label: "PCB Layout", path: "/manufacture/pcb-layout" },
      { icon: <FaCogs />, label: "Prototyping", path: "/manufacture/prototyping" },
      { icon: <FaIndustry />, label: "Small Batch Manufacturing", path: "/manufacture/small-batch-manufacturing" },
      { icon: <FaCogs />, label: "Concept to Production", path: "/manufacture/concept-to-production" },
      { icon: <FaCheckCircle />, label: "Testing & Validation", path: "/manufacture/testing-validation" },
      { icon: <FaPuzzlePiece />, label: "Custom Solution", path: "/manufacture/custom-solution" },
      { icon: <FaLightbulb />, label: "Innovation Projects", path: "/manufacture/innovation-projects" },
    ],


    services: [
      {
        icon: <FaMicrochip />,
        label: "IoT Device Manufacturing",
        hasSubmenu: true,
        submenuKey: "iot_manufacturing",
        submenu: [
          { icon: <FaCarSide />, label: "Vehicle Tracking Devices", path: "/services/iot-device-manufacturing/vehicle-tracking-devices" },
          { icon: <FaTools />, label: "OBD-II Telematics", path: "/services/iot-device-manufacturing/obd-ii-telematics" },
          { icon: <FaCamera />, label: "Dash Cameras", path: "/services/iot-device-manufacturing/dash-cameras" },
          { icon: <FaParking />, label: "Smart Parking Systems", path: "/services/iot-device-manufacturing/smart-parking-systems" },
          { icon: <FaIndustry />, label: "Industrial IoT Devices", path: "/services/iot-device-manufacturing/industrial-iot-devices" },
          { icon: <FaRobot />, label: "Robotics & AGVs", path: "/services/iot-device-manufacturing/robotics-agvs" },
        ],
      },
      {
        icon: <FaRobot />,
        label: "Vehicle Robotics Device Manufacturer",
        hasSubmenu: true,
        submenuKey: "vehicle_robotics",
        submenu: [
          {
            icon: <FaRobot />,
            label: "Autonomous Vehicle Systems",
            path: "/services/vehicle-robotics-device-manufacturer/autonomous-vehicle-systems"
          },
          {
            icon: <FaCarSide />,
            label: "Robotic Delivery Vehicles",
            path: "/services/vehicle-robotics-device-manufacturer/robotic-delivery-vehicles"
          },
          {
            icon: <FaTools />,
            label: "In-Vehicle Robotics",
            path: "/services/vehicle-robotics-device-manufacturer/in-vehicle-robotics"
          },
          {
            icon: <FaIndustry />,
            label: "AGVs and AMRs",
            path: "/services/vehicle-robotics-device-manufacturer/agvs-amrs"
          },
          {
            icon: <FaSatelliteDish />,
            label: "Teleoperation Devices",
            path: "/services/vehicle-robotics-device-manufacturer/teleoperation-devices"
          },
          {
            icon: <FaShieldAlt />,
            label: "Surveillance & Defense Robotics",
            path: "/services/vehicle-robotics-device-manufacturer/surveillance-defense-robotics"
          },
        ],
      },
      {
        icon: <FaCogs />,
        label: "IoT Product Design & Engineering",
        hasSubmenu: true,
        submenuKey: "iot_design",
        submenu: [
          {
            icon: <FaLightbulb />,
            label: "Concept & Requirement Definition",
            path: "/services/IoT-Product-Design-&-Engineering/Concept-&-Requirement-Definition"
          },
          {
            icon: <FaMicrochip />,
            label: "Hardware Design",
            path: "/services/IoT-Product-Design-&-Engineering/Hardware-Design"
          },
          {
            icon: <FaServer />,
            label: "Firmware Development",
            path: "/services/IoT-Product-Design-&-Engineering/Firmware-Development"
          },
          {
            icon: <FaNetworkWired />,
            label: "Connectivity & Networking",
            path: "/services/IoT-Product-Design-&-Engineering/Connectivity-&-Networking"
          },
          {
            icon: <FaCloud />,
            label: "Cloud Backend & API",
            path: "/services/IoT-Product-Design-&-Engineering/Cloud-Backend-&-API"
          },
          {
            icon: <FaMobile />,
            label: "Frontend & Mobile App",
            path: "/services/IoT-Product-Design-&-Engineering/Frontend-&-Mobile-App"
          },
          {
            icon: <FaTools />,
            label: "Testing & Validation",
            path: "/services/IoT-Product-Design-&-Engineering/Testing-&-Validation"
          },
          {
            icon: <FaLock />,
            label: "Security Engineering",
            path: "/services/IoT-Product-Design-&-Engineering/Security-Engineering"
          },
          {
            icon: <FaCertificate />,
            label: "Certification & Compliance",
            path: "/services/IoT-Product-Design-&-Engineering/Certification-&-Compliance"
          },
        ],
      }
      ,
      {
        icon: <FaCarSide />,
        label: "Advanced Driver Assistance System",
        hasSubmenu: true,
        submenuKey: "adas",
        submenu: [
          {
            icon: <FaCamera />,
            label: "Cameras",
            path: "/services/Advanced-Driver-Assistance-System/Cameras"
          },
          {
            icon: <FaSatelliteDish />,
            label: "Radar & LIDAR",
            path: "/services/Advanced-Driver-Assistance-System/Radar-&-LIDAR"
          },
          {
            icon: <FaParking />,
            label: "Ultrasonic Sensors",
            path: "/services/Advanced-Driver-Assistance-System/Ultrasonic-Sensors"
          },
          {
            icon: <FaMapMarkerAlt />,
            label: "GPS + IMU",
            path: "/services/Advanced-Driver-Assistance-System/GPS-IMU"
          },
          {
            icon: <FaMicrochip />,
            label: "Embedded Systems",
            path: "/services/Advanced-Driver-Assistance-System/Embedded-Systems"
          },
          {
            icon: <FaBrain />,
            label: "AI & Computer Vision",
            path: "/services/Advanced-Driver-Assistance-System/AI-&-Computer-Vision"
          },
        ],
      }
      ,
      { icon: <FaNetworkWired />, label: "V2X Communication in Vehicles" },
      { icon: <FaSimCard />, label: "M2M eSIM Manufacturing" },
    ],
 products: [
  {
    icon: <FaCogs />,
    label: "Hardware",
    hasSubmenu: true,
    submenuKey: "hardware",
    submenu: [
      { icon: <FaMicrochip />, label: "AIS-140 (VLTD)", path: "/products/hardware/ais-140-vltd" },
      { icon: <FaCamera />, label: "Vehicle Camera System", path: "/products/hardware/vehicle-camera-system" },
      { icon: <FaTools />, label: "OBD-II Telematics", path: "/products/hardware/obd-ii-telematics" },
      { icon: <FaFireExtinguisher />, label: "Auto Fire Meter", path: "/products/hardware/auto-fire-meter" },
      { icon: <FaParking />, label: "Smart Parking Systems", path: "/products/hardware/smart-parking-systems" },
      { icon: <FaBroadcastTower />, label: "Radar & LIDAR", path: "/products/hardware/radar-lidar" },
      { icon: <FaSatellite/>, label: "GPS + IMU", path: "/products/hardware/gps-imu" },
      { icon: <FaBroadcastTower />, label: "Ultrasonic Sensors", path: "/products/hardware/ultrasonic-sensors" },
      { icon: <FaSimCard/>, label: "M2M eSIM Manufacturing", path: "/products/hardware/m2m-esim-manufacturing" },
      { icon: <FaNetworkWired />, label: "V2X Communication in Vehicles", path: "/products/hardware/v2x-communication" },
    ],
  },
 ]

  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const getGridColumns = () => "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="relative">
      {/* Top Nav */}
      <div className="bg-[#0e1225] py-2 px-4 hidden lg:block fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6">
          {topNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={handleNavClick}
              className="text-white text-sm flex items-center gap-1 hover:text-yellow-400"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-gradient-to-r from-white to-[#ffcf21] py-4 px-4 fixed lg:top-8 left-0 right-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" onClick={handleNavClick}>
            <img src={logo} alt="Traxo Logo" className="h-12" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() =>
                  isDesktop && item.hasDropdown && setActiveDropdown(item.key)
                }
                onMouseLeave={() => isDesktop && setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className="flex items-center gap-1 text-[#0e1225] hover:text-white font-medium"
                >
                  {item.icon}
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Dropdown */}
      {isDesktop && (
        <AnimatePresence>
          {activeDropdown && dropdownContent[activeDropdown] && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-[96px] left-0 right-0 z-30"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              <div className="bg-black shadow-2xl h-[600px] mx-8 rounded-b-xl overflow-y-auto">
                <div
                  className={`max-w-6xl mx-auto py-8 px-8 grid ${getGridColumns()} gap-6`}
                >
                  {dropdownContent[activeDropdown].map((link, i) => (
                    <Link to={link.path || "#"}
                      onClick={handleNavClick}>
                      <div
                        key={i}
                        className="flex flex-col items-center text-center p-4 hover:bg-gray-900 rounded-lg cursor-pointer"
                        onMouseEnter={() =>
                          link.hasSubmenu && setActiveSubDropdown(link.submenuKey)
                        }
                        onMouseLeave={() =>
                          link.hasSubmenu && setActiveSubDropdown(null)
                        }
                      >
                        <div

                          className="text-[#ffcf21] text-4xl mb-3"
                        >
                          {link.icon}
                        </div>
                        <Link
                          to={link.path || "#"}
                          onClick={handleNavClick}
                          className="text-white"
                        >
                          {link.label}
                        </Link>

                        {link.hasSubmenu &&
                          activeSubDropdown === link.submenuKey && (
                            <div className="mt-4 w-full bg-gray-800 p-4 rounded-lg grid grid-cols-2 gap-4">
                              {link.submenu.map((sub, idx) => (
                                <Link
                                  key={idx}
                                  to={sub.path}
                                  onClick={handleNavClick}
                                  className="flex flex-col items-center text-center hover:bg-gray-700 p-3 rounded-lg"
                                >
                                  <div className="text-[#ffcf21] text-2xl mb-2">
                                    {sub.icon}
                                  </div>
                                  <span className="text-white text-sm">
                                    {sub.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Menu */}
      {!isDesktop && (
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden bg-white shadow-lg fixed top-[72px] left-0 right-0 z-30 p-4"
            >
              {navItems.map((item) => (
                <div key={item.key} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full py-3 text-left font-medium"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.key ? null : item.key
                      )
                    }
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${activeDropdown === item.key ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>

                  {item.hasDropdown &&
                    activeDropdown === item.key &&
                    dropdownContent[item.key] && (
                      <div className="pl-6 pb-3">
                        {dropdownContent[item.key].map((subItem, i) => (
                          <div key={i} className="py-2">
                            {subItem.hasSubmenu ? (
                              <>
                                <button
                                  className="flex justify-between items-center w-full py-2 text-left text-sm"
                                  onClick={() =>
                                    setActiveSubDropdown(
                                      activeSubDropdown === subItem.submenuKey
                                        ? null
                                        : subItem.submenuKey
                                    )
                                  }
                                >
                                  <span className="flex items-center gap-2">
                                    {subItem.icon}
                                    {subItem.label}
                                  </span>
                                  <ChevronDown
                                    className={`w-4 h-4 transform transition-transform ${activeSubDropdown === subItem.submenuKey
                                      ? "rotate-180"
                                      : ""
                                      }`}
                                  />
                                </button>
                                {activeSubDropdown === subItem.submenuKey && (
                                  <div className="pl-6">
                                    {subItem.submenu.map((nested, idx) => (
                                      <Link
                                        key={idx}
                                        to={nested.path}
                                        onClick={handleNavClick}
                                        className="block py-1 text-sm flex items-center gap-2 hover:text-yellow-500"
                                      >
                                        {nested.icon}
                                        {nested.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={subItem.path}
                                onClick={handleNavClick}
                                className="block py-1 text-sm flex items-center gap-2 hover:text-yellow-500"
                              >
                                {subItem.icon}
                                {subItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );

};

export default NavbarTraxo;
