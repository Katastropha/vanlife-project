import styles from './VanFilterButtonComponent.module.css'

type Props = {
  handleListOfVans: () => void
  type: string
}

export const VanFilterButtonComponent = ({ handleListOfVans, type }: Props) => {
  return (
    <button
      className={styles['van-filter-btn']}
      onClick={() => {
        handleListOfVans()
      }}
    >
      {type}
    </button>
  )
}
