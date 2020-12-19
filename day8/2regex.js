RegExp
Regular Expression

^$

var a = "hii"
^([a-z])$

var a = "hii"
//match exact 3 letter word
a.match("^([a-z]{3})$")

//range of letter from 2 to 5 letter word

a.match("^([a-z]{2,5})$")

//any length
a.match("^([a-z]+)$")


var a = "Ahii"
a.match("^([A-Za-z]+)$")

var a = "Ahii0"
a.match("^([A-Za-z0-9]+)$")

var phone = 8787872433
phone.toString()
"8787872433"
phone.toString().match("^([0-9]{10})$")
(2) ["8787872433", "8787872433", index: 0, input: "8787872433", groups: undefined]


var email = "a@a.com";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")

// . any thing 
var a = "hot and hat cat bat hoot h1t"
var patt = /h.t/g
a.match(/h.t/g)

var a = "i got 50%"
a.match(/\w/g)
"i got 50"

var a = "hot and hat cat bat hoot h1t h$t"
a.match(/h\w+t/g)
hot hat hoot h1t

a.match(/h\W+t/g)
h$t
