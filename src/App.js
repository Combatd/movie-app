import React, { Component } from 'react';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const message = await fetch('/api/v1/hello')
    const messageJson = await message.json()
    console.log(messageJson)
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h1>Hey dude!</h1>
      </div>
    )
  }
}

export default App;
