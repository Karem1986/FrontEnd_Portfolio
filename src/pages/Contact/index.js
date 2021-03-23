import React, { useState } from "react"

export default function Contact() {
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")
    const [message, setMessage] = useState("")
    const [showmessage, setSuccess] = useState("")

    function onSubmit(event) {
        event.preventDefault()
        console.log(`
        Email: ${email}
        About: ${about} 
        Message: ${message}
      
    `)

        setSuccess("Your message was submitted successfully")
    }

    function onChange(event, set_Function) {
        set_Function(event.target.value)
    }

    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <h1 className="contact-header">Contact us</h1>

                <form onSubmit={onSubmit}>
                    <input
                        className="contact-input"
                        placeholder="E-mail"
                        required
                        type="email"
                        onChange={(event) => onChange(event, setEmail)}
                    />
                    <select
                        className="contact-select"
                        required
                        onChange={(event) => onChange(event, setAbout)}
                    >
                        <option>What is it about?</option>
                        <option>Product Complaint</option>
                        <option>Delivery</option>
                        <option>Other</option>
                    </select>
                    <textarea
                        className="contact-textarea"
                        placeholder="Write your message"
                        required
                        onChange={(event) => onChange(event, setMessage)}
                    />
                    <button type="submit" className="contact-submit">
                        Submit
                    </button>
                </form>
                <p className="success-contact">{showmessage}</p>
            </div>
        </div>
    )
}
