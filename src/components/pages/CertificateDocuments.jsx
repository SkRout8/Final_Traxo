import React, { useState } from "react";

// Import your certificate images
import Cert1 from "../../images/Cert1.jpg";
import Cert2 from "../../images/Cert2.jpg";
import Cert3 from "../../images/Cert3.jpg";
import Cert4 from "../../images/Cert4.jpg";
import Cert5 from "../../images/Cert5.jpg";
import Cert6 from "../../images/Cert6.jpg";
import Cert7 from "../../images/Cert7.jpg";
import Cert10 from "../../images/Cert10.jpg"

const certificates = [Cert1, Cert2, Cert3, Cert4, Cert5, Cert6, Cert7, Cert10];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen py-32 px-6">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Our Certifications
      </h2>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto rounded-xl border border-gray-200 shadow-md transform transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative">
            <img
              src={selectedCert}
              alt="Certificate Preview"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-lg font-bold"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


// import React, { useState } from "react";

// // Import your certificate images
// import Cert1 from "../../images/Cert1.jpg";
// import Cert2 from "../../images/Cert2.jpg";
// import Cert3 from "../../images/Cert3.jpg";
// import Cert4 from "../../images/Cert4.jpg";
// import Cert5 from "../../images/Cert5.jpg";
// import Cert6 from "../../images/Cert6.jpg";
// import Cert7 from "../../images/Cert7.jpg";
// import Cert8 from "../../images/Cert8.jpg";

// const certificates = [Cert7, Cert8, Cert2, Cert3, Cert4, Cert5, Cert6, Cert1];

// export default function Certificates() {
//   const [selectedCert, setSelectedCert] = useState(null);

//   return (
//     <div className="bg-gray-100 min-h-screen py-32 px-6">
//       <h2 className="text-3xl font-bold text-center text-black mb-8">
//         Our Certifications
//       </h2>

//       {/* Grid Gallery */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {certificates.map((cert, index) => (
//           <div
//             key={index}
//             className="relative group cursor-pointer"
//             onClick={() => setSelectedCert(cert)}
//           >
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 shadow-md">
//               <img
//                 src={cert}
//                 alt={`Certificate ${index + 1}`}
//                 className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition">
//               <span className="text-white text-lg font-semibold">View</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Preview */}
//       {selectedCert && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={() => setSelectedCert(null)}
//         >
//           <div className="relative">
//             <img
//               src={selectedCert}
//               alt="Certificate Preview"
//               className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
//             />
//             <button
//               className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-lg font-bold"
//               onClick={() => setSelectedCert(null)}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
