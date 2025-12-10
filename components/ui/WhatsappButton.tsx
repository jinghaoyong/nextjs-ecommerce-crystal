"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "60123456789"; // change this
  const message = "Hello! I would like to know more!";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const hasCompletedGuide = localStorage.getItem("whatsapp_guide_done");

    // if (!hasCompletedGuide) {
      setShowGuide(true);
    // }
  }, []);

  const handleClickWhatsApp = () => {
    localStorage.setItem("whatsapp_guide_done", "true");
    setShowGuide(false);
  };

  const handleSkip = () => {
    localStorage.setItem("whatsapp_guide_done", "true");
    setShowGuide(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClickWhatsApp}
        className={`fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 transition-all z-50 ${
          showGuide ? "animate-pulse scale-110" : ""
        }`}
        style={{ width: "60px", height: "60px" }}
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Onboarding Guide */}
      {showGuide && (
        <>
          {/* Dark Overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>

          {/* Instruction Bubble */}
          <div className="fixed bottom-32 right-5 bg-white text-black px-4 py-2 rounded-lg shadow-lg z-50">
            👇 Tap here to chat with us!
          </div>

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="fixed bottom-5 left-5 bg-gray-200 text-black px-4 py-2 rounded-lg shadow-lg z-50 hover:bg-gray-300"
          >
            Skip / Close
          </button>

          {/* Click Blocker (prevents clicking anything except button or skip) */}
          <div className="fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
}
