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

ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]


var distinct = []
for (var i = 0; i < ratingData.length; i++){
    if (distinct.indexOf(ratingData[i].restaurant)==-1){
        distinct.push(ratingData[i].restaurant)
    }
}
  
var unique = ["KFC", "Burger King", "Domino", "Subway", "Pizza Hut"]

var avgRating = []
var outrating = 0;
var count =0
for(j=0;j<unique.length;j++){
    for(i=0;i<ratingData.length;i++){
        if(unique[j]==ratingData[i].restaurant){
            outrating += ratingData[i].rating;
            count = count+1
        }
    }
    outrating = Number(outrating)/count
    //console.log(`unique >>>${unique[j]},${outrating}`)
    avgRating.push(`${unique[j]}:${outrating}`)
    count=0
    outrating= 0
 }




