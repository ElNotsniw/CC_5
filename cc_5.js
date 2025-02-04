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

