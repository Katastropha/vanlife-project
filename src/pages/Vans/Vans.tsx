import { ReactElement, useState, useEffect } from 'react'

import { initialVans } from '../../data/dataVans'
import { VanFilterButtonComponent } from './components/VanFilterButtonComponent'
import { getFilteredVans } from './getFilteredVans'
import { getVansForRent } from './getVansForRent'
import { ClearButton } from './ClearButton'

import './vans-css/vans.css'
import './vans-css/vanCard.css'

const Vans = (): ReactElement => {
  const [vansForRent, setVansForRent] = useState(initialVans)
  const [isFiltered, setIsFiltered] = useState(false)

  const vans = getVansForRent(vansForRent)

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
    <div className="content vans-component">
      <div className="vans-component__filter">
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
          <ClearButton
            handleFilter={() => setIsFiltered(false)}
            text={'Clear filters'}
          />
        )}
      </div>

      <div className="vans-component__items">{vans}</div>
    </div>
  )
}
export default Vans
