function calculateMembershipCost(months){
    if (months >=12) {
        return (30 * months);
    } else {
        return (40 * months);
    };
}

const result = calculateMembershipCost(15);
console.log(result);

const resultNonDiscountedPrice = calculateMembershipCost(11);
console.log(resultNonDiscountedPrice);