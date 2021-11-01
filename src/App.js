import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import UserTable from './components/Table'
import Prem from './components/Prem'
function App() {
  return (
    <div>

      <Router>

     
          <Switch>
        <Route path='/prem'  component={Prem} />
        <Route path='/' component={UserTable} />
       </Switch>
      </Router>

    </div>
  )
}

export default App

