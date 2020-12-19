var city = ["London","NewYork",["Red","Yellow",["audi","bmw"],"Green"],"Delhi","Amsterdam"]

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            if(Array.isArray(city[i][j])){
                for(p=0;p<city[i][j].length;p++){
                    console.log(city[i][j][p])
                }
            }else{
                console.log(city[i][j])
            }
        }
    }else{
        console.log(city[i])
    }
}