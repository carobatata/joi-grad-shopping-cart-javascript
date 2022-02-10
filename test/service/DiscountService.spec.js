import Product from "../../src/model/Product.js";
import DiscountService from "../../src/service/DiscountService.js"

describe("Discount service should apply discounts", () => {

    it("Should calculate correct total for 10% discounted products", () => {
        const products = [new Product(100, "DIS_10_TestProduct", "Test product")];
        
        const discountService = new DiscountService(products);

        const totalPrice = discountService.applyDiscounts();
        
        expect(totalPrice).toBe(90);
    });

    it("Should calculate correct total for 15% discounted products", () => {
        const products = [new Product(150, "DIS_15_TestProduct", "Test product")];

        const discountService = new DiscountService(products);

        const totalPrice = discountService.applyDiscounts();
        
        expect(totalPrice).toBe(127.5);
    });

    it("Should calculate correct total for non discounted products", () => {
        const products = [new Product(100, "TestProduct", "Test product")];

        const discountService = new DiscountService(products);

        const totalPrice = discountService.applyDiscounts();
        
        expect(totalPrice).toBe(100);
    });
});
