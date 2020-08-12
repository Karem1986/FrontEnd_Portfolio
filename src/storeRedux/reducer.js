
const initialState = {
    product: []

};

export default function productsIDReducer(state = initialState, action) {
    console.log("Testing Reducer")
    switch (action.type) {
        case "DISPLAY_ProductsID": {
            return {
                ...state,
                product: action.payload
            }

        }
        default: {
            return state;
        }
    }
}
