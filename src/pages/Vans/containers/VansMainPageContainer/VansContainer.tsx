import { ReactElement, useState, useEffect } from 'react'

import { initialVans } from '../../../../data/dataVans'
import { VanFilterButtonComponent } from '../../components/VanFilterButtonComponent'
import { getFilteredVans } from '../../getFilteredVans'
import { VansForRentContainer } from '../VansForRentContainer/VansForRentContainer'
import { ClearButtonComponent } from '../../components/VanClearButtonComponent/ClearButtonComponent'

import styles from './VansContainer.module.css'

export const VansContainer = (): ReactElement => {
  const [vansForRent, setVansForRent] = useState(initialVans)
  const [isFiltered, setIsFiltered] = useState(false)

  const vans = VansForRentContainer(vansForRent)

  const handleFilteredList = (type: string) => {
    setIsFiltered(true)
    setVansForRent(getFilteredVans(type))
  }

  useEffect(() => {
    if (!isFiltered) {
      setVansForRent(initialVans)
    }
  }, [isFiltered])

  return (
    <div className={styles['content vans-component']}>
      <div className={styles['vans-component__filter']}>
        <VanFilterButtonComponent
          handleListOfVans={() => {
            handleFilteredList('simple')
          }}
          type={'simple'}
        />
        <VanFilterButtonComponent
          handleListOfVans={() => {
            handleFilteredList('rugged')
          }}
          type={'rugged'}
        />

        <VanFilterButtonComponent
          handleListOfVans={() => {
            handleFilteredList('luxury')
          }}
          type={'luxury'}
        />

        {isFiltered && (
          <ClearButtonComponent
            handleFilter={() => setIsFiltered(false)}
            text={'Clear filters'}
          />
        )}
      </div>

      <div className={styles['vans-component__items']}>{vans}</div>
    </div>
  )
}
