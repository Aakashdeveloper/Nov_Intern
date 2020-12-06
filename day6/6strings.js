var city = "LonDon";
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city.length
6

city[0]
"L"
city[1]
"o"

city.charAt(0)
"L"
city.charAt(1)
"o"

var city = "  Amsterdam "
undefined
city.length
12
city.trim()
"Amsterdam"
var city = "  Amsterdam . "
undefined
city.trim()
"Amsterdam ."

///
var username = "aakash"
var username1 = "AAKASH"
username == username1
false

username.toLowerCase() == username1.toLowerCase();

var city = "pArIS"
"Paris"

var city = "Venice"
city.slice(1)
"enice"
city.slice(2)
"nice"
city.slice(7)
""

var city = "pArIS"

city.charAt(0).toUpperCase()
"P"

city.slice(1)
"ArIS"

city.slice(1).toLowerCase()
"aris"

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Paris"
var city = "JavaScript i am doing JavaScript"
undefined
city.replace('JavaScript','JS')
"JS i am doing JavaScript"
city.replace(/JavaScript/,'JS')
"JS i am doing JavaScript"
city.replace(/JavaScript/g,'JS')
"JS i am doing JS"
var city = "  Amsterdam . "
undefined
city.replace(/ /g,'')
"Amsterdam."
var name="John Kevin"
undefined
name.replace(/ /g,'-')
"John-Kevin"


var url="https://github.com/Aakashdeveloper/Nov_Intern"

url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Nov_Intern"]0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"4: "Nov_Intern"length: 5__proto__: Array(0)

var out = url.split('/')
out
(5) ["https:", "", "github.com", "Aakashdeveloper", "Nov_Intern"]
out[0]
"https:"
out[4]
"Nov_Intern"

var data ="i am doing javascript"
undefined
data.split(' ')
(4) ["i", "am", "doing", "javascript"]
var a ="javascript"
undefined
a.split("")
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
undefined
a.toString()
"j,a,v,a,s,c,r,i,p,t"
a.toString().replace(/,/g,'')
"javascript"

var city="inDia deHli"

var out = city.split(' ')
out
(2) ["inDia", "deHli"]0: "inDia"1: "deHli"length: 2__proto__: Array(0)
out[0].charAt(0).toUpperCase()
"I"
out[0].slice(1).toLowerCase()
"ndia"
out[1].charAt(0).toUpperCase()
"D"
out[1].slice(1).toLowerCase()
"ehli"
var first  = out[0].charAt(0).toUpperCase()+out[0].slice(1).toLowerCase()
var second  = out[1].charAt(0).toUpperCase()+out[1].slice(1).toLowerCase()
undefined
`${first} ${second}`
"India Dehli"


var city = "Amsterdam"
city.slide
city.slice(1)
"msterdam"
city.slice(1,4)
"mst"

slice(start,end?)
substr(start,length)

var city = "Amsterdam"
city.substr(1,4)
"mste"
city.substr(1,5)
"mster"