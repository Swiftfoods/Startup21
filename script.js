const plus = document.querySelector(".plus"),
 minus = document.querySelector(".minus")
 num = document.querySelector(".quantity-input");

 let a = 1;

plus.addEventListener("click", ()=>{
     a++;
     num.innerText = a;

});

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        num.innerText = a;
        
    }
});


var removeCartItemButtons = document.getElementsByClassName("delete")
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-col")[0]
    var cartRows = cartItemContainer.getElementsByClassName("card")
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = document.getElementsByClassName("price")[0]
        var quantityElement = cartRow.getElementsByClassName("quantity-input")[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.innerText
        total = total + (price * quantity)
    }
    document.getElementsByClassName("total-amt")[0].innerText = "$" + total
}