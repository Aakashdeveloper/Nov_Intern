DataTypes
> String = "Hi" "hello" "Delhi" 'Amsterdam' 'Helsinki' '3534' "true" 'ef44'
> Number = 534 4346 4645365646 5656.656 .656 
> Boolean = true/false
>null
>undefined

es5 > Ecma Script 5
es6 > Ecma Script 6

//es5///
var a = 10;
var b = 20;
undefined
a
10
b
20
a+b (addition)
30
a-b
-10
a*b
200
a/b
0.5
a%b (modules=> reminder)
10
4%2
0
4%3
1
5%3
2
6%3
0

var name="Paris";
var country="France"
name+country (concat)
"ParisFrance"
country+name
"FranceParis"
name-country
NaN (not a number)
name*country
NaN
name/country
NaN

var a = true
var b = 10
var c = "Venice"

typeof(a)
"boolean"
typeof(b)
"number"
typeof(c)
"string"
var d = "343464"
typeof(d)
"string"

////////
var a = 10
var b = "Hi"
undefined
a+b
"10Hi"
b+a
"Hi10"
a-b
NaN

String+String = String
String+Number = String
Number+String = String
Number+Number = Number

///////////////////
"10"+20+"30"
"1020"+"30"
"102030"

10+20+"30"
30+"30"
"3030"

"10"+20+30
"1020"+30
"102030"

"10"+20+"30" - 1
"102030"-1
102029

10+20+"30"-1
3029
"10"+20+30-1
102029

//////////////////
"aa"-1
NaN
"453543"-1
453542
"10"-"1"
9
"1024235"*"2"
2048470
"1024235"/"2"
512117.5
"1024235a"/"2"
NaN
"1024235"+"2"
"10242352"


if both the side it is pure number even in quotes
than output for -,*,/,% will be same as math
only + will concat

10-1
10+1


//////////////
true == 1
false == 0

true+true
2
true-false
1
10-false
10
10-true
9
10+true
11

"Hi "+true

"Hi "+true
"Hi true"
"Hi "-true
NaN

"true"+"true"
"truetrue"

'false'+'true'
"falsetrue"

'false'-'true'
NaN