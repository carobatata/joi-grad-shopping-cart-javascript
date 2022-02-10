export default class loyaltyPointsService {
    constructor(products) {
        this.products = products;
    };

    applyLoyaltyPointsService = () => {
        let loyaltyPointsEarned = 0;
        this.products.forEach(product => {
            if (product.code.startsWith("DIS_10")) {
                loyaltyPointsEarned += product.price / 10;
            } else if (product.code.startsWith("DIS_15")) {
                loyaltyPointsEarned += product.price / 15;
            } else {
                loyaltyPointsEarned += product.price / 5;
            }
        });
        return loyaltyPointsEarned;
    }
};