import React from "react"
import logo from "./logo.jpg"

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="155"
                    height="45"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />       
            </Navbar.Brand>     
            <Nav className="mr-auto">
                <Link style={{ textDecoration: 'none', color: '#F9F9F8', padding: 20, marginTop: 5 }} to="/">Home</Link>
                <Link style={{ textDecoration: 'none', color: '#98EDF0', padding: 20, marginTop: 5 }} to="/family">Family</Link>
                <Link style={{ textDecoration: 'none', color: '#4EEBF2', padding: 20, marginTop: 5 }} to="/tasks">Tasks</Link>
                <Link style={{ textDecoration: 'none', color: '#52C7CC', padding: 20, marginTop: 5 }} to="/calendar">Calendar</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button style={{color: '#52C7CC'}} variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation