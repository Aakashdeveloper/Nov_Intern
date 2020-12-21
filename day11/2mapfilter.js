var a = [4,5,3,8,9,34,56,78];
a.map((data) => { console.log(data)})

a.map((data) => { return data*2})
[8, 10, 6, 16, 18, 68, 112, 156]

a.map((data) => { return `<p>${data}</p>`})
["<p>4</p>", "<p>5</p>", "<p>3</p>", "<p>8</p>", "<p>9</p>", "<p>34</p>", "<p>56</p>", "<p>78</p>"]


> map is use to iterarte over the array
> it alaways return the same length of output array as input array
> it is mainly use to apply logic like(sum,mul) bind with html

//var add = (data) => {return data*2}

var b = [20,35,34,26,67,21,19,32]
b.filter((abc)=>{return abc>25})
[35, 34, 26, 67, 32]

b.map((abc)=>{return abc>25})
(8) [false, true, true, true, true, false, false, true]

> filter is use filter out the value on the basis of condition
> it may or may not return the same length of output
> it only return those value for with output/condition is true

var a = [0,1,2,3]
a.filter((data) => {return data*2})
[1,2,3]

a.filter((data) => {return data-2})
[0, 1, 3]

