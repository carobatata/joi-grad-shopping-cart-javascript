export default class Order {
    constructor(totalPrice, loyaltyPoints, products) {
        this.totalPrice = totalPrice;
        this.loyaltyPoints = loyaltyPoints;
        this.products = products;
    }

    displaySummary = () => "Total price: " + this.totalPrice + "\n" + "Will receive " + this.loyaltyPoints + " loyalty points";
}