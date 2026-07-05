function calculateTotal(price, quantity, tax) {
  const subtotal = price * quantity;
  const taxAmount = subtotal * tax;
  return subtotal + taxAmount;
}

const result = calculateTotal(4.5, 3, 0.08);
console.log(result);