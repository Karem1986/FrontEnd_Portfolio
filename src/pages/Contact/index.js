import React from "react"

export default function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <h1 className="contact-header">Contact us</h1>
                <form className="contact-form">
                    <input
                        className="contact-input"
                        placeholder="E-mail"
                        required
                        type="email"
                    />
                    <select className="contact-select" required>
                        <option>What's its about</option>
                        <option>Product Complaint</option>
                        <option>Delivery</option>
                        <option>Other</option>
                    </select>
                    <textarea
                        className="contact-textarea"
                        placeholder="Write your message"
                        required
                    />
                    <button type="submit" className="contact-submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
