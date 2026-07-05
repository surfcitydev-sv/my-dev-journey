function calculatePrintCost(pages) {
    if (pages >=100) {
        return (0.06 * pages);
    } else {
        return (0.10 * pages);
    }
}

const result = calculatePrintCost(100);
console.log(result);

const resultNonDiscountedPrice = calculatePrintCost(99);
console.log(resultNonDiscountedPrice);