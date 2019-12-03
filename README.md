# MERN Stack set up

This readme covers step-by-step instructions on setting up a MERN (Mongo, Express, React, Node) stack project, as we went over it in class. 

1. Run `create-react-app movie-app` in the terminal to create the react project directory and open the movie-app directory in your code editor.

2. On the same file level as `package.json`:
    - Run `npm install express` in the terminal to install express to our project
    - Run `touch server.js` in the terminal to create our server file for our project


3. Configure the `server.js` file with the following code:

        const express = require('express')
    
        const app = express()
        const PORT = process.env.PORT || 8000
        
        app.get('/hello', (req, res) => {
            res.send('World')
        })
    
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`)
        })
4. Run `nodemon server.js` in the terminal to ensure that the server is set up correctly. `Running on port 8000` should appear in the terminal.
5. In the `src/` directory:
    - Delete `app.test` and `logo.svg`
    - Reconfigure the `app.js` to the following:
    
            import React, { Component } from 'react';
            import './App.css';
            
            class App extends Component {
              render() {
                return (
                  <div className="App">
                    <h1>Hello World</h1>
                  </div>
                )
              }
            }
            
            export default App;


## TO BE CONTINUED