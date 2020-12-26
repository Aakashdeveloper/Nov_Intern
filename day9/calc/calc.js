function sum(){
    var a = document.getElementById('first').value;
    console.log("i m in function")
    console.log(a)
    sessionStorage.setItem('first',a)
    var b = document.getElementById('second').value;
    sessionStorage.setItem('second',b)
    var out =`Sum of number is ${ Number(a)+Number(b)}`;
    document.getElementById('output').innerText = out
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out =`Sub of number is ${ Number(a)-Number(b)}`;
    document.getElementById('output').innerText = out
}

const calc = (opt) => {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(opt == "Add"){
        out =`Sum of number is ${ Number(a)+Number(b)}`;
    }else{
        out =`Sub of number is ${ Number(a)-Number(b)}`; 
    }
    document.getElementById('output').innerText = out
}

var a = "Aaaa"
undefined
isNaN(a)
true
var a = 943907
undefined
isNaN(a)
false
var a = "33434"
undefined
parseInt(a)
33434
var a = "ewewger"
undefined
parseInt(a)
NaN