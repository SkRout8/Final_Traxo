import React, { useState } from 'react'

function DealerCenter() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.mobile || !formData.location || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Enquiry submitted successfully!');
    setFormData({
      fullName: '',
      mobile: '',
      location: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-28">
        
        {/* Left Side Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Become a <span className="text-teal-600">Dealer Partner</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join our dealer network and grow your business with trusted IoT, telematics, 
            and smart mobility solutions. Fill out the enquiry form and our team will 
            reach out to you soon.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✔️ Trusted hardware & software solutions</li>
            <li>✔️ End-to-end technical support</li>
            <li>✔️ Nationwide partner ecosystem</li>
          </ul>
        </div>

        {/* Right Side Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Dealer Enquiry Form
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
            
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
            
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
            ></textarea>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-200"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealerCenter;
