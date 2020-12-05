var name="Avengers"
var rating=4.5
var type="Action"
var ind="Hollywood"

//es5(old)
var out = "The "+name+" is an "+type+" movie, with rating of "+rating+" and from ind "+ind+"."
"The Avengers is an Action movie, with rating of 4.5 and from ind Hollywood."

//es6(new)
var out =`The ${name} is an ${type} movie, with rating of ${rating} and from ind ${ind}.`
"The Avengers is an Action movie, with rating of 4.5 and from ind Hollywood."