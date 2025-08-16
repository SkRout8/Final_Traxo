import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, FlaskConical, Users } from "lucide-react";
import Footer from "../Footer";

const projects = [
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    title: "Idea Incubation",
    description:
      "We transform bold ideas into tangible prototypes, nurturing innovation from concept to reality.",
    img: "https://source.unsplash.com/800x600/?innovation,technology",
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-green-500" />,
    title: "Research & Development",
    description:
      "Our R&D team works with cutting-edge tools to experiment, refine, and push boundaries in engineering.",
    img: "https://source.unsplash.com/800x600/?research,lab",
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-500" />,
    title: "Rapid Prototyping",
    description:
      "We accelerate innovation cycles with rapid prototyping, enabling faster market readiness.",
    img: "https://source.unsplash.com/800x600/?prototyping,engineering",
  },
];

export default function InnovationProjects() {
  return (
    <div className="bg-gray-50 min-h-screen pt-36">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Innovation Projects
        </h1>
        <p className="text-lg text-gray-600">
          At Traxo India Automation, we lead with curiosity and create projects
          that challenge the status quo, blending engineering precision with
          creative problem-solving.
        </p>
      </div>

      {/* Project Sections */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow-lg"
            />
            {/* Content */}
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-2xl font-semibold text-gray-800">
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
        className="mt-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-blue-700 text-white rounded-xl p-8 shadow-lg"
      >
        <Users className="w-16 h-16 text-yellow-300" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Innovation is a Team Sport
          </h2>
          <p className="mb-6">
            Our innovation projects bring together engineers, designers,
            researchers, and industry experts. We work collaboratively to
            deliver groundbreaking solutions that make an impact.
          </p>
          <button className="px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Explore More Projects
          </button>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
