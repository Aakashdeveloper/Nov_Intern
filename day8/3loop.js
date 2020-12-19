for
while loop
do while loop
for of
////////////////////
for in > object
Map
filter

/////////////////
for(var i=0; i<5; i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London","NewYork","Delhi","Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
London
NewYork
Delhi
Amsterdam

var city = ["London","NewYork",["Red","Yellow",["audi","bmw"],"Green"],"Delhi","Amsterdam"]

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log("this is j>",city[j])
            if(Array.isArray(city[j])){
                for(p=0;p<city[j].length;p++){
                    console.log(city[j][p])
                }
            }else{
                console.log(city[i][j])
            }
           

        }
    }else{
        console.log(city[i])
    }
}

for(i=0;i<city.length;i++){
    console.log(city[i])
}


for(i=0;i<city.length;i++){
    for(j=0;j<city[i].length;j++){
        console.log(city[i][j])

    }
}
l
o
n
d 
o
n
London
NewYork
Red
Yellow
Green
Delhi
Amsterdam

////
while
/////

var i = 0;
while(i<5){
    console.log(i)
    i++
}
0
1
2
3
4

///do while////
var i =0;
do{
    console.log(i)
    i++
}
while(i<5)
0
1
2
3
4


var i = 10;
while(i<5){
    console.log(i)
    i++
}


///do while////
var i =0;
do{
    console.log(i)
    i++
}
while(i<5);
10


var city = ["London","NewYork","Delhi","Amsterdam"]
var i = 0;
while(i<city.length){
    console.log(city[i])
    i++
}

////for of
var city = ["London","NewYork","Delhi","Amsterdam"]

for(let mycity of city){
    console.log(mycity)
}

var city = ["London","NewYork",["Red","Yellow","Green"],"Delhi","Amsterdam"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}

