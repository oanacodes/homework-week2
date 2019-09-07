// created class
class shoppingCart {
    constructor () {
        this.cart = [];
    }

    // method that adds new items to the array
    addItem(itemName, quantity, price) {
        const cartData = 
            {'name': itemName, 
            'quantity': quantity, 
            "pricePerUnit": price};
        return this.cart.push(cartData);
    }

    // method that returns an array with current items
    getItems() { 
        return this.cart;
    }

    // method that removes all items from array
    clear() {
        return this.cart = [];
    }

    // method that returns total value of Shopping Cart
    total() {
        const totalCartPrice = this.cart.reduce((totalCart, currentItem) => {
            return totalCart + (currentItem.quantity * currentItem.pricePerUnit);
        }, 0)
        return totalCartPrice;
    }
}

// created new instance of the shoppingCart class
const cart = new shoppingCart;

// exported the shhoppingCart class
module.exports = shoppingCart;