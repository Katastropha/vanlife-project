import { ReactElement } from 'react'

import styles from './ClearButtonComponent.module.css'

type Props = {
  handleFilter: () => void
  text: string
}
export const ClearButtonComponent = ({
  handleFilter,
  text,
}: Props): ReactElement => (
  <button onClick={handleFilter} className={styles['van-filter-btn-clear']}>
    {text}
  </button>
)
