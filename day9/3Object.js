var name= "Avengers";
var rating = 4.3;
var ind = "Hollywood";

var name1 = "Jab We Met";
var rating1 = 4.5
var ind1 = "Bollywood";

//literal Notation
var movies = {
    name:'Death Race',
    rating:3,
    lang:'Eng',
    name1:'Avenger'
}


typeof(movies)
"object"
movies.name
"Death Race"
movies.rating
3
movies.lang
"Eng"
movies['name']
"Death Race"
movies['rating']
3
movies['lang']
"Eng"
movies.ind="Hollywood"
"Hollywood"
movies
{name: "Death Race", rating: 3, lang: "Eng", ind: "Hollywood"}
movies.rating=3.2
3.2
movies
{name: "Death Race", rating: 3.2, lang: "Eng", ind: "Hollywood"}
delete movies.lang
true
movies
{name: "Death Race", rating: 3.2, ind: "Hollywood"}

var calc={
    sum:function(a,b){return a+b},
    sub:(a,b) =>{ return a-b}
}
undefined
calc.sum(1,2)
3
calc.sub(1,2)
-1

var dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data)=> {return `Insert into ${table} name,city values (${data.name},${data.city})`}
}
undefined
dbQuery.find('Emp')
"Select * from Emp"
dbQuery.find('Student')
"Select * from Student"
dbQuery.insert('Student',{name:'John',city:'Delhi'})
"Insert into Student name,city values (John,Delhi)"


var movies = {
    name:'Death Race',
    rating:3,
    lang:'Eng',
    name1:'Avenger'
}
undefined
for(keys in movies){ 
    console.log(keys)
}
name
rating
lang
name1

for(keys in movies){ 
    console.log(movies[keys])
}
