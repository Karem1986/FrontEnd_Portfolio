import axios from "axios"
import { ADD_SHOPPING_CARD, Shoppingcard } from "../actions"
jest.mock("axios")

describe("#Shoppingcard", () => {
    describe("if given an array of products", () => {
        // here is where our test cases will go
        const ShoppingcardProducts = [{}, {}]
        test("should return an action object", () => {
            // build action we expect to get back
            const expected = {
                type: ADD_SHOPPING_CARD,
                payload: ShoppingcardProducts,
            }
            // call function
            const action = Shoppingcard(ShoppingcardProducts)
            // do assertion on function return
            expect(action.payload).toHaveLength(ShoppingcardProducts.length)
        })
    })
})
