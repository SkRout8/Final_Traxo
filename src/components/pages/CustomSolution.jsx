import React from "react";
import { motion } from "framer-motion";
import { Wrench, Layers, Cpu, Users } from "lucide-react";
import Footer from "../Footer";

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-blue-500" />,
    title: "Tailored Engineering",
    description:
      "Every client’s needs are different. We design and develop solutions from the ground up to match your exact requirements.",
    img: "https://source.unsplash.com/800x600/?engineering,technology",
  },
  {
    icon: <Layers className="w-10 h-10 text-green-500" />,
    title: "Seamless Integration",
    description:
      "We ensure your custom solution integrates flawlessly with your existing systems, minimizing downtime and maximizing productivity.",
    img: "https://source.unsplash.com/800x600/?automation,industry",
  },
  {
    icon: <Cpu className="w-10 h-10 text-purple-500" />,
    title: "Cutting-Edge Technology",
    description:
      "From IoT-enabled devices to AI-driven automation, we leverage the latest tech to future-proof your operations.",
    img: "https://source.unsplash.com/800x600/?ai,robotics",
  },
];

export default function CustomSolution() {
  return (
    <div className="bg-gray-50 min-h-screen pt-36">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Custom Solutions
        </h1>
        <p className="text-lg text-gray-600">
          At Traxo India Automation, we understand that one size doesn’t fit-
          all. That’s why we offer Custom Solutions tailored to your business
          needs, from concept to full-scale implementation.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {services.map((item, index) => (
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

      {/* Collaboration Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-blue-600 text-white rounded-xl p-8 shadow-lg"
      >
        <Users className="w-16 h-16 text-yellow-300" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Collaboration at Every Step
          </h2>
          <p className="mb-6">
            Our team works closely with you from ideation to deployment,
            ensuring that your vision is transformed into a high-performance
            reality. We combine technical expertise with a deep understanding of
            your business challenges.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Start Your Project
          </button>
        </div>
      </motion.div>
      <Footer/>
    </div>
  );
}
