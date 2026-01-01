import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-28 px-6 overflow-hidden bg-[#f3f4f6]">
      {/* Diagonal background pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #e5e7eb 0px, #e5e7eb 40px, transparent 40px, transparent 80px)",
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-16 right-24 w-32 h-32 border-2 border-slate-400/60 rotate-45"></div>
      <div className="absolute bottom-16 left-24 w-32 h-32 border-2 border-slate-400/60 rotate-12"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-8 px-6 py-2 bg-[#1f1f4d] text-white text-sm tracking-widest font-semibold">
          JOIN THE SUCCESS MOVEMENT
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#1f1f4d] tracking-tight">
          READY TO
        </h2>

        <h2 className="mt-0.5 text-4xl md:text-6xl font-extrabold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
          START LEARNING?
        </h2>
        {/* Sleek Divider Line */}
        <div className="flex justify-center mt-4 mb-6">
          <div className="w-32 md:w-100 h-0.5 bg-gray-400/60"></div>
        </div>

        {/* Subtext */}
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-2xl text-gray-500 font-bold leading-relaxed">
          Join thousands of successful students and start your exam preparation
          journey today. No shortcuts, just smart preparation.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => navigate("/register")}
            className="
              bg-[#1f1f4d] text-white font-semibold text-lg px-10 py-4 rounded-xl 
              flex items-center gap-2 justify-center
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-xl cursor-pointer
            "
          >
            REGISTER NOW →
          </button>

          <button
            onClick={() => navigate("/success-stories")}
            className="
              border-2 border-[#1f1f4d] text-[#1f1f4d] font-semibold text-lg px-10 py-4 rounded-xl 
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-xl hover:bg-[#1f1f4d] hover:text-white cursor-pointer
            "
          >
            SUCCESS STORIES →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
