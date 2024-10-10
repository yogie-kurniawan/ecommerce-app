import React from "react";

const SectionTitle = ({ children, align = "left" }) => {
  return (
    <h1 className={`text-${align} text-3xl font-medium text-gray-700 mb-4`}>
      {children}
    </h1>
  );
};

export default SectionTitle;
