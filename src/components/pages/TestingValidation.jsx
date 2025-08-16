import React from 'react'

import { motion } from "framer-motion";
import { CheckCircle, ClipboardCheck, Microscope, ShieldCheck } from "lucide-react";
import testImg1 from "../../images/C3.jpg";
import testImg2 from "../../images/C4.jpg";
import testImg3 from "../../images/C5.jpg";
import Footer from '../Footer';

const points = [
  {
    icon: <Microscope className="w-10 h-10 text-blue-500" />,
    title: "Functional Testing",
    description:
      "Ensure every feature works as intended by simulating real-world use cases and stress conditions.",
    img: testImg1,
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-green-500" />,
    title: "Compliance Verification",
    description:
      "Validate that products meet industry standards, safety requirements, and regulatory guidelines.",
    img: testImg2,
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
    title: "Durability & Reliability Tests",
    description:
      "Perform rigorous environmental, mechanical, and lifecycle testing to guarantee long-term performance.",
    img: testImg3,
  },
];

export default function TestingValidation() {
  return (
    <div className="bg-gray-50 min-h-screen pt-36">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Testing & Validation
        </h1>
        <p className="text-lg text-gray-600">
          At Traxo India Automation, we believe that a product is only as good
          as its performance in the real world. Our rigorous testing and
          validation process ensures that every product meets the highest
          quality and reliability standards before reaching our customers.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto bg-yellow-600 text-white rounded-xl p-8 shadow-lg text-center"
      >
        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
        <h2 className="text-2xl font-bold mb-4">Quality You Can Trust</h2>
        <p className="mb-6">
          From concept to completion, our Testing & Validation process ensures
          that your product is not only functional but also reliable, safe, and
          built to last.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Learn More
        </button>
      </motion.div>
      <section>
        <Footer />
      </section>
    </div>
  );
}
