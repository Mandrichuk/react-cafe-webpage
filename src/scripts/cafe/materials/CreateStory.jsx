import React from "react";

export default function CreateStory(props) {
  const {title, firstSection, secondSection} = props;

  const story = (
    <div className="h-[600px] w-[70%] max-w-[650px] min-w-[500px] absolute top-[270px] bg-gradient-to-b from-custom-green via-custom-green-lighter to-black ml-[60px] mr-[60px]">

      <div className="m-[30px] text-[1.6rem] font-bold text-white">Наша історія</div>

        <div className="flex flex-row items-top justify-between ml-[60px] m-[30px]">
          <div className="w-[260px] text-white">
            Ласкаво просимо до нашого ресторану "Drink&Food" – місця, де    справжній гурман завжди знайде щось за смаком!

            Наш заклад – це ідеальне поєднання кафе, де можна насолодитися    ароматним кавою і свіжозавареними еспресо, і пивного бару з   величезним   вибором місцевих та імпортних сортів пива. Ми гордо  представляємо   найкращі сорти крафтового пива та традиційних видів,   щоб задовольнити   смак кожного нашого гостя.
          </div>
          <div className="mr-[30px] w-[260px] text-white">
            Ми пропонуємо затишну атмосферу та вишуканий сервіс, щоб ви могли насолодитися  часом, проведеним в "Drink&Food". Чи це сніданок з ароматною кавою, чи вечірка   з друзями за пивом та бургерами – ми завжди готові зустріти вас з посмішкою і   догодити вашим смакам.
          </div>
        </div>
    </div>

  );

  return story;
}