import { ReactElement } from "react";

type ProductProps = {
  key: string;
  name: string;
  price: number;
  type: string;
  image: string;
};

const Product = ({
  key,
  name,
  price,
  type,
  image,
}: ProductProps): ReactElement => {
  //   const vanType = type.charAt(0).toUpperCase() + type.slice(1);
  const vanImage = {
    backgroundImage: `url(${image})`,
  };

  console.log("Van", key);

  return (
    <div className="van-product">
      <div className="product-van__img" style={vanImage}></div>
      <div className="product-van__info">
        <h3 className="van-name">{name}</h3>
        <span className="van-prise">
          ${price}
          <span className="van-price-small">/day</span>
        </span>
      </div>
      <button className={`product-van__btn ${type}`}>{type}</button>
    </div>
  );
};

export default Product;
