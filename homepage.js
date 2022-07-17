if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready())
} else {
  ready()
}

function ready(){
    var addToCartButtons = document.getElementsByClassName('cart_btn')
    for(var i = 0; i < addToCartButtons.length; i++){
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCart)
    }

    function addToCart(event){
      var button = event.target
      var orderItem = button.parentElement
      var orderName = orderItem.getElementsByClassName('food_name')[0].innerHTML
      var orderPrice = orderItem.getElementsByClassName('food_price')[0].innerText
      var imageSrc = orderItem.getElementsByClassName('food_c')[0].src
      console.log(orderPrice)
      addItemToCart(orderName, orderPrice, imageSrc)
    }

   showPage1(0)
   
   showPage(0)
  
}

function showPage(panelIndex, color){
  var buttons= document.querySelectorAll("input.btn");
 var pages = document.querySelectorAll("div.page");

  buttons.forEach(function(node){
   node.style.fontWeight='';
  });
  buttons[panelIndex].style.backgroundColor= color;
  pages.forEach(function(node){
    node.style.display="none"
  });
  pages[panelIndex].style.display="flex";

}

function showPage1(panelIndex, color){
  var tags= document.querySelectorAll("input#mgn");
 var menus = document.querySelectorAll("div.menu");

  tags.forEach(function(node){
   node.style.fontWeight='';
  });
  tags[panelIndex].style.fontWeight= '600';
  menus.forEach(function(node){
    node.style.display="none"
  });
  menus[panelIndex].style.display="block";
  

}


function addItemToCart(orderName, orderPrice, imageSrc){
  var orderRow =document.createElement('div')
 orderRow.classList.add('orders')
  var orderItems = localStorage.getItem('orderBox')
  var orderRowContent = `
  <div class="orders">
  <div  class="photo_box">
      <span  class="food_photo"><img src="${imageSrc}" ></span>
  </div> 
  <div class="info_box">
      <h1> <span class="food_name">${orderName}</span> <span class="food_price">${orderPrice}</span></h1>
      <h2 class="food_info">The in-house meal by Chef Moose</h2>
 </div>
  <div class="unit_control">
      <input type="number" min="1" max="100" step="1" value="1" class="unit">
  </div>
  <button class="delete"><img src="./Images/DELETE.png"> Delete</button>
</div> `
orderRow.innerHTML = orderRowContent
orderItems.append(orderRow)
localStorage.setItem('newOrder', orderRow)
}
