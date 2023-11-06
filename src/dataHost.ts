export interface Host {
  name: string
  id: string
  income: number
  reviewScore: number
  diagram: string
  ordersIDs: string[]
  reviews:
    | { id: string; name: string; date: string; text: string; rating: string }[]
    | []
  graph: string
}

export const dataHost: Host[] = [
  {
    name: 'host123',
    id: '12',
    income: 2260,
    reviewScore: 5,
    diagram: '/src/images/graf.png',
    ordersIDs: ['11223344', '11223347', '11223348'],
    reviews: [
      {
        id: 'Elliot120120221',
        name: 'Elliot',
        date: 'December 1, 2022',
        text: 'The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
        rating: '5',
      },
      {
        id: 'Sandy112320221',
        name: 'Sandy',
        date: 'November 23, 2022',
        text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
        rating: '4',
      },
    ],
    graph: 'src/images/reviews-graph.png',
  },
  {
    name: 'host456',
    id: '13',
    income: 1050,
    reviewScore: 0,
    diagram: '/src/images/graf.png',
    ordersIDs: ['11223345', '11223349', '11223350', '11223351'],
    reviews: [],
    graph: 'src/images/reviews-graph.png',
  },
  {
    name: 'host789',
    id: '14',
    income: 6000,
    reviewScore: 0,
    diagram: '/src/images/graf.png',
    ordersIDs: ['11223346'],
    reviews: [],
    graph: 'src/images/reviews-graph.png',
  },
  {
    name: 'host101112',
    id: '15',
    income: 0,
    reviewScore: 0,
    diagram: '',
    ordersIDs: [],
    reviews: [],
    graph: 'src/images/reviews-graph.png',
  },
]
