import React from "react";

const CrazyButton = ({
  title,
  icon,
  position,
  handleClick,
  buttonClasses,
  bgColor= "bg-slate-950",
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  buttonClasses?: string;
  bgColor?:string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${buttonClasses}`}
      onClick={handleClick}
      
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBEF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             ${bgColor} hover:bg-gray-900 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 `}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default CrazyButton;