var fs = require('fs');

//Write File> overwrite the data
/*
fs.writeFile('mytext.txt','this is my function ',function(){
    console.log('File Created')
})
*/

/*
//Append File > Keep Adding data in same file
fs.appendFile('myfile.csv','This is nodeJs',function(){
    console.log("Data Added")
})
*/

//readFile
/*
fs.readFile('db.json','utf-8',function(error,data){
    if(error) throw error;
    console.log(data)
})
*/

//rename

fs.rename('mytext.txt','mytext1.txt',function(err){
    if(err) throw err;
    console.log("File Renamed")
})


//delete
fs.unlink('mytext1.txt',function(){
    console.log("file deleted")
})