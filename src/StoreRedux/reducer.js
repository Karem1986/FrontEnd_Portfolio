const initialState = [
    //list of products
]

export default function shoppingcartReducer(state = initialState, action) {
    console.log("Shopping Reducer")
    switch (action.type) {
        case "ADD_SHOPPING_CARD": {
            //   first check if the productId already exists in the state
            //   state is an array so you can use one of the array methods
            const productId = +action.payload
            const exists = state.find((product) => product.id === productId) //+ makes sure that it will always be a number

            //   if the productId is doesn't exist in the array, we add the { id, quantity } object
            //   if it already exists, we need to update it with the new quantity
            console.log("action payload reducer", exists, productId)

            if (exists) {
                // update with the new quantity.
                // hint you need to use .map
                const updatedShoppingCart = state.map((item) => {
                    if (item.id === productId) {
                        //checking by id and updating if it finds it
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item //nothings happens
                    }
                })
                // you need to return at the end something.
                // exists.quantity += 1
                // exists.id = productId
                console.log("test", updatedShoppingCart)
                return updatedShoppingCart
            } else {
                console.log("test2", ...state, { id: productId, quantity: 1 })
                return [...state, { id: productId, quantity: 1 }]
            }
            // undefined: the first time i add it. if not we get the product
        }
        //Pending to remove a product

        default: {
            return state
        }
    }
}
