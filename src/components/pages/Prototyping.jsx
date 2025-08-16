import React from "react";
import { Wrench, Cpu, Lightbulb, Cog, Layers, Rocket } from "lucide-react"; // Lucide icons
import Footer from "../Footer";
import { motion } from "framer-motion";


const prototypingSteps = [
  {
    icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
    title: "Idea Conceptualization",
    description:
      "Transforming your vision into a workable plan, defining functionality, purpose, and target audience.",
  },
  {
    icon: <Layers className="w-12 h-12 text-blue-500" />,
    title: "Design & Modeling",
    description:
      "Creating detailed CAD models and simulations to visualize and verify your concept before physical development.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-500" />,
    title: "Electronics Integration",
    description:
      "Integrating circuits, sensors, and microcontrollers for functional prototypes that reflect real-world performance.",
  },
  {
    icon: <Wrench className="w-12 h-12 text-orange-500" />,
    title: "Assembly & Fabrication",
    description:
      "Building the prototype with high precision manufacturing and expert craftsmanship.",
  },
  {
    icon: <Cog className="w-12 h-12 text-purple-500" />,
    title: "Testing & Refinement",
    description:
      "Evaluating performance, identifying issues, and refining the design for maximum efficiency.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-red-500" />,
    title: "Deployment Ready",
    description:
      "Delivering a final prototype that’s production-ready, ensuring reliability and scalability.",
  },
];

export default function Prototyping() {
  return (
    <div className="bg-gray-50 min-h-screen  pt-36">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Prototyping Services at <span className="text-yellow-500">Traxo India Automation</span>
        </h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          At Traxo India Automation, we bring your ideas to life through precision prototyping.
          From concept to deployment, our team ensures your product is tested, refined, and ready for production.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {prototypingSteps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="max-w-5xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Prototyping Matters</h2>
        <p className="text-gray-600 mb-4">
          Prototyping is the bridge between imagination and reality. It allows engineers, designers, 
          and innovators to test their ideas, evaluate performance, and make necessary adjustments 
          before committing to full-scale production.
        </p>
        <p className="text-gray-600 mb-4">
          At Traxo India Automation, our state-of-the-art tools and expert team ensure 
          that each prototype reflects the highest standards of quality and functionality. 
          We cater to diverse industries including electronics, manufacturing, automotive, 
          and IoT solutions.
        </p>
        <p className="text-gray-600">
          Whether you’re a startup looking to validate a concept or an established company 
          seeking to innovate, our prototyping services ensure faster time-to-market, reduced 
          costs, and improved product success rates.
        </p>
      </div>

      <section>
        <Footer/>

      </section>
    </div>
  );
}
