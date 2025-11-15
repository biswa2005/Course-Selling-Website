import React from "react";

const StatsSection = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Stat 1 */}
          <div>
            <h2 className="text-5xl font-extrabold text-white">5,000+</h2>
            <p className="text-gray-400 tracking-widest text-sm mt-3">
              STUDENTS GUIDED
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="text-5xl font-extrabold text-white">92%</h2>
            <p className="text-gray-400 tracking-widest text-sm mt-3">
              SELECTION RATE
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h2 className="text-5xl font-extrabold text-white">450+</h2>
            <p className="text-gray-400 tracking-widest text-sm mt-3">
              NEET SELECTIONS
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h2 className="text-5xl font-extrabold text-white">4.9/5</h2>
            <p className="text-gray-400 tracking-widest text-sm mt-3">
              STUDENT RATING
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
