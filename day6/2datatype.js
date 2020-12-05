var a = "10"
var b = "20"

parseInt(a)

var a = "10"
var b = "20"

parseInt(a)
10
a+b
"1020"
parseInt(a)+parseInt(b)
30
var c = "10a"
undefined
parseInt(c)
10
var c = "a10a"
undefined
parseInt(c)
NaN

var a = "123456aaaa789"
undefined
parseInt(a)
123456
var a = "a123456aaaa789"
undefined
parseInt(a)
NaN

var a = "10.22"
undefined
var b = "20.44"
undefined
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.660000000000004

Number(a)+Number(b)
30.660000000000004
