if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready())
} else {
    ready()
}

function ready(){
    
   newCartItem()
    updateCartTotal()
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
    function newCartItem(){
        var cartItemContainer = document.getElementsByClassName('order_box')[0]
        const foodName = localStorage.getItem('orderName')
        const foodPrice = localStorage.getItem('orderItem')
        const imgSrc = localStorage.getItem('imageSrc')
        var newItem = document.createElement('div')
        newItem.classList.add('orders')
        var newItemContent = `

        <div  class="photo_box">
            <span  class="food_photo"><img src="${imgSrc}" ></span>
        </div> 
        <div class="info_box">
            <h1> <span class="food_name">${foodName}</span> <span class="food_price">${foodPrice}</span></h1>
            <h2 class="food_info">The in-house meal by Chef Moose</h2>
    </div>
        <div class="unit_control">
            <input type="number" min="1" max="100" step="1" value="1" class="unit">
        </div>
        <button class="delete"><img src="./Images/DELETE.png"> Delete</button>`
        
        newItem.innerHTML= newItemContent
        cartItemContainer.append(newItem)
     
    }

    
   
  
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


