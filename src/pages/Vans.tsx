import { ReactElement, useState } from "react";
import { Product } from "../components/index.js";

import initialVans from "../data.ts";

const Vans = (): ReactElement => {
  const [vanData, setVans] = useState(initialVans);

  const getVans = ({ str }: { str: string }): void => {
    console.log(str);
  };

  console.log("vans are here!");

  const vans = vanData.map((el): ReactElement => {
    return (
      <Product
        key={el.id}
        name={el.name}
        price={el.price}
        type={el.type}
        image={el.imageUrl}
      />
    );
  });

  return (
    <div className="vans-component">
      <div className="vans-component__filter">
        <button
          className="van-filter-btn"
          onClick={() => {
            // getVans("simple");
            console.log("simple");
          }}
        >
          simple
        </button>

        <button
          className="van-filter-btn"
          onClick={() => {
            // getVans("rugged");
            console.log("rugged");
          }}
        >
          rugged
        </button>

        <button
          className="van-filter-btn"
          onClick={() => {
            // getVans("luxury");
            console.log("luxury");
          }}
        >
          luxury
        </button>
      </div>
      <div className="vans-component__items">{vans}</div>
    </div>
  );
};

export default Vans;
