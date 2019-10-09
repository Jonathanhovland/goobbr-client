import React from "react"
import logo from "../../imgages/logo.jpg"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <img src={logo} width={100} height={75} mode='fit' alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/family">Family</Link>
            <Link to="/calendar">Calendar</Link>
        </nav>
    )
}

export default Navigation