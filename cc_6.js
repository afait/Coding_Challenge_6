// Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice) * unitsSold;
};// function to calculate the profit of a product
console.log("Total Profit: $", calculateProfit(20, 30, 100)) // logging the profit from a product that costs $20, sells for $30 and sold 100 units
console.log("Total Profit: $", calculateProfit(50, 70, 200)) // logging the profit from a product that costs $50, sells for $70 and sold 200 units

// Task 2 - Sales Tax Computation

function calculateSalesTax(amount, taxRate){
    return (amount * taxRate)
}; // crreate function that calculates sales tax based on the amount and taxrate
console.log("Sales Tax: $", Math.floor(calculateSalesTax(100,0.07))); // calculates sales tax for $100 using a tax rate of 0.07
console.log("Sales Tax: $", Math.floor(calculateSalesTax(500,0.1))); // calculates sales tax for $500 using a tax rate of 0.1

// Task 3 - Employee Bonus Calculation

const calculateBonus = (salary, performanceRating) => { // create function that calculates bonuses based on salary and performance rating
    if (performanceRating === "Excellent") {
        return (salary * .20);
    }; // returns a 20% bonus for an excellent performance rating
    if (performanceRating === "Good") {
        return (salary * .10);
    }; // returns a 10% bonus for a good performance rating
    if (performanceRating === "Average") {
        return (salary * .05);
    }; // returns a 5% bonus for an average performance rating
};
console.log("Bonus: $", calculateBonus(5000, "Excellent")); // logging the bonus for an excellent performance rating
console.log("Bonus: $", calculateBonus(7000, "Good")); // loggin the bonus for a good performance rating
