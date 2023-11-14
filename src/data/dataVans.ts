export interface IVans {
  // map(arg0: (el: any) => import('react/jsx-runtime').JSX.Element): unknown
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
  comments?: {
    id: string
    userName: string
    comment: string
    date: string
    rate: number
  }[]
}

export const initialVans: IVans[] = [
  {
    id: 1,
    name: 'Modest Explorer',
    price: 60,
    description:
      'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
    type: 'simple',
    comments: [
      {
        id: '11',
        userName: 'user11',
        comment: 'this is a comment from user11',
        date: '1 December 2022',
        rate: 5,
      },
    ],
  },
  {
    id: 2,
    name: 'Beach Bum',
    price: 80,
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/beach-bum.png',
    type: 'rugged',
    comments: [
      {
        id: '12',
        userName: 'user12',
        comment: 'this is a comment from user12',
        date: '5 August 2023',
        rate: 5,
      },
    ],
  },
  {
    id: 3,
    name: 'Reliable Red',
    price: 100,
    description:
      "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/reliable-red.png',
    type: 'luxury',
    comments: [
      {
        id: '13',
        userName: 'user13',
        comment: 'this is a comment from user13',
        date: '6 June 2022',
        rate: 4,
      },
    ],
  },
  {
    id: 4,
    name: 'Dreamfinder',
    price: 65,
    description:
      'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png',
    type: 'simple',
    comments: [],
  },
  {
    id: 5,
    name: 'The Cruiser',
    price: 120,
    description:
      'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png',
    type: 'luxury',
    comments: [
      {
        id: '14',
        userName: 'user14',
        comment: 'this is a comment from user14',
        date: '6 June 2022',
        rate: 3,
      },
      {
        id: '15',
        userName: 'user15',
        comment: 'this is a comment from user15',
        date: '6 Mai 2023',
        rate: 4,
      },
    ],
  },
  {
    id: 6,
    name: 'Green Wonder',
    price: 70,
    description:
      "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/green-wonder.png',
    type: 'rugged',
    comments: [
      {
        id: '16',
        userName: 'user16',
        comment: 'this is a comment from user16',
        date: '10 Jule 2022',
        rate: 3,
      },
      {
        id: '17',
        userName: 'user17',
        comment: 'this is a comment from user17',
        date: '3 June 2022',
        rate: 4,
      },
    ],
  },
]
