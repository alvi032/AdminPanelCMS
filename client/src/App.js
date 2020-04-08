import React from 'react'
import './App.css'
import './ComponentsCss/Login.css'
import Login from './Components/Login'
import Home from './Components/Home'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




function App() {
  return (

      <Router>
    <div className="App">
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
        </Switch>
    </div>
      </Router>
  )
}

export default App
