//enclose something
//local scope
//global scope

/*var a =10;

function add(){
    var b =20;
    return a+b
}
*/


var a =10;
for(i=0;i<5;i++){
    let b = 10;
    const c = 10
    console.log(a+i+b)
}

console.log(">>>>>A>>>",a)
console.log(">>>>>B>>>",b)



///variable that can be access outside the curly bracket and inside is in global scope
///variable that can be access only in the curly bracket local scope