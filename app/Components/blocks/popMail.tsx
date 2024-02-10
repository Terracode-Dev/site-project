// PopupForm.js
import React, { useState } from 'react';
export default function PopupForm() {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md max-w-md overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Popup Form</h2>
        <form>
          {/* Add your form fields here */}
          
          {/* <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="mb-4 p-2 border"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="mb-4 p-2 border"
          /> */}
         <div>
            This is the form body
         </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

