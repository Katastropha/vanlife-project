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

  ordersIDs: string[]
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
    ordersIDs: ['11223344', '11223347', '11223348'],
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
    ordersIDs: ['11223345', '11223349', '11223350', '11223351'],
  },
  {
    name: 'host789',
    id: '14',
    income: 6000,
    reviewScore: 4,
    diagram: '/src/images/graf.png',
    transactions: [{ orderPrice: 720, orderDate: '1/12/22', id: 'host78901' }],
    ordersIDs: ['11223346'],
  },
  {
    name: 'host101112',
    id: '15',
    income: 0,
    reviewScore: 0,
    diagram: '',
    transactions: [],
    ordersIDs: [],
  },
]
