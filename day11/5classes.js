function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = function(){
        return `Say Hi to ${country}`
    }
}

var Hindi = new language('Hindi','India')
language {name: "Hindi", country: "India", greet: ƒ}
Hindi.greet()
"Say Hi to India"


/////es6
class language{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet=()=>{
        return `Say Hi`
    }
}


class Database{
    find=(table)=>{return `Select * from ${table}`}
    insert=(table,data)=> {return `Insert into ${table} name,city values (${data.name},${data.city})`}
}

export default Database

var mydb = new Database();
var query = mydb.insert('student',{'name':'John','city':'Delhi'})
"Insert into student name,city values (John,Delhi)"