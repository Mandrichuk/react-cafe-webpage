import React from "react";

export default function CreateMenu(props) {
  const { id, name, category, imageSrc } = props;

  const lowerStyle = (id % 2 === 0) ? "lower-menu-container" : "";
  const separatedName = name.split(" ");

  const menu = (
    <div className={`bg-black flex dlex-col items-center justify-center relative w-[160px] h-[300px] pointer rounded mr-[15px] cursor-pointer ${lowerStyle}`}>
      <img className="w-[100%] h-[100%] object-cover rounded transition-all" src={`images/decorations/${imageSrc}`} />
      <div className="flex flex-col items-center absolute bottom-[20px] ">
        <p className="text-white text-[1.1rem]">{separatedName[0]}</p>
        <p className="text-white text-[1.1rem]">{separatedName[1]}</p>
      </div>
    </div>
  );

  return menu;
}