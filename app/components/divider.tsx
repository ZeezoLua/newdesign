import React from "react";

interface DividerProps {
  text?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ text, className = "" }) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <div className="flex-grow h-px bg-gray-300" />
      {text && (
        <span className="mx-4 text-gray-500 text-sm whitespace-nowrap">
          {text}
        </span>
      )}
      <div className="flex-grow h-px bg-gray-300" />
    </div>
  );
};

export default Divider;
