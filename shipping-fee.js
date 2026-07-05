function calculateShippingFee(orderSubtotal){

if (orderSubtotal >= 50) {
    return(0);
} else {
    return(orderSubtotal + 5.99);
}
}
const totalPrice = calculateShippingFee(60);
console.log(totalPrice);