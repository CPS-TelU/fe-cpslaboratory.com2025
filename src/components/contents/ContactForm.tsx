"use client";
import { poppins } from '@/styles/font';
import React, { useState, FormEvent } from 'react';


const CustomInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="relative">
    <label htmlFor={name} className="text-gray-500 text-sm font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none py-2 transition-colors duration-300"
      required
    />
  </div>
);

// Komponen ikon sosial media
const SocialIcons = () => (
  <div className="flex justify-center items-center space-x-6 mt-12">
    <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-red-600 transition-colors">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>
    <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-red-600 transition-colors">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </a>
    <a href="#" aria-label="Medium" className="text-gray-500 hover:text-red-600 transition-colors">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54,12l4.33-6.85a.75.75,0,0,0-.63-1.15H12.75a.77.77,0,0,0-.63.32L8.5,10.6,5.82,4.32A.77.77,0,0,0,5.19,4H1.06a.75.75,0,0,0-.63,1.15L5,12,0,18.85A.75.75,0,0,0,.63,20H4.81a.77.77,0,0,0,.63-.32L9,13.4l2.68,6.28a.77.77,0,0,0,.63.32h6.14a.75.75,0,0,0,.63-1.15Z" />
      </svg>
    </a>
  </div>
);


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logika untuk mengirim form (misalnya ke API)
    alert('Form submitted! Check console for data.');
    console.log(formData);
  };

  return (
    <div className={` ${poppins.className} min-h-screen flex items-center justify-center p-4`}>
      <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-bold text-red-700">
            We'll hear from you
          </h2>
          <p className="text-gray-500 mt-2">
            Share your thoughts and suggestions with us
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
          
          {/* Kolom Kiri: Input Fields */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <CustomInput label="First Name" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
            <CustomInput label="Last Name" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
            <CustomInput label="Email" name="email" type="email" placeholder="john@gmail.com" value={formData.email} onChange={handleChange} />
            <CustomInput label="Phone Number" name="phone" placeholder="08xxxxxxxx" value={formData.phone} onChange={handleChange} />
          </div>

          {/* Kolom Kanan: Text Area */}
          <div className="relative lg:row-span-2">
            <label htmlFor="message" className="text-gray-500 text-sm font-semibold">
              Tell Your Ideas and Critiques
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell Your Ideas and Critiques"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full h-full mt-1 bg-white border border-gray-200 rounded-xl shadow-md p-4 focus:ring-2 focus:ring-red-500 focus:outline-none transition-shadow"
              required
            ></textarea>
            <button type="submit" aria-label="Send Message" className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-transform transform hover:scale-110">
              <svg className="w-6 h-6 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </div>
        </form>

        {/* Social Icons */}
        <SocialIcons />
      </div>
    </div>
  );
}