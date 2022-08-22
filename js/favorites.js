let productsDom = document.querySelector("#cart_details");
let noProductsDom = document.querySelector("#noproductsfound");

function drawFavoritesProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavorite")).length === 0)
    noProductsDom.innerHTML = "There is no items !!";

  let products =
    JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;
  let productsUI = products.map((item) => {
    return `
        <div class="product-item">
          <img
            src="${item.imageUrl}"
            class="product-item-img"
            alt="image"
          />  
          <div class="product-item-desc">
            <h2>${item.title}</h2>
          </div>
          <button class="add-to-cart" style="     display: inline-block;  margin-bottom: 54px;" onclick="removeItemFromCart(${item.id})">Remove From Favorite</button>
          
        </div>
      `;
  });

  productsDom.innerHTML = ` <tr> <th>Product</th> <th></th> <th></th></tr>` + productsUI.join("");
}

drawFavoritesProductsUI();

function removeItemFromCart(id) {
  let productsFavorite = localStorage.getItem("productsFavorite");
  if (productsFavorite) {
    let items = JSON.parse(productsFavorite);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsFavorite", JSON.stringify(filteredItems));
    drawFavoritesProductsUI(filteredItems);
  }
}
