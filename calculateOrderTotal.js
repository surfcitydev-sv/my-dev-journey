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

const result = calculateOrderTotal(10, 3, 0.08);
console.log(result);

const resultSecondOrderTotal = calculateOrderTotal(2, 4, 0.08);
console.log(resultSecondOrderTotal);

const resultThirdOrderTotal = calculateOrderTotal(15, 2, 0.08);
console.log(resultThirdOrderTotal);