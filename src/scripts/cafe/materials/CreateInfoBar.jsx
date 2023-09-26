import React from "react";


export default function CreateInfoBar() {

  const infoBar = (
    <div className="flex flex-row items-center justify-between w-[80%] h-[200px] rounded-[10px] border-2 border-solid border-black  ">
      <div className="flex flex-col ml-[25px]">
        <img className="w-[150px] object-cover" src="images/icons/brand-logo.png"/>
      </div>

      <div className="flex flex-col items-center justify-between mt-[60px]">
        <div className="flex flex-row items-center justify-between mr-[25px]">

          <a href="#" className="mr-[25px]">
            <div className="nav__link-container">
              Головна
            </div>
          </a>
          <a href="#" className="mr-[25px]">
            <div className="nav__link-container">
              Про нас
            </div>
          </a>
          <a href="#" className="mr-[25px]">
            <div className="nav__link-container">
              Меню
            </div>
          </a>
          <a href="#" className="mr-[25px]">
            <div className="nav__link-container">
              Локація
            </div>
          </a>
          <a href="#" className="mr-[25px]">
            <div className="nav__link-container">
              Контакти
            </div>
          </a>

        </div>

        <div className="ml-[35%]"> 
          <a target="_blank" href="https://t.me/Drink_Food_zp">
            <button className="border border-solid border-black rounded-md text-[0.75rem] pl-[13px] pr-[13px] pt-[15px] mr-[15px] pb-[15px] cursor-pointer hover:bg-telegram-blue hover:text-white">
                Telegram
            </button>
          </a>
          <a target="_blank" href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D">
            <button className="border border-solid border-black rounded-md text-[0.75rem] pl-[13px] pr-[13px] pt-[15px] pb-[15px] cursor-pointer">
              Instagram
            </button>
          </a>
        </div>

      </div>

    </div>
  );

  return infoBar;
}