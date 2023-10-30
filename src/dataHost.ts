export interface Host {
  name: string
  id: string
  income: number
  reviewScore: number
  diagram: string
  transactions: {
    orderPrice: number
    orderDate: string
    id: string
  }[]
}

export const dataHost: Host[] = [
  {
    name: 'host123',
    id: '12',
    income: 2260,
    reviewScore: 4,
    diagram: '/src/images/graf.png',
    transactions: [
      { orderPrice: 720, orderDate: '1/12/22', id: 'host12301' },
      { orderPrice: 560, orderDate: '10/11/22', id: 'host12302' },
      { orderPrice: 980, orderDate: '23/11/22', id: 'host12303' },
    ],
  },
  {
    name: 'host456',
    id: '13',
    income: 1050,
    reviewScore: 5,
    diagram: '/src/images/graf.png',
    transactions: [
      { orderPrice: 720, orderDate: '1/12/22', id: 'host45601' },
      { orderPrice: 560, orderDate: '10/11/22', id: 'host45602' },
      { orderPrice: 980, orderDate: '23/11/22', id: 'host45603' },
    ],
  },
  {
    name: 'host789',
    id: '14',
    income: 6000,
    reviewScore: 4,
    diagram: '/src/images/graf.png',
    transactions: [
      { orderPrice: 720, orderDate: '1/12/22', id: 'host78901' },
      { orderPrice: 560, orderDate: '10/11/22', id: 'host78902' },
      { orderPrice: 980, orderDate: '23/11/22', id: 'host78903' },
    ],
  },
]
