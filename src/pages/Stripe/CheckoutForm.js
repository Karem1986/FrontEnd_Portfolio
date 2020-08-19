import React, { useState } from "react"
import { gql, useMutation } from "@apollo/client"

import { loadStripe } from "@stripe/stripe-js"

import {
    useStripe,
    Elements,
    CardElement,
    useElements,
} from "@stripe/react-stripe-js"

import "./CheckoutForm.css"
const firstPaymentCall = gql`
    mutation createpayment($amount: Int) {
        createpayment(amount: $amount) {
            client_secret
        }
    }
`

const stripePromise = loadStripe(
    "pk_test_51HHCvXLtQj1lsGQLqH9LEEQa8w7UoN4yFXvJHaGfBOFbWbUoF3p4Ff9yI0dvHp7SF9rhLdXArbP1TougSt13csHU00VAg5ufqa"
)
function CheckoutForm() {
    const stripe = useStripe()
    const elements = useElements()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    //1.mutation here for payment: get back my client secret
    const [payment] = useMutation(firstPaymentCall)
    console.log("firstPaymentCall", payment)
    async function onSubmit(event) {
        event.preventDefault()
        console.log(`
            Name: ${name} 
            Email: ${address}
        `)

        const res = await payment({
            variables: {
                amount: 51,
            },
        })
        console.log("res", res)
        const result = await stripe.confirmCardPayment(
            res.data.createpayment.client_secret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: name,
                        address: address,
                    },
                },
            }
        )
        console.log("result", result)
    }

    function onChange(event, set_Function) {
        set_Function(event.target.value)
    }
    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        },
    }

    return (
        <div className="form">
            <form
                onSubmit={onSubmit}
                style={{
                    color: "white",
                    fontFamily: "Helvetica, sans-serif",
                    fontSize: "20px",
                    backgroundColor: "black",
                    margin: "100px",
                    padding: "50px",
                }}
            >
                <h2 style={{ color: "white" }}>
                    Please complete your payment information below:
                </h2>
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

                <CardElement options={CARD_ELEMENT_OPTIONS} />

                <button
                    className="button"
                    style={{
                        display: "flex",
                        margin: "20px",
                        backgroundColor: "turquoise",
                        borderRadius: "20px",
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
)
