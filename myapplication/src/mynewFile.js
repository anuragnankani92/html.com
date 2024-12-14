import log from './logo.svg';
import './App.css';
import Myfirst from './Myfirst';
import React, { useState } from "react";

function App() {

  let fname = 'ritik';
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show success modal after form submission
  };

  return (
    <>
      <div className="p-4">
        {/* Button to trigger modal */}
        <button
          onClick={openModal}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Apply Now
        </button>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>

              {/* Modal Header */}
              <div className="text-center">
                <h2 className="text-lg font-bold mb-1">Application Form</h2>
                <p className="text-sm font-medium text-gray-700">
                  Software development Engineer | Android
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6">
                {/* First Name */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-gray-100 border rounded px-3 py-3 text-sm focus:outline-none "
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-gray-100 border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-purple-300"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-100 border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-purple-300"
                  />
                </div>

                {/* Mobile Number */}
                <div className="mb-4 flex">
                  <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-l text-sm">
                    +91
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full bg-gray-100 border rounded-r px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-purple-300"
                  />
                </div>

                <div className="mb-4 flex items-center space-x-2">
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".doc,.docx,.rtf,.pdf"
                    className="hidden"
                  />

                  {/* Attach Resume Button */}
                  <label
                    htmlFor="resume-upload"
                    className="bg-white border border-purple-600 text-purple-600 rounded px-4 py-2 text-sm font-medium transition cursor-pointer"
                  >
                    Attach Resume
                  </label>

                  {/* Text Beside the Button */}
                  <div className="text-xs text-gray-500 flex flex-col">
                    <span>Only .doc, .docx, .rtf,</span>
                    <span>and .pdf files are accepted</span>
                  </div>
                </div>


                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 text-sm font-medium h-[50px]"
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

  



    </>
    // <div className="App">
    //   <h1>Hello</h1>
    //   {/* <header className="App-header">
    //     <img src={log} className="App-logo" alt="logo" />
    //     <p>
    //       My code <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
