import reducer from "../reducer"
import { ADD_SHOPPING_CARD } from "../actions"

describe("shoppingcartReducer", () => {
    const initialState = []

    describe("if given no state and any other unmatched action", () => {
        test("returns the inital state", () => {
            const newState = reducer(undefined, { type: "ANY" })
            expect(newState).toEqual(initialState)
        })
    })

    describe("when given an ADD_SHOPPING_CARD action type", () => {
        test("returns a new state with the payload array included", () => {
            const productId = 1
            const action = {
                type: ADD_SHOPPING_CARD,
                payload: productId,
            }
            const newState = reducer(initialState, action)
            console.log("newstate", newState)
            expect(newState).toHaveLength(1) //at least 1 product added to cart
            expect(newState).toEqual([{ id: productId, quantity: 1 }])
        })
    })
})
