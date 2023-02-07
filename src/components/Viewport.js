import React from "react"
import Draggable from "react-draggable"
import "./../style.css"

export default function Viewport() {
    return (
        <div className="viewport">
            <Draggable bounds="parent">
                <div className="child-element">Justin Lee's Test</div>
            </Draggable>
        </div>
    )
}