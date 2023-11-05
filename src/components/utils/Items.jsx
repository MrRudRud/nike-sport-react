/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {ShoppingBagIcon, StarIcon} from "@heroicons/react/24/solid";

const Items = ({id, title, text, rating, btn, img, price, color, shadow}) => {
  return (
    <>
      {/* text content */}
      <div
        className={`relative grid items-center justify-items-center bg-gradient-to-b ${color} ${shadow} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className="grid items-center justify-items-center">
          <h1 className="text-slate-200 text-xl font-medium filter drop-shadow lg:text-lg md:text-base">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28">
            <div className="flex items-center bg-white/80 rounded px-1 blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <h1 className="font-normal md:text-sm text-slate-100">{rating}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button type="button">
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme py-1 px-2 shadow shadow-sky-200"
            >
              {btn}
            </button>
          </div>
          {/* image content */}
          <div>
            <img
              src={img}
              alt={`img/item-img/${id}`}
              className="h-33 w-64 transitions-theme hover:-rotate-12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
