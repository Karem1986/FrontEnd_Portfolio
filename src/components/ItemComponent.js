import React, { useState } from "react"

export default function ItemComponent(props) {
    //Shoppingcart-number, total, delete and total price
    const [amount, setAmount] = useState(1) //lift it to redux state
    const [total, setTotal] = useState(0)
    function onChange(e) {
        setAmount(e.target.value)
        setTotal(total + e.target.value)
    }
    console.log("itemComponent", props)

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
            <div>Total:{props.price * amount}</div>
        </>
    )
}
