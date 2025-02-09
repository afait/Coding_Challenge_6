// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice) * unitsSold;
};// function to calculate the profit of a product
console.log("Total Profit: $", calculateProfit(20, 30, 100)) // logging the profit from a product that costs $20, sells for $30 and sold 100 units
console.log("Total Profit: $", calculateProfit(50, 70, 200)) // logging the profit from a product that costs $50, sells for $70 and sold 200 units
