const subtotal = 15;

if (subtotal >= 20) {
  const discountedSubtotal = subtotal - (subtotal * 0.10);
  console.log(discountedSubtotal);
} else {
  console.log(subtotal);
}