"use client";
import { poppins } from '@/styles/font';
import { Send } from 'lucide-react';
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
      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none py-2 transition-colors duration-300 placeholder:text-gray-200"
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={` ${poppins.className} min-h-screen flex items-center justify-center p-2`}>
      <div className="bg-white w-full max-w-5xl mx-auto rounded-2xl shadow-lg p-8 md:p-12 ">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-bold text-red-700">
            We'll hear from you
          </h2>
          <p className="text-gray-500 mt-2 mb-8">
            Share your thoughts and suggestions with us
          </p>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 items-stretch mt-12 mb-16"
        >
          {/* Kolom Kiri */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <CustomInput label="First Name" name="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
            <CustomInput label="Last Name" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
            <CustomInput label="Email" name="email" type="email" placeholder="john@gmail.com" value={formData.email} onChange={handleChange} />
            <CustomInput label="Phone Number" name="phone" placeholder="08xxxxxxxx" value={formData.phone} onChange={handleChange} />
          </div>

          {/* Kolom Kanan: Text Area */}
          <div className="relative h-full flex flex-col md:col-span-2">
            <label htmlFor="message" className="text-gray-500 text-sm font-semibold">
              Tell Your Ideas and Critiques
            </label>
            <div className="relative flex-1">
              <textarea
                id="message"
                name="message"
                placeholder="Let us know here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full md:h-full h-[200px] mt-1 bg-white border border-gray-200 rounded-xl shadow-md p-4 pr-14 focus:ring-2 focus:ring-red-500 focus:outline-none transition-shadow resize-none placeholder:text-gray-200"
                required
              ></textarea>
              <button
                type="submit"
                aria-label="Send Message"
                disabled={isSubmitting}
                className={`absolute bottom-4 right-4 rounded-full w-12 h-12 flex items-center justify-center 
                            transition-transform duration-200 transform ${
                              isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700 hover:scale-110 mr-0.5'
                            }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-6 h-6 text-white items-center justify-center mr-0.5" />
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Social Icons */}
        {/* <SocialIcons /> */}
      </div>
    </div>
  );
}