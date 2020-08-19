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

    describe("when given an ADD_SHOPING_CARD action type", () => {
        test("returns a new state with the payload array included", () => {
            const updatedArrayProducts = [{}, {}]
            const action = {
                type: ADD_SHOPPING_CARD,
                payload: updatedArrayProducts,
            }
            const newState = reducer(initialState, action)
            expect(newState).toHaveLength(updatedArrayProducts.length)
            expect(newState).toEqual(updatedArrayProducts)
        })
    })
})
