import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../images/traxo.png";
import img1 from "../../images/traxo3.png";
import img2 from "../../images/traxo2.png";

import ProductSection from "../ProductSection";
import WhyChooseUs from "../WhyChooseUs";
import GPSTrackingSection from "../GPSTrackingSection";
import IoTDevicesSection from "../IoTDevicesSection";
import IndustriesSection from "../IndustriesSection";
import Footer from "../Footer";
import ManufacturingCapabilities from "./ManufacturingCapabilities";
import Enquiry from "./Enquiry";
import CustomerCare from "./CustomerCare";

export default function Home() {
  const images = [img, img2, img1];
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="bg-gray-50 text-gray-900 overflow-x-hidden mt-0 pt-16 xl:pt-0 md:pt-0 lg:pt-0 xl:mt-16 lg:mt-16 md:mt-16">
    


    <div className=" hidden">
      {/* Hero Section */}
      <header className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-bold">
          Welcome to Traxo India Automation Pvt. Ltd.
        </h1>
        <p className="mt-3 text-lg text-gray-700">
          Everything in Automation, Powered by Innovation
        </p>
      </header>

      {/* About Us */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">
          About Traxo India Automation Pvt. Ltd.
        </h2>
        <p className="text-gray-700 mb-6">
          Founded in India, <strong>Traxo India Automation Pvt. Ltd.</strong> is a trusted provider of automation and GPS tracking solutions. 
          Our expertise spans across IoT devices, vehicle tracking, industrial automation, and smart monitoring systems.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Our Core Services</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>GPS Tracking Devices & Software</li>
          <li>IoT-based Automation Solutions</li>
          <li>Industrial Monitoring & Control Systems</li>
          <li>Custom Automation Development</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Traxo India Automation?</h2>
        <p className="text-gray-700">
          We combine technology with experience to deliver results that matter. 
          Our products are designed with precision, tested for reliability, and supported by a dedicated team of professionals.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-10">
        © 2025 Traxo India Automation Pvt. Ltd. | www.traxo.com
      </footer>
    </div>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-300 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 xl:h-[650px] lg:h-[600px] md:h-[600px] 2xl:h-[800px]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Traxo — Automation, GPS & Live Tracking Solutions
            </h1>
            <p className="text-lg mb-8">
              We provide next-generation automation and GPS tracking solutions
              for businesses, industries, and individuals to monitor, manage, and
              optimize operations in real-time.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
              Get Started
            </button>
          </motion.div>

          {/* Right Image with Fade Animation */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="GPS Tracking"
                className="max-w-full h-auto object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section>
        <ProductSection />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <GPSTrackingSection />
      </section>
      <section>
        <ManufacturingCapabilities />
      </section>
      <section>
        <IoTDevicesSection />
      </section>
      <section>
        <IndustriesSection />
      </section>
      <section>
        <Enquiry/>
      </section>
     
      <section>
        <Footer />
      </section>
    </div>
  );
}
