import React from "react";

const StatsSection = () => {
  return (
    <section className="relative w-full py-24 bg-[#1e1b4b] overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
      <div className="absolute bottom-16 right-16 w-40 h-40 border border-white/20 rotate-12"></div>
      <div className="absolute bottom-1/2 left-1/4 w-3 h-3 bg-white/30 rotate-45"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/30 rotate-45"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Section Label */}
        <div className="inline-block mb-24 px-6 py-2 bg-white/10 text-white tracking-widest text-lg font-semibold rounded">
          OUR IMPACT
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              5,000+
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto my-4"></div>
            <p className="text-gray-300 tracking-widest text-sm">
              STUDENTS GUIDED
            </p>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              92%
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto my-4"></div>
            <p className="text-gray-300 tracking-widest text-sm">
              SELECTION RATE
            </p>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              450+
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto my-4"></div>
            <p className="text-gray-300 tracking-widest text-sm">
              NEET SELECTIONS
            </p>
          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              4.9/5
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto my-4"></div>
            <p className="text-gray-300 tracking-widest text-sm">
              STUDENT RATING
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
