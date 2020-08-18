import React, { useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
    "pk_live_51HHCvXLtQj1lsGQL7Dx4UVQ1dB2IRxGly5MzGlKoQokxq44A02TpUxIdMbKdGvsTNDJFulILZpwBXSa1rR9NWvBE00ZcsVRanr"
)
export default function CheckoutForm() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        console.log(`
        Name: ${name} 
        Email: ${address}
      
   
    `)
    }

    function onChange(event, set_Function) {
        set_Function(event.target.value)
    }

    return (
        <Elements stripe={stripePromise}>
            <div className="form">
                <form
                    onSubmit={onSubmit}
                    style={{
                        color: "#32325d",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: "20px",
                        backgroundColor: "turquoise",
                        margin: "50px",
                    }}
                >
                    <h2>Please complete with your information below:</h2>
                    <input
                        className="input"
                        onChange={(event) => onChange(event, setName)}
                    />
                    <p>Name</p>
                    <input
                        className="input"
                        onChange={(event) => onChange(event, setAddress)}
                    />
                    <p>Address</p>
                    <button className="button">Submit</button>
                </form>
            </div>
        </Elements>
    )
}
