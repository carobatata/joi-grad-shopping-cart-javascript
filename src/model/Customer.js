import ShoppingCart from "./ShoppingCart.js";

export default class Customer {
    constructor(name) {
        this.name = name;
        this.orders = [];
        this.shoppingCart = new ShoppingCart(this, []);

    };

    addToCart = (product) => {
       this.shoppingCart.addProduct(product);
    }

    removeFromCart = (product) => {
        this.shoppingCart.removeProduct(product);
    }

    checkoutCart = () => {
        let order = this.shoppingCart.checkout();
        this.orders.push(order);
    } 
};
