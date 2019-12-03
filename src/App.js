import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Movies from './Components/Movies'
import ShowMovie from './Components/ShowMovie'

import * as ROUTES from '../src/constants/routes'
import './App.css'

class App extends Component {
  state = {
    message: ''
  }

  async componentDidMount() {
    const message = await fetch('/api/v1/hello')
    const messageJson = await message.json()
    this.setState({message: messageJson.message})
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
          <Route exact path={ROUTES.LOGIN} render={() => <div>login</div>} />
          <Route exact path={ROUTES.SIGN_UP} render={() => <div>signup</div>} />
          <Route exact path={ROUTES.MOVIES} component={Movies} />
          <Route exact path={`${ROUTES.MOVIES}/:id`} component={ ShowMovie } />
        </Switch>
      </div>
    )
  }
}

export default App;
