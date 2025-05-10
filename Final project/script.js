console.log("JS loaded successfully");

// Callback function to add an item to the cart
function addToCart(itemName, price) {
  const item = { name: itemName, price: price };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} added to cart!`);
}
document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const productId = card.getAttribute("data-product");

      // Store selected product
      localStorage.setItem("selectedProduct", productId);

      // Navigate to product page
      window.location.href = `product.html?product=${encodeURIComponent(
        productId
      )}`;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Select the first product card
  const productCard = document.querySelector(".product-card");

  // Use DOM tree navigation: get the first child (the image)
  const productImage = productCard.firstElementChild;

  // Add mouseover event
  productImage.addEventListener("mouseover", () => {
    productImage.classList.add("highlight");
  });

  // Add mouseout event
  productImage.addEventListener("mouseout", () => {
    productImage.classList.remove("highlight");
  });
});
