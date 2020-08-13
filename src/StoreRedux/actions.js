export function Shoppingcard(productId) {
    return {
        type: "ADD_SHOPPING_CARD",
        payload: productId //this is what we are sending in the action
    };
}

