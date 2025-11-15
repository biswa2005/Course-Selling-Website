import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f5f5f5] py-20 px-4 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-black">
        READY TO <br />
        <span className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
          START LEARNING?
        </span>
      </h2>

      {/* Subtext */}
      <div className="flex justify-center w-[35vw]">
        <p className="mt-6 text-gray-600 max-w-2xl text-xl font-semibold">
          Join thousands of successful students and start your exam preparation
          journey today. No shortcuts, just smart preparation.
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-10 flex flex-col md:flex-row gap-4">
        {/* Register Button */}
        <button
          onClick={() => navigate("/register")}
          className="
            bg-black cursor-pointer text-white font-semibold text-lg px-10 py-4 rounded-lg 
            flex items-center gap-2 
            transition-all duration-200 
            hover:-translate-y-1 hover:shadow-lg
          "
        >
          REGISTER NOW →
        </button>

        {/* Success Stories Button */}
        <button
          onClick={() => navigate("/success-stories")}
          className="
            border border-black cursor-pointer text-black font-semibold text-lg px-10 py-4 rounded-lg 
            transition-all duration-200 
            hover:-translate-y-1 hover:shadow-lg hover:bg-black hover:text-white
          "
        >
          SUCCESS STORIES
        </button>
      </div>
    </div>
  );
};

export default CTASection;
