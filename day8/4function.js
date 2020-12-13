/////////
function
method
arrow function
generator
IffI

/////////
var a = 10
var b = 20
a+b

function add(a,b){
    return a+b
}

add(1,2)
3
add(4,5)
9
add('a','b')
"ab"

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`;
    }else{
        out = `Number ${userInput} is odd`;
    }
    return out;
}

isEven(10)
"Number 10 is even"
isEven(9)
"Number 9 is odd";

///////////////
method
/////
function add(a,b){
    return a+b
}

let add = function(a,b){
    return a+b
}

add(1,2)
3

////////
arrow> Es6 
//////

let add = (a,b) => {return a+b}

add(1,2)