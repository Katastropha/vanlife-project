import { ReactElement } from "react";

type VanDetailProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  description: string;
};

const VanDetail = ({
  id,
  name,
  image,
  price,
  tupe,
  description,
}: VanDetailProps): ReactElement => {
  return (
    <div className="van-detail">
      <div className="van-detail__img" style={{ backgroundImage: { image } }}>
        {}
      </div>
      <button className="van-detail__btn">{type}</button>
      <h1 className="van-detail__name">{name}</h1>
      <span className="van-detail__price">${}</span>
      <span>/day</span>
      <p className="van-detail__description">{}</p>
    </div>
  );
};

export default VanDetail;
