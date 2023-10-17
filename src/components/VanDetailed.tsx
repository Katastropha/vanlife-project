import { ReactElement } from 'react'
import { IVans, initialVans } from '../data'
import { useParams } from 'react-router-dom'

export const VanDetailed = (): ReactElement | null => {
  const { id } = useParams()
  const van: IVans | undefined =
    typeof id === 'string'
      ? initialVans.find((el) => el.id === parseInt(id))
      : undefined
  console.log(van)

  if (!van) return null

  return (
    <div className="van-detail" key={van.id}>
      <p
        className="back"
        onClick={() => {
          console.log('BACK TO VANS')
        }}
      >
        <svg
          className="arrow"
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Arrow 1"
            d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z"
            fill="#858585"
          />
        </svg>
        Back to all vans
      </p>
      <div
        className="van-detail__img"
        style={{ backgroundImage: `url(${van.imageUrl})` }}
      ></div>
      <button className={`van-detail__btn ${van.type}`}>{van.type}</button>
      <h1 className="van-detail__name">{van.name}</h1>
      <span className="van-detail__price">${van.price}</span>
      <span className="per-day">/day</span>
      <p className="van-detail__description">{van.description}</p>
      <button
        className="btn"
        onClick={() => {
          console.log('rent this van')
        }}
      >
        Rent {van.name} van
      </button>
    </div>
  )
}
