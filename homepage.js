if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready())
} else {
  ready()
}

function ready(){
   showPage1(0)
   showPage(0)
   //ADD TO CART FUNCTION
   let addToCartButtons = document.querySelectorAll('.cart_btn')
   console.log(addToCartButtons)
   let menu = [{
    
    id: 1,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    
    id:2,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    
    id:3,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    
    id:4,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    
    id:5,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    
    id:6,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    
    id:7,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    
    id:8,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    
    id:9,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    id:10,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    id:11,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    id:12,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    id:13,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    id:14,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    id:15,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    id:16,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    id:17,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    id:18,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    id:19,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    id:20,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    id:21,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    id:22,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    id:23,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    id:24,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    id:25,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    id:26,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    id:27,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  },
  {
    id:28,
    food: 'Nacho Cheese Fries',
    price:'&#8358;4000',
    image:'Rectangle 24 (3).png',
  },
  {
    id:29,
    food: 'Hotdogs',
    price:'&#8358;5000',
    image:'Rectangle 24 (4).png',
  },
  {
    id:30,
    food: 'Burgers,Fries and Nuggets',
    price:'&#8358;5000',
    image:'Rectangle 24 (5).png',
  }
  ];
  localStorage.setItem('products', JSON.stringify(menu))
  if(!localStorage.getItem('cart')){
    localStorage.setItem('cart','[]')
  }
  let products= JSON.parse(localStorage.getItem('products'))
  let cart = JSON.parse(localStorage.getItem('cart'))
       

    function addItemToCart(productId){
      let product = products.find(function(product){
        return product.id== productId 
      })
      if(cart.length == 0){
        cart.push(product)
      }else{
        let res = cart.find(elememnt => element.id == productId )
        if(res == undefined){
          cart.push(product)
        }
      }
       localStorage.setItem('cart', JSON.stringify(cart))
    }
addItemToCart(3)
   
  
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


/*function addItemToCart(orderName, orderPrice, imageSrc){
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
  console.log(orderRow)

  localStorage.setItem('newOrder', orderRow)
  }*/
