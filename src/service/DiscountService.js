export default class DiscountService {
    constructor(products) {
        this.products = products;
    };

    applyDiscounts = () => {
        let totalPrice = 0;
        this.products.forEach(product => {
            let discount = 0;
            if (product.code.startsWith("DIS_10")) {
                discount = product.price * 0.1;
            } else if (product.code.startsWith("DIS_15")) {
                discount = product.price * 0.15;
            }
            totalPrice += product.price - discount;
        });
        return totalPrice;
    }
};