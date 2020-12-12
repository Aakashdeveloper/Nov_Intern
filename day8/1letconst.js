var => we can redeclare and reaasign;
let => we cannot redeclare but can reassign
const => We cannot redeclare nor reaasign

var a = 10

var a =declare
a=10 assignment

> var a= 10
> a
10

> var a= 20
> a
20

> a=30
30
>

> Es6 (Ecma Script 6)

> let b = 10
> b
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11
> 

> const c = 10
undefined
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.
> 