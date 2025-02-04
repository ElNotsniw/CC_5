// Task 1 - Object Properties

// Declaring the variable, "customer" and giving it three properties: Name, age, and email


const customer = {       
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};


// Console-logging each property of the variable "customer" using a template literal


console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);



// Task 2 - Object Methods

// Declaring the variable, "order" to have three properties: OrderID, totalamount, and status


const order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",


    // Using the displayorder method and console-logging the order details from the variable

    displayOrder: function() {
        console.log (`OrderID: ${this.orderID}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};


// Calling back the variable

order.displayOrder();




// Task 3 - Array Manipulation (push, pop, unshift, shift)

// Declaring the variable, "cartItems" using let and giving it three products

let cartItems = ["Tomatoes, Broccoli, Spinach"];

// Adding a new product to the end using .push()

cartItems.push("Lettuce");

// Removing the last item using .pop()

cartItems.pop();

// Adding an item to the beginning using .unshift()

cartItems.unshift("Kale");

// Removing the first item in the array using .shift()

cartItems.shift();

// Console-logging the end results

console.log(cartItems);




// Task 4 - Map Method

// Declaring the variable "prices" using const and giving it three vaLues: 100, 200, 300

const prices = [100, 200, 300];

// Using .map() to apply the 10% discount

const discountedPrices = prices.map(price => price * 0.90);

// Console-logging the end results

console.log(discountedPrices);




// Task 5 - Filter Method

// Declaring the variable, "inventory", using const and assigning it five values 

const inventory = [3, 7 ,0, 9, 0];


// using the .filter() to remove any products with zero stock

const filteredInventory = inventory.filter(quantity => quantity > 0);


// Console-logging the end results

console.log(filteredInventory);




// Task 6 - Reduce Method

// Declaring the variable, "sales", and assigning with an array of numbers


const sales = [500, 300, 200, 400];


// Using the reduce method to add up all the values to calculate the total revenue


const totalRevenue = sales.reduce((acc, currentValue) => acc + currentValue, 0);


// Console-logging the total


console.log("Total Revenue:", totalRevenue);




// Task 7 - find() Method

// Declaring the variable, "customers", using const and assigning it an array

const customers = ["Alice", "Bob", "Charlie", "David"];

// Using the .find() method to locate a specific person

const customerLocator = customers.find(customer => customer === "Charlie");

// Console-logging the end result

console.log("Customer:", customerLocator);




// Task 8 - Function Declaration

// Setting up the function to calculate tax

function calculateTax(amount, taxrate) {
    const tax = amount *(taxrate / 100)
    return tax
};

// Setting up the values to calculate tax

const amount = 500
const taxrate = 10
const tax = calculateTax(amount, taxrate);

// Console-logging the end result using a template literal

console.log(`The tax for $${amount} at ${taxrate}% is $${tax}`);
