import React from "react"
import logo from "../../imgages/logo.jpg"
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'




import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        // <nav>
        //     <img src={logo} width={100} height={75} mode='fit' alt="logo" />
        //     <Link to="/">Home</Link>
        //     <Link to="/family">Family</Link>
        //     <Link to="/tasks">Tasks</Link>
        //     <Link to="/calendar">Calendar</Link>
        // </nav>
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>goobbr</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/family">Family</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/calendar">Calendar</Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </>
    )
}

export default Navigation