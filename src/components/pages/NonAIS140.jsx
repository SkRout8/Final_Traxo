import React, { useState } from "react";


const models = {
  TIA19AD: {
    title: "Model TIA19AD",
    img: '',
    description:
      "TIA19AD is a robust and reliable Non-AIS-140 device designed for vehicle tracking solutions. It offers real-time GPS tracking, strong connectivity, and long battery life.",
  },
  TIA20BC: {
    title: "Model TIA20BC",
    img: '',
    description:
      "TIA20BC provides advanced vehicle monitoring with enhanced connectivity features. It ensures high accuracy and durability for fleet operations.",
  },
  TIA21M: {
    title: "Model TIA21M",
    img: '',
    description:
      "TIA21M is a compact Non-AIS-140 model perfect for two-wheelers and light vehicles. Lightweight design with smart tracking capabilities.",
  },
  TIA23P: {
    title: "Model TIA23P",
    img: '',
    description:
      "TIA23P is a premium Non-AIS-140 device offering advanced telematics features, including route optimization and driver behavior monitoring.",
  },
};

function NonAIS140() {
  const [activeModel, setActiveModel] = useState("TIA19AD");

  return (
    <div className="bg-white text-black min-h-screen px-6 py-10 pt-36">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Non-AIS-140 Models
      </h1>

      {/* Model Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(models).map((model) => (
          <button
            key={model}
            onClick={() => setActiveModel(model)}
            className={`px-6 py-2 rounded-lg font-medium shadow-md transition ${
              activeModel === model
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-800 hover:bg-yellow-200"
            }`}
          >
            {model}
          </button>
        ))}
      </div>

      {/* Selected Model Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {models[activeModel].title}
        </h2>
        <img
          src={models[activeModel].img}
          alt={models[activeModel].title}
          className="w-full h-80 object-cover rounded-xl shadow-lg mb-6"
        />
        <p className="text-lg">{models[activeModel].description}</p>
      </div>
    </div>
  );
}

export default NonAIS140;
