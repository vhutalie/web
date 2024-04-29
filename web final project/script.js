

// Define the text content variables
var companyName = "SNEAKER COMPANY";
var productName = "Fall Limited Edition Sneakers";
var cartn = "Fall Limited Edition Sneakers";
var productDescription = "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.";
var productPrice = 125.00;
var dashedPrice = "$250.00";
var smallImages = document.querySelectorAll(".small-image");
var productImage = document.querySelector(".product-image");
var addToCartButton = document.querySelector(".add-to-cart");
var minusButton = document.querySelector(".minus");
var plusButton = document.querySelector(".plus");
var quantityInput = document.querySelector(".quantity-input");
var quantityOutput = document.querySelector(".quantity-output");
var totalPrice= document.querySelector(".total-price");


// Update the HTML with the text content
document.getElementById("company-name").textContent = companyName;
document.getElementById("product-name").textContent = productName;
document.getElementById("cartn").textContent = cartn;
document.getElementById("product-description").textContent = productDescription;
document.getElementById("product-price").textContent = "Price: $" + productPrice;
document.getElementById("dashed-price").textContent = dashedPrice;


smallImages.forEach(function (smallImage) {
  smallImage.addEventListener("click", function () {
    var smallImageSrc = smallImage.getAttribute("src");
    productImage.setAttribute("src", smallImageSrc);
  });
});




// Add click event listeners to plus and minus buttons
minusButton.addEventListener("click", function () {
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
});

plusButton.addEventListener("click", function () {
  var currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
});

addToCartButton.addEventListener("click", function () {
var currentQuantity = parseInt(quantityInput.value);
var cartQuantity = parseInt(quantityOutput.value);
  quantityOutput.value = currentQuantity + cartQuantity;
totalPrice.value = " $125*" + quantityOutput.value +" =$"+ quantityOutput.value * 125 ;

});




