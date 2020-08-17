import React, { Component } from "react"
import "./Message.css"

export default function MessageChat() {
    return (
        <div className="MessageList">
            <div>Connecting...</div>
            <div>
                <span className="author">You:</span> Hello!
            </div>
            <div>
                <span className="author">Them:</span> Hey there!
            </div>
        </div>
    )
}
