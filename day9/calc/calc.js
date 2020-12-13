function sum(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
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