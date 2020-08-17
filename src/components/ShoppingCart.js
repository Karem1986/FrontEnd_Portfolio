import React, { useState } from "react"
import { selectShoppingCart } from "../StoreRedux/selector"
import { useSelector } from "react-redux"
import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"

//multiples ids in backend
//use it here in the query
const FIND_BY_ID = gql`
    query arrayProducts($Ids: [Int]) {
        arrayProducts(containsIds: $Ids) {
            id
            name
            imageUrl
            price
            review {
                id
                title
                comment
            }
        }
    }
`

export default function ShoppingCart() {
    //Shoppingcart-number, total, delete and total price
    const [amount, setAmount] = useState(1)
    const price = 10
    const [total, setTotal] = useState(0)
    function onChange(e) {
        setAmount(e.target.value)
        setTotal(e.target.value)
    }
    const { id: containsIds } = useParams()
    console.log("testing params:", containsIds)
    const shoppingCart = useSelector(selectShoppingCart)
    // console.log('selector', shoppingCart[0].id) // id of the first element.
    const arrayShoppingproducts = shoppingCart.map((item) => parseInt(item.id))
    console.log("array", arrayShoppingproducts)
    //Here finds the product by id
    // [1,3,6,2]
    const { data, loading, error } = useQuery(FIND_BY_ID, {
        variables: { Ids: arrayShoppingproducts },
    }) //
    console.log("data", data)
    if (loading) return <h2>Hello</h2>
    if (error) return <p>ERROR</p>
    if (!data) return <p>Not found</p>

    return (
        <div>
            {data.arrayProducts.map((item, key) => {
                return (
                    <>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                marginTop: "40",
                            }}
                        >
                            <div key={item.id}>
                                <h3
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        margin: "40px",
                                    }}
                                >
                                    {" "}
                                    Your Shopping Cart: {item.name}
                                    <img
                                        style={{ display: "inline" }}
                                        width="500px"
                                        className="single-image-product"
                                        src={item.imageUrl}
                                    />
                                </h3>
                            </div>

                            <p style={{ width: "50%" }}>
                                {data.arrayProducts[0].review.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            style={{
                                                backgroundColor: "pink",
                                                color: "black",
                                                margin: "40px",
                                            }}
                                        >
                                            {item.comment}
                                        </div>
                                    )
                                })}
                            </p>
                        </div>

                        <h5>Select the amount: </h5>

                        <form action="amount-product">
                            <label for="quantity">Number:</label>
                            <input
                                onChange={onChange}
                                value={amount}
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                max="100"
                            />
                        </form>
                        <div>{data.arrayProducts[0].price * amount}</div>
                    </>
                )
            })}
            <h4>Total: {total} </h4>
        </div>
    )
}
