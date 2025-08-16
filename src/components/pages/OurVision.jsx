import React from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 }
  })
};

const OurVision = () => {
  const visionPoints = [
    {
      title: "A Connected Future",
      desc: "Foster a world where every device, vehicle, and system communicates seamlessly."
    },
    {
      title: "Global Leadership",
      desc: "Become a recognized leader in IoT innovation, trusted across industries."
    },
    {
      title: "Sustainable Growth",
      desc: "Promote economic and environmental balance through technology."
    }
  ];

  return (
    <div className="text-black">
      {/* HERO SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-yellow-100 to-yellow-200 pt-36">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-6"
          >
            Our Vision
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg max-w-3xl mx-auto"
          >
            To lead the way in shaping a connected, intelligent world where innovation 
            and sustainability go hand in hand, creating opportunities for all.
          </motion.p>
        </div>
      </section>

      {/* VISION CARDS */}
      <section className="py-16 px-6 bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {visionPoints.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-8 rounded-xl shadow-lg border border-yellow-300 hover:-translate-y-2 hover:shadow-yellow-400/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurVision;
