export interface IOrdersData {
  id: string
  userId: string
  vanId: string
  dateStart: string
  dateEnd: string
  orderPrice: number
  orderDate: string
}

export const dataOrders: IOrdersData[] = [
  {
    id: '11223344',
    userId: '12',
    vanId: '1',
    dateStart: '12/04/20023',
    dateEnd: '17.04 2023',
    orderPrice: 720,
    orderDate: '1/12/22',
  },
  {
    id: '11223345',
    userId: '13',
    vanId: '1',
    dateStart: '20.06.2020',
    dateEnd: '30.06.2020',
    orderPrice: 720,
    orderDate: 'dd/mm/yy',
  },
  {
    id: '11223346',
    userId: '14',
    vanId: '1',
    dateStart: '01.06.2020',
    dateEnd: '10.06.2020',
    orderPrice: 720,
    orderDate: 'dd/mm/yy',
  },
  {
    id: '11223347',
    userId: '12',
    vanId: '2',
    dateStart: '10.06.2023',
    dateEnd: '30.06.2023',
    orderPrice: 560,
    orderDate: '10/11/22',
  },
  {
    id: '11223348',
    userId: '12',
    vanId: '4',
    dateStart: '12.06.2018',
    dateEnd: '12.07.2018',
    orderPrice: 980,
    orderDate: '23/11/18',
  },
  {
    id: '11223349',
    userId: '13',
    vanId: '1',
    dateStart: '12.06.2020',
    dateEnd: '',
    orderPrice: 300,
    orderDate: 'dd/mm/yy',
  },
  {
    id: '11223350',
    userId: '13',
    vanId: '1',
    dateStart: '12.06.2020',
    dateEnd: '',
    orderPrice: 720,
    orderDate: 'dd/mm/yy',
  },
  {
    id: '11223351',
    userId: '13',
    vanId: '1',
    dateStart: '12.06.2020',
    dateEnd: '',
    orderPrice: 300,
    orderDate: 'dd/mm/yy',
  },
]
