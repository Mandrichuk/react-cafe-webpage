import React from "react";


export default function CreateHeader() {
  const header = (
    <header>

      <nav className="flex flex-row justify-between items-center ml-[90px] mr-[90px] ">
        <div className="mt-0 pointer">
          <img className="w-[120px] object-cover" src="images/icons/drink-food-logo.png"/>
        </div>
        <div className="mt-0 pointer flex flex-row justify-between items-cente">
          <div className="text-white border border-solid border-white border-t-0 p-[15px] transition-all duration-150 ease-in-out hover:bg-white hover:text-black opacity-[0.7]">
            Номер
          </div>
          <div className="text-white border border-solid border-white border-t-0 p-[15px] transition-all duration-150 ease-in-out hover:bg-white hover:text-black opacity-[0.7]">
            Пр. Соборний 4-б
          </div>
          <div className="text-white border border-solid border-white border-t-0 p-[15px] transition-all duration-150 ease-in-out hover:bg-white hover:text-black opacity-[0.7]">
            Меню
          </div>
        </div>
      </nav>

      <div className="mt-[20px] ml-[25%]">
        <div className="text-white text-[0.8rem] mt-[30px]">Ласкаво просимо</div>
        <div className="text-white text-[3rem] font-bold mb-[5px] ">Drink&Food</div>
        <div className="text-white text-[1rem]">Смачні страви та напої</div>
      </div>

    </header>
  );

  return header;
}