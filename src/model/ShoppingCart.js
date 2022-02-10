import _ from "lodash";
import DiscountService from "../service/DiscountService.js";
import Order from "./Order.js";
import LoyaltyPointsService from "../service/LoyaltyPointsService.js";

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

        let totalPrice = new DiscountService(this.products).applyDiscounts();
        let loyaltyPointsEarned = new LoyaltyPointsService(this.products).applyLoyaltyPointsService();

        let order = new Order(totalPrice, loyaltyPointsEarned, this.products);

        this.products = [];
        return order;
    };

    displaySummary = () =>  {
        return "Customer: " + this.customer.name + "\n" + 
            "Bought:  \n" + this.products.map(p => "- " + p.name + ", " + p.price).join('\n');
    }
};
