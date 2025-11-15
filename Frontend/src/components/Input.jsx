import React from 'react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon: Icon, 
  name,
  required = false,
  className = '' 
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full px-4 py-3 pr-12
          border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
          transition-all duration-200
          bg-white text-gray-900
          placeholder-gray-400
          ${className}
        `}
      />
      {Icon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Icon size={20} />
        </div>
      )}
    </div>
  );
};

export default Input;

