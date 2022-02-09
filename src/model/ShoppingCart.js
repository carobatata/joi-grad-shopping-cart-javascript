import _ from "lodash";
import DiscountService from "../service/DiscountService.js";
import Order from "./Order.js";

export default class ShoppingCart {
    constructor(customer, products) {
        this.customer = customer;
        this.products = products;
    };

    addProduct = (product) => {
        this.products.push(product);
    };

    removeProduct = (product) => {
        _.remove(this.products, product);
    };

    checkout = () => {

        var totalPrice = new DiscountService(this.products).applyDiscounts();
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

        return new Order(totalPrice, loyaltyPointsEarned);
    };

    displaySummary = () =>  {
        return "Customer: " + this.customer.name + "\n" + 
            "Bought:  \n" + this.products.map(p => "- " + p.name + ", " + p.price).join('\n');
    }
};
