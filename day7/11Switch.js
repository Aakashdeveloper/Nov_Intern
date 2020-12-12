//multiple condition and multiple output (IFELSE)
//one condition and multiple output use(switch)
//one condition and one output(ternory)

switch(new Date().getDay()){
    case 0:
        console.log("Its Sunday");
        break;
    case 1:
        console.log("Its Monday");
        break;
    default:
        console.log("Wrong Input");
}


var name = "Eva"

switch(name){
    case 'Aakash':
        console.log("Its user");
        break;
    case 'Eva':
        console.log("Its Admin");
        break;
    default:
        console.log("Dont know");
}