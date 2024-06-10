// ==================== Cart ====================
let addCart = document.querySelectorAll("#add-cart");

let arrayOfOrders = [];

if (localStorage.getItem("selectedProducts")) {
  arrayOfOrders = JSON.parse(localStorage.getItem("selectedProducts"));
}

addCart.forEach((addIcon) => {
  addIcon.addEventListener("click", (e) => {
    alert ("The item has been added to the cart ")

    let product = e.target.parentElement;
    let productImg = product.querySelector("img").src;
    let productTitle = product.querySelector(".details h3").innerHTML;
    let productPrice = product.querySelector(".details .price").innerHTML;
    addOrderToArray(productImg, productTitle, productPrice);

localStorage.setItem('selectedProducts', JSON.stringify(arrayOfOrders));
  });
});

function addOrderToArray(img, title, price) {
  let productDetails = {
    pId: Date.now(),
    imgSrc: img,
    pName: title,
    pPrice: price,
  };
  arrayOfOrders.push(productDetails);
}
// ==================== Cart ====================
