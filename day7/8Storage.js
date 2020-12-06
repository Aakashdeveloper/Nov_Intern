localStorage > 
> presistent Storage
> save wrt to browser

localStorage.setItem('token','4645g45y5')
undefined
localStorage.getItem('token')
localStorage.removeItem('token')


sessionStorage
> non presistent Storage
> save wrt to tab
> delete as soon as you close tab

sessionStorage.setItem('usersessionkey','3534f54tg54y')
undefined
sessionStorage.getItem('usersessionkey')
"3534f54tg54y"
sessionStorage.removeItem('usersessionkey')

cookies
> save wrt to website
> remain there with url
> have expiry time

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.953314084.1607098068; origin=delhi; _gat_gtag_UA_131256843_1=1"
document.cookie="city=sonipat"
"city=sonipat"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.953314084.1607098068; origin=delhi; city=sonipat"

document.cookie="city=sonipat;expires=Mon, 07 Dec 2020 01:00:00 UTC"
