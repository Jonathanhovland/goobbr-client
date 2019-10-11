import React from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Component imports
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Family from "./components/Family"
import Tasks from "./components/Tasks"
import Calendar from "./components/Calendar"

function App() {
  return (
    <Router>
      <Route path="/" component={Navigation}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/family" component={Family}/>
        <Route exact path="/tasks" component={Tasks}/>
        <Route path="/calendar" component={Calendar}/>
      </Switch>
    </Router>
  )
}

export default App
