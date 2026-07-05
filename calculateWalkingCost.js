function calculateWalkingCost(numberOfWalks) {
    const pricePerWalk = 20;
    const travelFee = 5;
    const total = numberOfWalks * pricePerWalk;
    return  total + travelFee;
}

 const result = calculateWalkingCost(4);
 console.log(result);