import Customer from "../../src/model/Customer"

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
    })
});