import React from "react";

const Card = ({ icon: Icon, title, description, bgColor, iconColor }) => {
  return (
    <div
      className={`
        w-full
        h-7xl
        flex flex-col
        items-center
        text-center
        p-6 sm:p-8
        rounded-2xl
        shadow-md
        transition-all duration-300 transform hover:-translate-y-2
        ${bgColor}
      `}
    >
      {/* Icon */}
      <div className={`mb-10 ${iconColor}`}>
        <Icon className="text-3xl sm:text-4xl hover:scale-120 transition-all duration-500" />
      </div>

      {/* Title */}
      <h3 className="text-base mb-10 sm:text-lg md:text-2xl font-semibold text-[#1f1f4d]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm sm:text-base md:text-xl text-gray-600 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default Card;
