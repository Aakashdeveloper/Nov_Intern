array is a collection of homogeneous data type and hetrogeneous datatype

var a = [1,2,3,4,5]
var b = ['eg','erreg','egerg','eferfgerg']
var c = [true,true,false,false,true]

var a = [234,43,'frfb',true,true,4543,'grg','fb',true]


var city = ["London","NewYork","Delhi","Amsterdam"]
typeof(city)
"object"

var city = ["London","NewYork","Delhi","Amsterdam"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city.push("Paris")
5
city
(5) ["London", "NewYork", "Delhi", "Amsterdam", "Paris"]

var city = ["London","NewYork","Delhi","Amsterdam"]
city.pop()
"Amsterdam"


var city = ["London","NewYork","Delhi","Amsterdam"]
city.pop()
"Amsterdam"

push> always add in the last of array
unshift > always start add in the beginning of array
pop > always take out last value of array
shift> always take out first value of array


var city = ["London","NewYork","Delhi","Amsterdam"]
undefined
city.unshift('Venice')
5
city
(5) ["Venice", "London", "NewYork", "Delhi", "Amsterdam"]
city.shift()
"Venice"


slice
splice


var city = ["London","NewYork","Delhi","Amsterdam"]
city.slice(1)
(3) ["NewYork", "Delhi", "Amsterdam"]
var city = ["London","NewYork","Delhi","Amsterdam"]
city.slice(2)
(2) ["Delhi", "Amsterdam"]
var city = ["London","NewYork","Delhi","Amsterdam"]
city.slice(1,3)
(2) ["NewYork", "Delhi"]
city
(4) ["London", "NewYork", "Delhi", "Amsterdam"]

city.splice(start,delete,values)


var city = ["London","NewYork","Delhi","Amsterdam"]
undefined
city.splice(2,0,'Dubai','Helsinki')
[]
city
(6) ["London", "NewYork", "Dubai", "Helsinki", "Delhi", "Amsterdam"]
city.slice(3,1)
[]
city
(6) ["London", "NewYork", "Dubai", "Helsinki", "Delhi", "Amsterdam"]
city.splice(3,1)
["Helsinki"]
city
(5) ["London", "NewYork", "Dubai", "Delhi", "Amsterdam"]


var city = ["London", "NewYork", "Dubai", "Helsinki", "Delhi", "Amsterdam"]
undefined
city.splice(3,1,'Venice','Mumbai')
["Helsinki"]
city
(7) ["London", "NewYork", "Dubai", "Venice", "Mumbai", "Delhi", "Amsterdam"]


var city = ["London", "NewYork", "Dubai",['red','yellow',['Audi','Bmw','Merc'],'green'], "Helsinki", "Delhi", "Amsterdam"];

city[2]
"Dubai"
city[3]
(4) ["red", "yellow", Array(3), "green"]
city[3][1]
"yellow"
city[3][2]
(3) ["Audi", "Bmw", "Merc"]
city[3][2][0]
"Audi"

var city = ["London", "NewYork", "Dubai",['red','yellow',['Audi','Bmw','Merc'],'green'], "Helsinki", "Delhi", "Amsterdam"];
undefined
city.flat()
(10) ["London", "NewYork", "Dubai", "red", "yellow", Array(3), "green", "Helsinki", "Delhi", "Amsterdam"]
city.flat(2)
(12) ["London", "NewYork", "Dubai", "red", "yellow", "Audi", "Bmw", "Merc", "green", "Helsinki", "Delhi", "Amsterdam"]


var a = ['a','b','c']
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
b+a
"1,2,3a,b,c"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
var c = ['INR','USD','GBP']
undefined
a.concat(b,c)
(9) ["a", "b", "c", 1, 2, 3, "INR", "USD", "GBP"]
c.concat(a,b)
(9) ["INR", "USD", "GBP", "a", "b", "c", 1, 2, 3]

//Destructure
var color = ["Red","Yellow","Green"]
var [a,b,c,d] = color


var myarr = ["London", "NewYork", "Dubai", "red", "yellow", "Audi", "Bmw", "Merc", "green", "Helsinki"]
undefined
myarr.sort()
(10) ["Audi", "Bmw", "Dubai", "Helsinki", "London", "Merc", "NewYork", "green", "red", "yellow"]
myarr.reverse()
(10) ["yellow", "red", "green", "NewYork", "Merc", "London", "Helsinki", "Dubai", "Bmw", "Audi"]
myarr.indexOf('London')
5
myarr.indexOf('Delhi')
-1
myarr.indexOf('Dubau')
-1
myarr.indexOf('Dubai')
7
myarr.includes('Dubai')
true
myarr.includes('Delhi')
false


var myarr = ["London", "NewYork",1, "Dubai", "red",2, "yellow",3, "Audi", "Bmw", "Merc", "green", "Helsinki"]
myarr.sort()
(13) [1, 2, 3, "Audi", "Bmw", "Dubai", "Helsinki", "London", "Merc", "NewYork", "green", "red", "yellow"]