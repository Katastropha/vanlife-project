const mockResolved = {
  'https://api.artic.edu/api/v1/artworks/search?q=cats': {
    spc: 'asd',
  },
  'https://example.com': {},
}

export const customFetch: typeof fetch = (...args) => {
  if (import.meta.env.MOCKED_BACKEND) {
    const firstArg = args[0]

    let url: string

    if (firstArg instanceof URL) url = firstArg.toString()
    else if (firstArg instanceof Request) url = firstArg.url
    else url = firstArg

    const responseObj = mockResolved[url as keyof typeof mockResolved]
    if (!responseObj) throw new Error('Create mock for ' + url)

    return Promise.resolve(new Response(JSON.stringify(responseObj)))
  }

  return fetch(...args)
}

//  fetch() ------> Promise<Response>

// const getVans = () => Promise.resolve({
//   asd: 'asd'
// })

// const x = {
//   foo: 'bar',
//   asd: 'asd'
// }

// type X = typeof x

// const k: keyof X = 'asd'

// const b: X = {} as any

// b[k as keyof X]

// DI

// class Car {
//   fetchImpl: typeof fetch

//   constructor(fetchImpl : typeof fetch) {
//       this.fetchImpl = fetchImpl
//   }

//   getColorFromBE() {
//       return this.fetchImpl('https://api.com/carcolor')
//   }
// }

// const audiA4 = new Car(customFetch)
// audiA4.getColorFromBE()
