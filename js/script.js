// const { productsDB } = require('./data.js')


// Define Product
let productsDom = document.querySelector(".products-page");
// let products =  productsDB;
// Display Producs
let drawProductsUI;
(drawProductsUI = function (products = []) {
  console.log('productos > > > > ', products)
  let productsUI = products.map((item) => {

  return `
    <div class="col-4">
    <img src="${item.imageUrl}" alt="" />
    <h4> ${item.title} </h4>
    <p> ${ '$'+item.price} </p>
    <button class="add-to-cart" style="margin-top: 20px; margin-right: auto;" onclick="addedToCart(${
      item.id
    })" >Add To Cart</button>
    
    <button class="add-to-cart" style="margin-top: 20px; margin-right: auto;" onclick="addToFavorite(${
      item.id
    })" >Add to fav</button>
    
  </div>`;
  });
  productsDom.innerHTML = productsUI.join("");


  console.log('productsUI > > > > ', productsUI)
})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Add To cart
function addedToCart(id) {

  console.log('added to card fun called ')


  // if (localStorage.getItem("username")) {

  //   console.log('Added to cart funcation called > > > > >> ', JSON.parse(localStorage.getItem("products")))

  //   let products = JSON.parse(localStorage.getItem("products")) || productsDB
  //   let product = products.find((item) => item.id === id);
  //   let addedItem = [];
  //   console.log('product > > > ', product)
   
  //   addedItem.push(product);

  //   // let isProductInCart = addedItem.some((i) => i.id === product.id);

  //   // if (isProductInCart) {
  //   //   addedItem = addedItem.map((p) => {
  //   //     if (p.id === product.id) p.qty += 1;
  //   //     return p;
  //   //   });
  //   // } else {
  //   //   addedItem.push(product);
  //   // }
  //   // // UI
  //   // cartProductDivDom.innerHTML = "";
  //   // addedItem.forEach((item) => {
  //   //   cartProductDivDom.innerHTML += `<p>${item.title} <span class='item-qty'>${item.qty}</span></p>`;
  //   // });

  //   // Save Data
  //   localStorage.setItem("productsInCart", JSON.stringify(addedItem));

  //   // // Add counter of Items
  //   // let cartProductItems = document.querySelectorAll(".carts-products div p");
  //   // badgeDom.style.display = "block";
  //   // badgeDom.innerHTML = cartProductItems.length;
  // } 
  if (localStorage.getItem("username")) {

    console.log('saddddddddddd', JSON.parse(localStorage.getItem("products")))

    let products = JSON.parse(localStorage.getItem("products")) || productsDB
    let product = products.find((item) => item.id === id);
    var isProductInCart = addedItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }

    // Save Data
    localStorage.setItem("productsInCart", JSON.stringify(addedItem));


  } 
  else {
    window.location = "account.html";
  }
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

  return unique;
}

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html";
}

// Add To Favorite
let favoritesItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
function addToFavorite(id) {
  if (localStorage.getItem("username")) {
    let choosenItem = productsDB.find((item) => item.id === id);
    choosenItem.liked = true;
    favoritesItems = [...favoritesItems, choosenItem];
    let uniqueProducts = getUniqueArr(favoritesItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    productsDB.map((item) => {
      if (item.id === choosenItem.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(productsDB));
    drawProductsUI(productsDB);
  } else {
    window.location = "account.html";
  }
}



// Edit Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}
