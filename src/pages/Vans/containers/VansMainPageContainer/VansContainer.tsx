import { ReactElement, useState, useEffect } from 'react'

import { initialVans } from '../../../../data/dataVans'

import { getFilteredVans } from '../../getFilteredVans'

import { VanFilterButtonComponent } from '../../components/VanFilterButtonComponent'
import { VansForRentContainer } from '../VansForRentContainer/VansForRentContainer'
import { ClearButtonComponent } from '../../components/VanClearButtonComponent/ClearButtonComponent'

import styles from './VansContainer.module.css'

// TODO: Create [searchParams, setSearchParams] = useSearchParams()
// TODO: Create handleFilterChange = (key, value) => setSearchParams(prevParams => if(value === null) prevParams.delete(key)) ELSE prevParams.set(key, value); return prevParams

// TODO: Create: displayedVans: typeFilter ? vans.filter(({type}) => type === typeFilter) : vans
// TODO: Create: displayedVans.map((el) => <>...<Link to={el.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}} /> ...</>)

// TODO: Change <Link /> to <button /> with: onClick={() => handleFilterChange("type", "simple")}; className={`van-type simple ${typeFilter === "simple" ? "selected" : ''}`}

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
    <div className={`${styles['content']} ${styles['vans-component']}`}>
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
