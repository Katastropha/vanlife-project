type Props = {
  handleListOfVans: () => void
  type: string
}

export const VanFilterButton = ({ handleListOfVans, type }: Props) => {
  return (
    <button
      className="van-filter-btn"
      onClick={() => {
        handleListOfVans()
      }}
    >
      {type}
    </button>
  )
}
