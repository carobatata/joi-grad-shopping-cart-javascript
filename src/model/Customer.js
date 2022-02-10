import ShoppingCart from "./ShoppingCart.js";

export default class Customer {
    constructor(name) {
        this.name = name;
        this.orders = [];
        this.shoppingCart = new ShoppingCart(this, []);
        this.loyaltyPoints = 0;

    };

    addToCart = (product) => {
       this.shoppingCart.addProduct(product);
    }

    removeFromCart = (product) => {
        this.shoppingCart.removeProduct(product);
    }

    checkoutCart = () => {
        let order = this.shoppingCart.checkout();
        this.loyaltyPoints += order.loyaltyPoints;
        this.orders.push(order);
    } 
};
