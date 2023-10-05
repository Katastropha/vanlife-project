import { ReactElement } from "react";

type VanDetailProps = {
  id: number;
  name: string;
  price: number;
  type: string;
  description: string;
};

const VanDetail = (): ReactElement => {
  return (
    <div className="van-detail">
      <div className="van-detail__img">{}</div>
      <button className="van-detail__btn">{}</button>
      <h1 className="van-detail__name">{}</h1>
      <span className="van-detail__price">${}</span>
      <span>/day</span>
      <p className="van-detail__description">{}</p>
    </div>
  );
};
