var firstname = "Michal";
var lastname = "lisa";

/*var sayHi = {
    firstname:'Zoe',
    lastname:'Jorden',
    greet:function(){
        return `Say Hi to ${firstname} ${lastname}`
    }
}
*/

var sayHi = {
    firstname:'Zoe',
    lastname:'Jorden',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())