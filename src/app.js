import Product from "./model/Product.js";
import Customer from "./model/Customer.js";

const products = [
    new Product(10.0, "DIS_10_PRODUCT1", "Product 1"),
    new Product(180.0, "DIS_15_PRODUCT2", "Product 2")
];

const customer = new Customer("John Doe");

customer.addToCart(products[0]);
customer.addToCart(products[1]);

const productThree = new Product(30.0, "PRODUCT3", "Product 3");
customer.addToCart(productThree);

console.log(customer.shoppingCart.displaySummary())

customer.checkoutCart();

console.log(customer.orders[0].displaySummary())
