var url = "https://api.exchangeratesapi.io/latest?base="

//es5
/*function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json()) //we will get response as promise
     // here we will get data
    .then((data) => {
       var final = data.rates[out]
       final = final * Number(amount)
       var finaltext = `Converted Value of ${amount} ${base} is ${final} ${out}`;
       document.getElementById('output').innerText = finaltext;
    })
}
*/

async function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    console.log(`${url}${base}`)
    let response =  await fetch(`${url}${base}`,{method:'GET'})
    let data =  await response.json() //we will get response as promise
    var final = data.rates[out]
    final = final * Number(amount)
    var finaltext = `Converted Value of ${amount} ${base} is ${final} ${out}`;
    document.getElementById('output').innerText = finaltext;
}