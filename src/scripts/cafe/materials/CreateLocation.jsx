import React from "react";


export default function CreateLocation(props) {
  const { name, tagline, location, contacts } = props;

  const locationHTML = (

    <div className="flex justify-center items-center relative w-[100%] h-[100%]">
    <a className="maps-link" href="link-to-location">
      <img className="max-w-[50%] max-h-[50%] mr-[250px] mt-[80px] object-cover" src="images/decorations/location.jpg" />
    </a>

    <div className="flex justify-center items-center absolute w-[100%] h-[100%]">

      <div className="bg-black w-[70%] h-[60%] max-w-[600px] mt-[80px] ml-[200px] object-cover border">
        <div className="m-[5%]">

          <div className="text-white text-[4rem] m-0">
            {name}
          </div>
          <div className="text-white text-[1rem] mb-[20px]">
            {tagline}
          </div>

          <div className="border-t-2 border-white flex flex-col items-left">
            <div className="text-white text-[0.9rem] mt-[20px]">
              {location}
            </div>
            <div className="text-white text-[0.9rem]">
              {contacts}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

  return locationHTML;
}