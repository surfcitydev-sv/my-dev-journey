function calculateShipping(weight, ratePerPound, handlingFee){
    const total = weight * ratePerPound;
    const subtotal = total + handlingFee;
    return subtotal;
}

const shippingResult = calculateShipping(10,0.75,2);
console.log(`Your shipping is $${shippingResult}`);