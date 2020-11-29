import React from "react"
import "./detail-header.css"

function DetailHeader() {
    return(
        <header>
            <p>Recent</p>
            <p>No Answer</p>
            <p>Most Answered</p>
            <p>Most Disliked</p>
            <p className = "add-question">ASK A QUESTION +</p>
        </header>
    )
}
export default DetailHeader