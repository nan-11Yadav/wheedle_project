import React from "react";
const AudienceCard = ({ image, tag, title, desc, size }) => {
  const isLarge = size === "large";

  return (
    <div
      className={`
        bg-[#0B1220]
        overflow-hidden
        ${isLarge 
          ? "w-[393.33px] h-[661px] rounded-[30px]" 
          : "w-full rounded-[20px]"
        }
      `}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[60%] object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col gap-[10px]">
        <p className="text-xs text-blue-400">{tag}</p>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-blue-100">{desc}</p>
      </div>
    </div>
  );
};

export default AudienceCard;
