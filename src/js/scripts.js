/*

Practical example.

------------------------------
Product
------------------------------
- name: String
- price: Double
- quantity: Integer
------------------------------
+ total(): Double
+ add(amount: Integer): void
+ remove(amount: Integer): void
+ label(): String
------------------------------

*/

"use strict";

const p1 = {
    name: "Computador",
    price: 3000.00,
    quantity: 2
};

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    };
};

/* const Product = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}; */

Product.prototype.total = function () {
    return this.price * this.quantity;
};

Product.prototype.add = function (amount) {
    return this.quantity += amount;
};

Product.prototype.remove = function (amount) {
    if (this.quantity > amount) {
        return this.quantity -= amount;
    };
};

Product.prototype.label = function () {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
};

const p2 = new Product("Monitor", 800.00, 10);

const p3 = new Product("Mouse", 50.00, 4);
