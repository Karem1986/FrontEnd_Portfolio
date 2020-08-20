import React, { useState } from "react"
import { Shoppingcard } from "../StoreRedux/actions"
import { useDispatch } from "react-redux"

export default function ItemComponent(props) {
    const dispatch = useDispatch()

    //Shoppingcart-number, total, delete and total price
    const [amount, setAmount] = useState(1) //lift it to redux state to show total price of ALL products in shopping cart.
    const [total, setTotal] = useState(0)

    console.log("itemComponent", props)
    //We want to trigger the action of increasing quantity when a customer
    //clicks on the select amount option
    function onChange(e, productId) {
        console.log("what is e", e, productId)
        dispatch(Shoppingcard(productId)) //lifting state
        setAmount(e.target.value)
        setTotal(total + e.target.value)
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "40",
                }}
            >
                <div key={props.id}>
                    <h3
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "40px",
                        }}
                    >
                        {" "}
                        Your Shopping Cart: {props.name}
                        <img
                            style={{ display: "inline" }}
                            width="500px"
                            className="single-image-product"
                            alt="product"
                            src={props.imageUrl}
                        />
                    </h3>
                </div>

                <p style={{ width: "50%" }}>
                    {props.review.map((item) => {
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

            <h5 className="h5">Select the amount: </h5>

            <form action="amount-product" className="shoppingcart-form">
                <label for="quantity">Number:</label>
                <input
                    onChange={(e) => onChange(e, props.id)}
                    value={amount}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="100"
                />
            </form>
            <div className="total-allproducts">
                <h3 className="totalsingleproduct">
                    {" "}
                    Total: {props.price * amount}
                </h3>
            </div>
        </>
    )
}
