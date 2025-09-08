import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, MessagesSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <div className="mr-8">
                <Image
                  src="/logocps.png"
                  alt="CPS Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-black mr-3" />
                <span className="font-poppinstext-gray-800 text-sm">
                  Telkom University Landmark Tower (13.12) Bandung, Jawa Barat
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-black mr-3" />
                <span className="text-gray-800 text-sm">
                  cpslaboratory@telkomuniversity.ac.id
                </span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-black mr-3" />
                <span className="text-gray-800 text-sm">
                  OA Line: @jsj1167b
                </span>

              </div>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-black font-semibold mb-4">Contact Us</h4>
            <div className="flex space-x-4">
               <a
              href="https://www.instagram.com/cpslaboratory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/cpslaboratory/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-red-600"
            >
              <MessagesSquare size={24} />
            </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <p className="text-gray-700 text-sm">
                @2025 Cyber Physical System
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-700 text-sm hover:text-gray-900 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
