class restaurantManager{
    restaurantList = [
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    printAllRestaurentName =() => {
        return this.restaurantList.map((data) => {return data.restaurantName})
    }

    filterRestaurant = (cityName) => {
        return this.restaurantList.filter((data) => {return data.city==cityName})
    }
 }


 const restaurantObj = new restaurantManager();

 restaurantObj.printAllRestaurentName()
 restaurantObj.filterRestaurant('Pune')


 ///////////////////

 var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
   };

var out =0;
for(keys in orderData){ 
    out = out + Number(orderData[keys])
}
199


for(keys in orderData){ 
   var orderpercentage = 0;
   orderpercentage = ((orderData[keys]/199)*100).toFixed(2)
   console.log(`${orderpercentage}%`)

}
