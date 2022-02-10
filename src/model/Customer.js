import ShoppingCart from "./ShoppingCart.js";

export default class Customer {
    constructor(name) {
        this.name = name;
        this.orders = [];
        this.shoppingCart = new ShoppingCart(this, []);

    }
};
