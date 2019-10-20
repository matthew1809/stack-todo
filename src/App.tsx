import React from "react"
import StackContainer from "./components/StackContainer"
import SplitTodo from "./components/SplitTodo"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/split'>
          <SplitTodo />
        </Route>
        <Route path='/'>
          <StackContainer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
