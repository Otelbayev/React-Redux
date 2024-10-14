import React from "react";
import { FiLoader } from "react-icons/fi";

const Spinner = ({ className }) => {
  return <FiLoader className={`animate-spin ${className}`} />;
};

export default Spinner;
