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

const OurStory = () => {
  const cardData = [
    {
      title: "Innovation First",
      desc: "We create cutting-edge IoT and automation systems, designed to be scalable, efficient, and future-ready."
    },
    {
      title: "Global Reach",
      desc: "Serving clients across states and industries, we bridge technology with business success."
    },
    {
      title: "Quality & Reliability",
      desc: "Our devices are tested to meet the highest global standards, ensuring durability and precision."
    },
    {
      title: "Customer-Centric Approach",
      desc: "We believe in partnerships, offering tailored solutions for unique business needs."
    },
    {
      title: "Sustainability Goals",
      desc: "Our designs consider long-term energy efficiency and eco-friendly manufacturing."
    },
    {
      title: "Expert Team",
      desc: "A dedicated group of engineers, designers, and innovators driving continuous improvement."
    }
  ];

  return (
    <div className="text-black">
      {/* OUR STORY + CARDS */}
      <section className="relative w-full py-20 px-6 bg-gradient-to-b from-white via-yellow-100 to-yellow-200 pt-44">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-6"
          >
            Our Story
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg max-w-4xl mx-auto mb-12"
          >
            Founded in 2019, TRAXO has been on a mission to redefine GPS tracking
            and IoT innovation. From a small team of engineers to a national
            leader in automation solutions, our journey has been fueled by
            passion, creativity, and a relentless pursuit of excellence.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {cardData.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-lg border border-yellow-300 hover:shadow-yellow-400/40 hover:-translate-y-2 transition transform"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* JOURNEY SECTION */}
      <section className="bg-gradient-to-b from-yellow-200 via-white to-yellow-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg">
              Starting as a small startup in Odisha, we’ve grown into a
              multi-location company with offices in Delhi, Karnataka, and a
              state-of-the-art manufacturing facility. Our evolution reflects
              our commitment to research, development, and innovation.
            </p>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-xl shadow-lg p-8 border border-yellow-300"
          >
            <ul className="space-y-4 list-disc pl-4">
              <li>Established in 2019</li>
              <li>Over 50 skilled professionals</li>
              <li>Serving logistics, manufacturing, and transport industries</li>
              <li>In-house IoT device manufacturing</li>
            </ul>
          </motion.div>
        </div>
      </section>


      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default OurStory;
