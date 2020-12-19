document.getElementsByTagName('h1')[0]
<h1 style=​"color:​ red;​ visibility:​ visible;​">​I m from Edureka​</h1>​
document.getElementsByTagName('h1')[0].innerText="I m from Edureka"
"I m from Edureka"
document.getElementsByTagName('h1')[0].style.visibility="Visible"
"Visible"
document.getElementsByTagName('h1')[0].style.visibility="Hidden"
"Hidden"
document.getElementsByTagName('h1')[0].style.color="Red"
"Red"

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scroll4: a.scrolllength: 5__proto__: HTMLCollection
document.getElementsByClassName('scroll')[0]="Tech"
"Tech"
document.getElementsByTagName('ul')
HTMLCollection [ul.nav.navbar]0: ul.nav.navbarlength: 1__proto__: HTMLCollection


var list = document.getElementsByTagName('ul')[0]

var newitem = document.createElement('li')

var data = "myoption"

newitem.append(data)  ====> <li>​myoption​</li>​

list.appendChild(newitem)

<ul>
<li>​myoption​</li>​
</ul>
