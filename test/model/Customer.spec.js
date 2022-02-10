import Customer from "../../src/model/Customer";
import Product from "../../src/model/Product.js";

describe("Customer", () => {
    it("Should have a name", () => {
        const name = "Test customer"
        const customer = new Customer(name);

        expect(customer.name).toEqual(name);
    })

    it("Should'n have any order yet", () => {
        const customer = new Customer("Test customer");

        expect(customer.orders).toEqual([]);
    })

    it("Should create an empty shopping cart", () => {
        const customer = new Customer("Test customer");

        expect(customer.shoppingCart).toBeDefined();
        expect(customer.shoppingCart.products).toEqual([]);
    });

    it("Should add the Loyalty Points when a checkout is done", () => {
        const customer = new Customer("Test customer");
        const product = new Product(150, "DIS_15_TestProduct", "Test product");

        customer.addToCart(product)
        customer.checkoutCart();

        expect(customer.loyaltyPoints).toBe(10);

        const product2 = new Product(200, "DIS_10_TestProduct", "Test product");
        customer.addToCart(product2)
        customer.checkoutCart();
       
        expect(customer.loyaltyPoints).toBe(30);
    })
});