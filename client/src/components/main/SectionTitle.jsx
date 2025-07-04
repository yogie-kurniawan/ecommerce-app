import React from "react";

const SectionTitle = ({ children, align = "left" }) => {
  return (
    <h1
      className={`text-${align} text-lg md:text-2xl font-medium text-gray-700 mb-2 md:mb-4`}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
