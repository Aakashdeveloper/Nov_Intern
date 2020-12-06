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