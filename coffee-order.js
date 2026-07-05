const shopName = "Daily Grind Coffee";
const lattePrice = 4.50;
const taxRate = 0.08;
let orderQuantity = 1;

const subtotal = lattePrice * orderQuantity;
const taxAmount = subtotal * taxRate;
const finalTotal = subtotal + taxAmount;


console.log(finalTotal);
console.log(`Your total is $${finalTotal}`);



for (let i = 1; i <= 5; i++) {
    const cost = lattePrice * i;
    console.log(`${i} latte(s): $${cost}`);
}