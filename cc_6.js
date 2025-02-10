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

// Task 7 - Business Expense Tracker
function createExpenseTracker() { // create a function under the name CreateExpenseTracker
    let expenses = 0 // start with expenses of 0
    return function(expense){
        expenses += expense;
        return expenses
    }
} // function takes the current expenses and adds it to the previous to create a total
let tracker = createExpenseTracker();
console.log("Total Expenses: $", tracker(200)); // logs expenses of 200
console.log("Total Expenses: $", tracker(150)); // logs the total expenses so 200 + the new 150

// Task 8 - Employee Promotion Evaluation

function calculateYearsToPromotion(employeeLevel) { // declares a function to calculate the number of years before an employee reaches level ten based on their employeelevel
    if (employeeLevel >= 10) {
        return "Years to Level 10: 0"
    } // if they are already at level 10 it will return 0
    else {
        return (10 - employeeLevel) * 2
    }; // if they are not at level ten, function will subtrack their level by 10 then multiply by 2 since each promotion takes two years
};
console.log("Years to Level 10:", calculateYearsToPromotion(7)); // logs the years to level ten of an employee already at level 7
console.log("Years to Level 10:", calculateYearsToPromotion(5));// logs the years to level ten of an employee already at level 5