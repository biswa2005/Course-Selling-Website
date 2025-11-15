import React from "react";

const Card = ({ icon: Icon, title, description, bgColor = "bg-black" }) => {
  // Detect if card background is dark
  const isDark = bgColor.includes("black") || bgColor.includes("gray-900");

  const iconBg = isDark
    ? "bg-white border-white text-black"
    : "bg-black border-black text-white";

  return (
    <div
      className={`w-full mb-32 md:w-64 p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${bgColor}`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div
          className={`p-4 rounded-md flex items-center justify-center border-2 transition-transform duration-300 hover:scale-110 ${iconBg}`}
        >
          <Icon className="text-4xl" />
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-extrabold text-center uppercase leading-snug ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-center mt-4 leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
