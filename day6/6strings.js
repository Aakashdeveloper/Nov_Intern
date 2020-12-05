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