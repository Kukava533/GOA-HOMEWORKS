// class.mjs

export class Item {
    constructor(name, price, category, quantity) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }

    //  ღირებულება
    get totalPrice() {
        return this.price * this.quantity;
    }

    // დეტალები
    getItemDetails() {
        return `${this.name} (${this.category}) - $${this.price} each, Quantity: ${this.quantity}`;
    }

    //  stocks-ის განახლება
    updateStock(newQuantity) {
        this.quantity = newQuantity;
    }
}



// app.js

import { Item } from './class.mjs';


const items = [
    new Item('Laptop', 1200, 'Electronics', 5),
    new Item('Smartphone', 800, 'Electronics', 10),
    new Item('T-shirt', 20, 'Clothing', 15),
    new Item('Coffee Maker', 50, 'Appliances', 8)
];


class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addToCart(item, quantity) {
        const itemInCart = this.cart.find(cartItem => cartItem.name === item.name);
        if (itemInCart) {
            itemInCart.quantity += quantity;
        } else {
            this.cart.push(new Item(item.name, item.price, item.category, quantity));
        }
        console.log(`${quantity} ${item.name}(s) added to the cart.`);
    }

    removeFromCart(itemName, quantity) {
        const itemInCart = this.cart.find(cartItem => cartItem.name === itemName);
        if (itemInCart) {
            if (itemInCart.quantity > quantity) {
                itemInCart.quantity -= quantity;
            } else {
                const index = this.cart.indexOf(itemInCart);
                this.cart.splice(index, 1);
            }
            console.log(`${quantity} ${itemName}(s) removed from the cart.`);
        } else {
            console.log(`${itemName} not found in the cart.`);
        }
    }

    getTotalPrice() {
        let total = 0;
        this.cart.forEach(item => total += item.totalPrice);
        return total;
    }

  
    viewCart() {
        if (this.cart.length === 0) {
            console.log('Your cart is empty.');
        } else {
            this.cart.forEach(item => {
                console.log(item.getItemDetails());
            });
        }
    }
}


const shoppingCart = new ShoppingCart();


shoppingCart.addToCart(items[0], 2);  // Laptop
shoppingCart.addToCart(items[1], 1);  // Smartphone
shoppingCart.addToCart(items[2], 3);  // T-shirt


shoppingCart.viewCart();


console.log(`Total Price: $${shoppingCart.getTotalPrice()}`);


shoppingCart.removeFromCart('T-shirt', 2);


shoppingCart.viewCart();
console.log(`Total Price after removal: $${shoppingCart.getTotalPrice()}`);


