import React from "react"
import "./App.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Component imports
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Tasks from "./components/Tasks"
import Family from "./components/Family"
import Calendar from "./components/Calendar"

function App() {
  return (
    <Router>
      <Route path="/" component={Navigation}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks" component={Tasks}/>
        <Route path="/family" component={Family}/>
        <Route path="/calendar" component={Calendar}/>
      </Switch>
    </Router>
  )
}

export default App
