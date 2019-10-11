import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand style={{color: '#52C7CC', fontSize: '35px' }}>goobbr</Navbar.Brand>
            <Nav className="mr-auto">
                <Link style={{ textDecoration: 'none', color: 'white', padding: 20, marginTop: 10 }} to="/">Home</Link>
                <Link style={{ textDecoration: 'none', color: 'white', padding: 20, marginTop: 10 }} to="/family">Family</Link>
                <Link style={{ textDecoration: 'none', color: 'white', padding: 20, marginTop: 10 }} to="/tasks">Tasks</Link>
                <Link style={{ textDecoration: 'none', color: 'white', padding: 20, marginTop: 10 }} to="/calendar">Calendar</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button style={{color: '#52C7CC'}} variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation