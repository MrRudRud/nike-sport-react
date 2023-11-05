import Items from "./utils/Items";
import Title from "./utils/Title";

/* eslint-disable react/prop-types */
const Sales = ({endpoint: {title, items}}) => {
  // console.log({endpoint: {title, items}});
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          {items.map((items, i) => (
            <Items key={i} {...items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
