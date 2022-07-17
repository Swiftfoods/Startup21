if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready())
} else {
    ready()
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('delete')
    for(var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
     var quantityInputs = document.getElementsByClassName('unit')
     for( var i = 0; i < quantityInputs.length; i++){
     var input = quantityInputs[i]
     input.addEventListener('change', quantityChange)
     }

    function removeCartItem (event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
    }
    function quantityChange(event){
        var input= event.target
        if(isNaN(input.value)|| input.value<= 0){
            input.value = 1
        }
        updateCartTotal()
    }
localStorage.getItem('newOrder')


  localStorage.setItem('orderBox', document.getElementsByClassName('order_box')[0])
    function updateCartTotal(){
        var cartItemContainer = document.getElementsByClassName('order_box')[0]
        var cartRows = cartItemContainer.getElementsByClassName('orders')
        var total = 0
      for ( var i = 0; i < cartRows.length; i++ ){
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('food_price')[0]
           
            var quantityElement = cartRow.getElementsByClassName('unit')[0]
            var price = parseFloat(priceElement.innerText.replace('\u20A6', ''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
            
      }
     document.getElementById('subtotal').innerText ='\u20A6' + total
    }
    
    function unitControlUp(){
        var value = document.getElementsByClassName('unit').innerHTML;
        value++;
        document.getElementsByClassName('unit').innerHTML = value;
    
    }
    
    function unitControlDown(){
      var value = document.getElementsByClassName('unit').innerHTML;
      if(value > 1){
        value--;
      }
      document.getElementsByClassName('unit').innerHTML = value;
     
     }
    
}


