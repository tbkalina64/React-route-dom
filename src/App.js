import React from 'react'
import Home from './Home'
import Albums from './albums'
import About from './About'
import Users from './users'
import Header from './Header'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/albums' component={Albums} />
           <Route path='/users' component={Users} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}
