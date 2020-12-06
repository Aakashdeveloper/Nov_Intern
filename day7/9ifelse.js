if(condition){
    //do something
}else{
     //do something
}

var a = 87887;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM51:5 Number 87887 is odd

undefined
var a = 8788;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM55

var name = "Bhumika"
if(name=="John"){
    console.log("You are admin")
}else if(name=="Bhumika"){
    console.log("You are super admin")
}else if(name=="Aakash"){
    console.log("You are user")
}else{
    console.log("I Dont know you")
}

var role = "Admin"
var name = "John"

if(role=="Admin"){
    if(name=="John"){
        console.log("You are system Admin")
    }else if(name=="Sarah"){
        console.log("You are product Admin")
    }else{
        console.log("You are Admin")
    }
}else if(role=="User"){
    if(name=="Bhumika"){
        console.log("You are super user")
    }else if(name=="Jamie"){
        console.log("You are product user")
    }else{
        console.log("You are user")
    }
}else{
    console.log("I Dont know you")
}

var a = -1
if(a){
    console.log('Hii')
}else{
    console.log('Bie')
}
'Hii'


truthy => any number +ve or -ve except 0 ,,true,anystring are truthy value
falsy=0,false,null,undefined are falsy value


/////ternary opt(Single line if else condition)//////////
var a = 10
a>10?"Hiiii":"Bie"
"Bie"
var a = 10
a==10?"Hiiii":"Bie"
"Hiiii"

var a = 10
a>10?a+1:a-1
9