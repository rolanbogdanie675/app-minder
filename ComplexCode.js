/*
   Filename: ComplexCode.js
   Description: An elaborate and complex JavaScript code showcasing multiple functionalities.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // A complex function that calculates the factorial of a number
  calculateFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }

  // A recursive function that generates the nth Fibonacci number
  fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}

// Create an instance of Person
const person = new Person("John", 30);

// Call the greet method
person.greet();

// Call the calculateFactorial function
const factorial = person.calculateFactorial(5);
console.log(`Factorial of 5: ${factorial}`);

// Call the fibonacci function
const fibonacciNumber = person.fibonacci(10);
console.log(`10th Fibonacci number: ${fibonacciNumber}`);

// Complex code for handling a shopping cart

// Class representing a Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Class representing a ShoppingCart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  // Method to add a product to the cart
  addProduct(product) {
    this.products.push(product);
  }

  // Method to remove a product from the cart
  removeProduct(product) {
    const index = this.products.findIndex((p) => p.name === product.name);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  // Method to calculate the total price of the cart
  calculateTotalPrice() {
    let totalPrice = 0;
    this.products.forEach((product) => {
      totalPrice += product.price;
    });
    return totalPrice;
  }
}

// Create an instance of ShoppingCart
const cart = new ShoppingCart();

// Create some products
const product1 = new Product("Keyboard", 50);
const product2 = new Product("Mouse", 30);
const product3 = new Product("Monitor", 200);

// Add products to cart
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

// Remove a product from cart
cart.removeProduct(product2);

// Calculate the total price of the cart
const totalPrice = cart.calculateTotalPrice();
console.log(`Total price of the cart: $${totalPrice.toFixed(2)}`);