import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const HomeProjectCard = ({ project, key }) => {
  return (
    <div className="bg-darkSecondary">
      <div className="w-full h-[180px] overflow-clip">
        <img className="object-cover" src={project.image} alt={project.title} />
      </div>
      <div className="p-3 flex flex-col items-stretch justify-between">
        <div>
          <h2 className="font-bold text-xl mb-4">{project.title}</h2>
        </div>
        <p className="font-sm text-opacity-60 text-white">Tech Stack</p>
        <div className="flex items-center justify-start gap-2 mt-2">
          <TbBrandNextjs size={30} />
          <SiTailwindcss size={30} />
          <IoLogoVercel size={30} />
        </div>
      </div>
    </div>
  );
};

export default HomeProjectCard;
