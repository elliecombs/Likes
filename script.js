var basket = 3
var element = document.querySelector("#count1")

function liked() {
    basket++
    element.innerText = basket + " Likes"
    console.log(basket)
}