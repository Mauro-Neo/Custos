import React from "react"
import { FaMailBulk, FaWhatsapp } from "react-icons/fa"

function Contact() {
    return (
        <div style={{margin: '2em'}}>
            <h1>Mauro Silva</h1>
            <h2><FaWhatsapp /> 11 97409-2277</h2>
            <h2><FaMailBulk /> silva.maurodefreitas@gmail.com</h2>
        </div>
    )
}

export default Contact