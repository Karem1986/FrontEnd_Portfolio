export function quantityProducts(quantity) {
    return {
        type: "QUANTITY_OF_PRODUCTS",
        payload: quantity, //this is what we are sending in the action
    }
}
