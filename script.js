function calculateOrderTotal(itemPrice, quantity, taxRate) {
  const subtotal = itemPrice * quantity;
  let discountedSubtotal;

  if (subtotal >= 20) {
    discountedSubtotal = subtotal - (subtotal * 0.10);
  } else {
    discountedSubtotal = subtotal;
  }

  const taxAmount = discountedSubtotal * taxRate;
  return discountedSubtotal + taxAmount;
}

const button = document.getElementById("calculateBtn");

button.addEventListener("click", function() {
  const itemPrice = Number(document.getElementById("itemPrice").value);
  const quantity = Number(document.getElementById("quantity").value);
  const taxRate = Number(document.getElementById("taxRate").value);

  const total = calculateOrderTotal(itemPrice, quantity, taxRate);

  document.getElementById("result").textContent = `Total: $${total.toFixed(2)}`;
  
});