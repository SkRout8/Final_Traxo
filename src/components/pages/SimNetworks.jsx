import React from "react";
import Bsnal from "../../images/Bsnal.webp";
import Airtel from "../../images/Airtail.png";
import Vi from "../../images/Vi.png";
import Footer from "../Footer";

const providers = [
  {
    id: 1,
    name: "BSNL",
    slogan: "Power to Empower",
    emoji: "🇮🇳",
    logoIcon: Bsnal,
  },
  {
    id: 2,
    name: "Airtel",
    slogan: "Airtel – Feel the Connection",
    emoji: "📶",
    logoIcon: Airtel,
  },
  {
    id: 3,
    name: "Vodafone-Idea",
    slogan: "Together for Tomorrow",
    emoji: "📱",
    logoIcon: Vi,
  },
];

function SimNetworks() {
  const handleProviderClick = (providerName) => {
    console.log(`Selected ${providerName}`);
    // Navigation logic here
  };

  return (
    <>
      <div className="min-h-screen bg-white py-40 px-4">
      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-black mb-12">
        <span className="text-yellow-400">📡 SIM</span> / Network Providers
      </h1>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto py-20">
        {providers.map((provider) => (
          <div
            key={provider.id}
            onClick={() => handleProviderClick(provider.name)}
            className="bg-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer p-8 flex flex-col items-center text-center border-2 border-transparent hover:border-yellow-400"
          >
            {/* Logo */}
            <div className="bg-white p-4 rounded-full mb-5">
              <img
                src={provider.logoIcon}
                alt={provider.name}
                className="w-20 h-20 object-contain transform transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-white mb-2">
              {provider.emoji} {provider.name}
            </h2>

            {/* Slogan */}
            <p className="text-yellow-400 mb-6">{provider.slogan}</p>

            {/* Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-2 rounded-lg transition-transform duration-300 hover:scale-105 active:scale-95">
              Go
            </button>
          </div>
        ))}
      </div>

    </div>

    <section>
      <Footer />
    </section>
    </>
  );
}

export default SimNetworks;
