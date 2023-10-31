import { useEffect, useState } from 'react'
import { customFetch } from '../../customFetch'

const apiUrl = 'https://api.artic.edu/api/v1/artworks/search?q=cats'

export const TestFetch = () => {
  const [state, setState] = useState<any>()

  useEffect(() => {
    customFetch(apiUrl)
      .then((res) => res.json())
      .then((res) => JSON.stringify(res, null, 2))
      .then(setState)
  }, [])

  return <code>{state}</code>
}
