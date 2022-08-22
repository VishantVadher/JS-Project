let productsDom = document.querySelector("#cart_details");
let noProductsDom = document.querySelector("#noproductsfound");

function drawCartProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsInCart")).length === 0)
    noProductsDom.innerHTML = "<h2 style='text-align-last: center;'> There are no items left please visit products page </h2>";

  let products =
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
  let productsUI = products.map((item) => {
    return `
    <tr>
    <td>
      <div class="cart-info">
        <img src="${item.imageUrl}" alt="">
        <div>
          <strong> ${item.title} </strong>
          <p>${item.desc}</p>
          <small> Price: ${ '$'+item.price} </small> <br/>
          <small> Quantity: ${ item.qty} </small>

          <br>
        </div>
      </div>
    </td>
    <td></td>
      <td> <button class="add-to-cart" onclick="removeItemFromCart(${item.id})"> Remove </button> </td>
    </tr>
    `;
  });
  
  productsDom.innerHTML = ` <tr> <th>Product</th> <th></th> <th>Subtotal</th></tr>` + productsUI.join("");

}

drawCartProductsUI();

function removeItemFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    drawCartProductsUI(filteredItems);
  }
}
