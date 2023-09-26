import React from "react";


export default function CreateCircules(props) {
  const { id, name, imageName } = props;

  const circule = (
    <div className={`flex justify-center items-center bg-white absolute w-[150px] h-[150px] shadow rounded-full pointer white-circle-container-${id}`}>
      <img className={`w-[60%]  product-image product-image-${id}`} src={`images/decorations/${imageName}`}    alt={`Product ${name}`} />
    </div>
  );

  return circule;
} 