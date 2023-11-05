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
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <div>
            <h1>${price}</h1>
          </div>
          <div>
            <StarIcon className="icon-style" />
            <h1>{rating}</h1>
          </div>
        </div>
        <button type="button">
          <ShoppingBagIcon className="icon-style" />
        </button>
        <button type="button">{btn}</button>
        {/* image content */}
        <div>
          <img src={img} alt={`img/item-img/${id}`} />
        </div>
      </div>
    </>
  );
};

export default Items;
