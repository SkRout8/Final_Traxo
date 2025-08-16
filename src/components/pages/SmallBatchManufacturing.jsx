import React from "react";
import { motion } from "framer-motion";
import { Factory, Package, Clock, Settings, TrendingUp, ShieldCheck } from "lucide-react";
import Footer from "../Footer";

const manufacturingSteps = [
  {
    icon: <Factory className="w-12 h-12 text-blue-600" />,
    title: "Flexible Production",
    description:
      "Adapt production runs according to demand without the overhead of mass manufacturing.",
  },
  {
    icon: <Package className="w-12 h-12 text-green-500" />,
    title: "Custom Packaging",
    description:
      "Create tailor-made packaging solutions for your small batch products.",
  },
  {
    icon: <Clock className="w-12 h-12 text-orange-500" />,
    title: "Quick Turnaround",
    description:
      "Faster manufacturing cycles to get your products to market quickly.",
  },
  {
    icon: <Settings className="w-12 h-12 text-purple-500" />,
    title: "Precision Quality",
    description:
      "High attention to detail and strict quality control for every unit produced.",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-red-500" />,
    title: "Scalable Growth",
    description:
      "Easily transition from small batches to larger production as demand increases.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-teal-500" />,
    title: "Reduced Risk",
    description:
      "Test market response without the risks and costs of mass production.",
  },
];

export default function SmallBatchManufacturing() {
  return (
    <div className="bg-gray-50 min-h-screen pt-36">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Small Batch Manufacturing at{" "}
          <span className="text-yellow-600">Traxo India Automation</span>
        </h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Our Small Batch Manufacturing service empowers businesses to produce high-quality
          products in smaller quantities — perfect for testing new markets, reducing inventory
          costs, and meeting specialized demands without compromising on quality.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {manufacturingSteps.map((step, index) => (
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Small Batch Manufacturing?
        </h2>
        <p className="text-gray-600 mb-4">
          Small Batch Manufacturing offers the flexibility to produce limited quantities while
          maintaining premium quality. This approach allows businesses to respond quickly to
          market changes, test innovative designs, and reduce waste.
        </p>
        <p className="text-gray-600 mb-4">
          At Traxo India Automation, we combine cutting-edge technology with expert craftsmanship
          to ensure every batch meets the highest standards. Whether you're a startup or an
          established enterprise, our process minimizes cost, shortens production times, and
          supports sustainable manufacturing practices.
        </p>
        <p className="text-gray-600">
          With our experience in precision manufacturing, we help you bring your ideas to life
          faster and smarter — without the challenges of large-scale production.
        </p>
      </div>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
