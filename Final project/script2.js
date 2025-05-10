const params = new URLSearchParams(window.location.search);
const productId = params.get("product");

if (productId) {
  document.querySelector(".text-wrapper-6").textContent = productId;
  // or load product data based on productId
}
