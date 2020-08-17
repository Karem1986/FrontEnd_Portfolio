const initialState = 0

export default function quantityproductsReducer(state = initialState, action) {
    console.log("Shopping Reducer")
    switch (action.type) {
        case "QUANTITY_OF_PRODUCTS": {
            return {
                ...state,
                quantity: action.payload,
            }
        }

        default: {
            return state
        }
    }
}
