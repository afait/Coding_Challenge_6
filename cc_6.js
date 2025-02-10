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

// Task 4 - Subscription Pricing Model

function calculateSubscriptionCost(plan, months, discount = 0) {
    let Basic = 10;
    let Premium = 20;
    let Enterprise = 50;
// Create function that calculates the subscripton cost based on the plan, the number of months and subtracts a discount
    if (plan === "Basic") {
        return (months * Basic) - discount;
    }; // calculation for basic plan
    if (plan === "Premium") {
        return (months * Premium) - discount;
    }; // calculation for premium plan
    if (plan === "Enterprise") {
        return (months * Enterprise) - discount;
    } // calculation for enterprise plan
}
console.log("Total Cost: $", calculateSubscriptionCost("Basic", 6, 10)); // log the subscripton cost of a basic six month plan with a $10 discount
console.log("Total Cost: $", calculateSubscriptionCost("Premium", 12, 0));// log the subscripton cost of a premium twelve month plan with no discount

// Task 5 - Currency Conversion

function convertCurrency(amount, exchangeRate) {
    return (amount * exchangeRate)
};
// creates a function that converts currency based on the amount and the exchange rate
console.log("Converted Amount: $", (convertCurrency(100, 1.1).toFixed(2))); // converts 100 dollars at a rate of 1.1 rounding to two decimal places
console.log("Converted Amount: $", (convertCurrency(250, 0.85).toFixed(2)));// converts 250 dollars at a rate of 0.85 rounding to two decimal places

// Task 6 - Higher-Order Function for Bulk Orders
let orders = [200, 1000, 600, 0, 100]; // Created five order amounts
function applyBulkDiscount(orders, discountFunction) {
    let discountedOrders = orders.map(discountFunction);
    return discountedOrders;
}; // created a function that applys a discount amount to the orders and returns the discounted amount
let BulkDiscountOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // Takes 10% off orders of $500 or more
console.log("Discounted Orders", BulkDiscountOrders); // Logs the discounted order prices
