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

const MarketPresence = () => {
  const presenceData = [
    {
      title: "Pan-India Operations",
      desc: "Our network covers every major city and industrial hub in India, enabling fast deployment and on-ground support."
    },
    {
      title: "Multi-Industry Expertise",
      desc: "From logistics and transport to manufacturing and agriculture, we adapt solutions to diverse industry needs."
    },
    {
      title: "Global Partnerships",
      desc: "Collaborating with international tech leaders to bring the latest innovations to our customers."
    },
    {
      title: "24/7 Support Network",
      desc: "Dedicated service centers and partner teams available round-the-clock to ensure smooth operations."
    }
  ];

  const stats = [
    { number: "15+", label: "States Covered" },
    { number: "500+", label: "Clients Served" },
    { number: "1M+", label: "Devices Active" },
    { number: "5", label: "Regional Offices" }
  ];

  return (
    <div className="text-black">
      {/* HERO SECTION */}
      <section className="relative w-full py-20 px-6 bg-gradient-to-b from-white via-yellow-100 to-yellow-200 pt-36">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold mb-6"
          >
            Market Presence
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg max-w-4xl mx-auto"
          >
            With a strong footprint across India and growing international collaborations, 
            TRAXO delivers cutting-edge IoT solutions where they are needed most.
          </motion.p>
        </div>
      </section>

      {/* HIGHLIGHT STATS */}
      <section className="bg-gradient-to-r from-yellow-50 to-yellow-200 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 bg-white rounded-xl shadow-lg border border-yellow-300 hover:shadow-yellow-400/40 transition"
            >
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRESENCE CARDS */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {presenceData.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-8 rounded-xl shadow-lg border border-yellow-300 hover:-translate-y-2 hover:shadow-yellow-400/40 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAP / COVERAGE SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-white to-yellow-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Our Coverage
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-96 bg-gradient-to-tr from-yellow-100 to-yellow-200 rounded-xl shadow-lg flex items-center justify-center border border-yellow-300"
          >
        
            <iframe
              title="Traxo India Automation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.865382623105!2d86.9146481!3d21.4865624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf5e58111e957%3A0xac1d422f1e8f6dc3!2sTRAXO%20INDIA%20AUTOMATION%20GPS%20MANUFACTURING%20COMPANY!5e0!3m2!1sen!2sin!4v1722856000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
      
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MarketPresence;
