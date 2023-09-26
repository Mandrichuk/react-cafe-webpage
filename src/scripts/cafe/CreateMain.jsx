import React from "react";

import circlesData from "../../data/cafe/circlesData.js";
import Circle from "./materials/CreateCircles.jsx";

import menuData from "../../data/cafe/menuData.js";
import Menu from "./materials/CreateMenu.jsx";

import infoBar from "./materials/CreateInfoBar.jsx";

import storyData from "../../data/cafe/storyData.js";
import CreateStory from "./materials/CreateStory.jsx";

import locationData from "../../data/cafe/locationData.js";
import CreateLocation from "./materials/CreateLocation.jsx";



const locationHTML = (
  <CreateLocation
    key={locationData.id}
    {...locationData}
  />
);

const StoryHTML = (
  <CreateStory 
    key={storyData.id}
    {...storyData} 
  />
);

const infoBarHTML = (
  infoBar()
);

const circlesHTML = (
  circlesData.map(circleData => {
    return <Circle
      key={circleData.id} 
      {...circleData}
    />
  })
);

const menuHTML = (
  menuData.map(positionData => {
    return <Menu 
      key={positionData.id}
      {...positionData}
    />
  })
);



export default function CreateMain() {
  const main = (
    <main>
      <div className="flex flex-col justify-center items-center w-[100%] height-[830px] mb-[60px]">
        {StoryHTML}

        <div className="flex items-center justify-center w-[100%] absolute top-[680px]">
          <img className="meal-image w-[550px] h-[350px] object-cover" src="images/background/hotdogs.jpg"/>
        </div>

        <div className="mt-[350px] w-[100%]">
          <img className="h-[200px] w-[100%] object-cover" src="images/background/plates-on-table.jpg"/>
        </div>

        <div className="w-[100%]">
          {circlesHTML}
        </div>
      </div>

      <div className="flex flex-col items-center w-[100%] h-[1000px] m-[320px]">

        <div className="flex items-center flex-center relative bg-black h-[550px] w-[100%] mt-[240px]">
        
        </div>

        <div className="flex flex-col items-center absolute w-[100%]">
          <div className="text-[1.8rem] font-bold color-black">
            Перегляньте наше меню
          </div>

        <div className="flex flex-row justify-center items-center">
          {menuHTML}
        </div>

        {locationHTML}
        
        <div className="flex flex-col items-center justify-center w-[100%] mb-[100px] mt-[50px]">
          {infoBarHTML} 
        </div>

      </div>
      </div>

    </main>
  );

  return main;
}