import Product from "../../src/model/Product.js";
import LoyaltyPointsService from "../../src/service/LoyaltyPointsService.js"

describe("Discount service should apply discounts", () => {

    it("Should calculate correct loyalty points for 15% discounted products", () => {
        const products = [new Product(100, "DIS_10_TestProduct", "Test product")];
        
        const loyaltyPoints = new LoyaltyPointsService(products)

        const loyaltyPointsEarned = loyaltyPoints.applyLoyaltyPointsService();
        
        expect(loyaltyPointsEarned).toBe(10);
    });

    it("Should calculate correct loyalty points for 15% discounted products", () => {
        const products = [new Product(150, "DIS_15_TestProduct", "Test product")];

        const loyaltyPoints = new LoyaltyPointsService(products)

        const loyaltyPointsEarned = loyaltyPoints.applyLoyaltyPointsService();
        
        expect(loyaltyPointsEarned).toBe(10);
    });

    it("Should calculate correct total and loyalty points for non discounted products", () => {
        const products = [new Product(100, "TestProduct", "Test product")];

        const loyaltyPoints = new LoyaltyPointsService(products)

        const loyaltyPointsEarned = loyaltyPoints.applyLoyaltyPointsService();
        
        expect(loyaltyPointsEarned).toBe(20);
    });
});
