import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ClipboardList,
  Wrench,
  Package,
  TrendingUp,
  Award,
} from "lucide-react";
import Footer from "../Footer";

const stages = [
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    title: "Idea & Concept",
    description:
      "We collaborate to refine your initial idea, assess feasibility, and set the foundation for a successful product.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-blue-500" />,
    title: "Design & Planning",
    description:
      "Our engineers craft detailed designs, 3D models, and manufacturing plans to ensure precision and efficiency.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-green-500" />,
    title: "Prototyping",
    description:
      "We build and test prototypes, ensuring your concept works in the real world before scaling production.",
  },
  {
    icon: <Package className="w-10 h-10 text-purple-500" />,
    title: "Small Batch Production",
    description:
      "Produce limited quantities to validate performance, test the market, and gather feedback.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-red-500" />,
    title: "Full-Scale Manufacturing",
    description:
      "Ramp up production to meet demand, maintaining strict quality control and cost optimization.",
  },
  {
    icon: <Award className="w-10 h-10 text-teal-500" />,
    title: "Market Launch",
    description:
      "Deliver your polished, branded product to market — ready to impress customers worldwide.",
  },
];

export default function ConcepttoProduction() {
  return (
    <div className="bg-gray-50 min-h-screen pt-36">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Concept to Production
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Our streamlined process turns ideas into market-ready products, with
          expertise at every stage — from concept validation to full-scale
          manufacturing.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

        {stages.map((stage, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-12 flex items-center justify-between w-full ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-3">
                  {stage.icon}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-gray-600">{stage.description}</p>
              </div>

              {/* Dot in the middle */}
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"></div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto bg-yellow-600 text-white rounded-xl p-8 shadow-lg text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Bring Your Idea to Life?</h2>
        <p className="mb-6">
          Partner with Traxo India Automation to transform your vision into a
          high-quality, market-ready product.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </motion.div>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
