
interface IOrders {
    id: string,
    name: string,
    price: number,
    priceTotal: number,
    
}



class Api{

    constructor(dataOrders: {}[], dataVans, dataHosts) {
      this.dataOrders = dataOrders, 
      this.dataVans = dataVans, 
      this.dataHosts = dataHosts
    }
  
    setId() {
      const items = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
      const number = 36
      return items.map(el => items[Math.floor(Math.random() * 36)]).join('')
    }
    
    setDate() {
      const currentdate = new Date(); 
      return currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() 
    }
    
    getListOfOrders() {
      return this.dataOrders
    }
    
    getListOfVans() {
      return this.dataVans
    }
    
    getListOfHosts() {
      return this.dataHosts
    }
    
    setListOfOrders(name, price, hostId, rentDateStart, rentDateEnd) {
      this.dataOrders.push(
        {
          is: setId(),
          name: name,
          price: price,
          hostId: hostId,
          orderDate: setDate()
          rentDateStart: this.rentDateStart,
          rentDateEnd: this.rentDateEnd,
          inProzes: true,
        }
      )
    }
  } 
  
  const currentdate = new Date(); 
  const datetime = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() 
  // + " / "  
  // + currentdate.getHours() + ":"  
  // + currentdate.getMinutes() + ":" 
  // + currentdate.getSeconds();
  
  console.log(datetime)