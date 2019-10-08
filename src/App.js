import React from "react"
import "./App.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Component imports
import Home from "./components/Home"
import Navigation from "./components/Navigation"

function App() {
  return (
    <Router>
      <Route path="/" component={Navigation}/>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
