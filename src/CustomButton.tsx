import React from "react";

interface CustomButtonProps {
  onClick: () => void;
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, text }) => {
  return (
    <button className="bg-fuchsia-600 ease-in-out duration-300 hover:bg-fuchsia-500 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
