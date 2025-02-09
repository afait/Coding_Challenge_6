// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice) * unitsSold;
};
console.log("Total Profit: $", calculateProfit(20, 30, 100))
console.log("Total Profit: $", calculateProfit(50, 70, 200))
