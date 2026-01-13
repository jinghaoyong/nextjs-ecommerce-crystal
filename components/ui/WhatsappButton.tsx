"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "60107640926"; // change this
  const message = "Hello! I would like to know more!";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const hasCompletedGuide = localStorage.getItem("whatsapp_guide_done");
    if (!hasCompletedGuide) {
      setShowGuide(true);
    }
  }, []);

  const finishGuide = () => {
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
        onClick={finishGuide}
        className={`fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-green-600 transition-all z-50 ${showGuide ? "animate-pulse scale-110" : ""
          }`}
        style={{ width: "60px", height: "60px" }}
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Guide Bubble — No blur, no blocking, clean */}
      {showGuide && (
        <div
          className="fixed z-50 flex flex-col items-end"
          style={{
            bottom: "95px", // stays right above the button
            right: "5px",
          }}
        >
          <div className="relative bg-white text-black px-4 py-3 rounded-lg shadow-xl border border-gray-200 max-w-[260px]">
            {/* Close icon */}
            <button
              onClick={finishGuide}
              className="absolute -top-2 -right-2 bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-gray-300"
            >
              ✕
            </button>

            Tap here to chat with us! 👇
          </div>
        </div>
      )}
    </>
  );
}
