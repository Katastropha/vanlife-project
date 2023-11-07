import { ReactElement } from 'react'

type Props = {
  handleFilter: () => void
  text: string
}
export const ClearButton = ({ handleFilter, text }: Props): ReactElement => (
  <button onClick={handleFilter} className="van-filter-btn-clear">
    {text}
  </button>
)
