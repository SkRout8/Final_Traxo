import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Footer from "../Footer";

import M1 from "../../images/M1.jpeg";
import M2 from "../../images/M2.jpeg";
import M3 from "../../images/M3.jpeg";
import M4 from "../../images/M4.jpeg";
import M5 from "../../images/M5.jpeg";
import M6 from "../../images/M6.jpeg";
import M7 from "../../images/M7.jpeg";
import M8 from "../../images/M8.jpeg";
import M11 from "../../images/M11.jpeg";
import M12 from "../../images/M12.jpeg";
import M13 from "../../images/M13.jpeg";
import S1 from "../../images/S1.jpeg";
import S2 from "../../images/S2.jpeg";

const OurStrengths = () => {
  const isAdmin = false;

  const [team, setTeam] = useState([
    { id: 1, name: "Saleena Patra", role: "HR Specialist", image: M1, knowMore: "https://www.linkedin.com/in/saleena-patra-7044b5247/" },
    { id: 2, name: "Dipti Bala Mohanty", role: "UI/UX Designer", image: M2, knowMore: "https://example.com/jane" },
    { id: 3, name: "Deepa Das", role: "Backend Engineer", image: M3, knowMore: "https://example.com/robert" },
    { id: 4, name: "Karishma Khatun", role: "Frontend Developer", image: M4, knowMore: "https://example.com/emily" },
    { id: 5, name: "Srikanta Dalei", role: "Technician", image: M5, knowMore: "https://example.com/michael" },
    { id: 6, name: "Rama Ch. Ghantyat", role: "Technician", image: M6, knowMore: "https://example.com/sarah" },
    { id: 7, name: "Monalisha Bhoi", role: "Technician", image: M7, knowMore: "https://example.com/david" },
    { id: 8, name: "Rajendra kumar Kar", role: "Technician", image: M8, knowMore: "https://example.com/sophia" },
    { id: 9, name: "Sushanta Dalai", role: "Technician", image: M11, knowMore: "https://example.com/lisa" },
    { id: 10, name: "Sushanta Dalai", role: "Technician", image: M12, knowMore: "https://example.com/lisa" },
    { id: 11, name: "Sushanta Dalai", role: "Technician", image: M13, knowMore: "https://example.com/lisa" },

  ]);

  const directors = [
    { id: "d1", name: "Mrutyunjay Pradhan", role: "Managing Director", image: S1, knowMore: "https://www.linkedin.com/in/mrutyunjay-pradhan-710700130/" },
    { id: "d2", name: "Dhanujaya Pradhan", role: "Managing Director", image: S2, knowMore: "https://example.com/director2" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: "", role: "", imageFile: null, knowMore: "" });
  const [knowMoreModal, setKnowMoreModal] = useState({ open: false, content: "" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile" && files.length > 0) {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.knowMore) return;
    let imageURL = formData.imageFile ? URL.createObjectURL(formData.imageFile) : "";

    if (isEditing) {
      setTeam((prev) =>
        prev.map((member) =>
          member.id === editId
            ? { ...member, ...formData, image: imageURL || member.image }
            : member
        )
      );
    } else {
      setTeam([
        ...team,
        { id: Date.now(), ...formData, image: imageURL || "https://via.placeholder.com/300" },
      ]);
    }
    setFormData({ name: "", role: "", imageFile: null, knowMore: "" });
    setIsModalOpen(false);
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (id) => {
    const member = team.find((m) => m.id === id);
    setFormData({
      name: member.name,
      role: member.role,
      knowMore: member.knowMore,
      imageFile: null,
    });
    setIsEditing(true);
    setEditId(id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => setTeam(team.filter((m) => m.id !== id));

  const scrollingTeam = [...team, ...team];

  return (
    <div className="text-black pt-24">
      {/* Top Heading */}
      <section className="text-center py-16 bg-gradient-to-r from-yellow-50 via-white to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-extrabold">Our Strength</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          We are a dynamic team of <span className="font-bold text-yellow-600">50+ professionals</span>
          excelling in software, hardware, and operations, united by passion and purpose.
        </p>
      </section>

      {/* Directors Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Directors</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {directors.map((director) => (
            <div key={director.id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition">
              <img
                src={director.image || "https://via.placeholder.com/150"}
                alt={director.name}
                className="w-48 h-48 object-cover rounded-full border-4 border-yellow-400 shadow-md"
              />
              <h3 className="text-2xl font-bold mt-4">{director.name}</h3>
              <p className="text-gray-600 mt-2 flex items-center gap-2">
                <FaUserTie /> {director.role}
              </p>
              <button
                onClick={() => setKnowMoreModal({ open: true, content: director.knowMore })}
                className="mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-yellow-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">Our Team Members</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
            Skilled experts committed to delivering top-quality solutions and driving innovation.
          </p>
        </div>

        {/* Auto-Scrolling Team Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {scrollingTeam.map((member, idx) => (
              <div
                key={`${member.id}-${idx}`}
                className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 min-w-[280px] hover:shadow-xl transition"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full border-4 border-yellow-300 shadow-md"
                />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-gray-600 mt-2 flex items-center gap-2 text-sm">
                  <FaUserTie /> {member.role}
                </p>
                <button
                  onClick={() => setKnowMoreModal({ open: true, content: member.knowMore })}
                  className="mt-3 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition text-sm"
                >
                  Know More
                </button>
                {isAdmin && (
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(member.id)}
                      className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500"
                    >
                      <FaEdit className="text-white" />
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="bg-red-500 p-2 rounded-full hover:bg-red-600"
                    >
                      <FaTrash className="text-white" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          Be a part of an innovative team shaping the future of technology and solutions.
        </p>
        <button className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-lg shadow-lg hover:bg-yellow-100">
          Contact Us
        </button>
      </section>

      {/* Know More Modal */}
      {knowMoreModal.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative"
          >
            <button
              onClick={() => setKnowMoreModal({ open: false, content: "" })}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">More About Member</h2>
            {knowMoreModal.content.startsWith("http") ? (
              <a
                href={knowMoreModal.content}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Visit Profile
              </a>
            ) : (
              <p className="text-gray-700">{knowMoreModal.content}</p>
            )}
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default OurStrengths;
