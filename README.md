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
    - Delete `app.test` and `logo.svg`. We won't be using these files.
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

6. In the terminal, run `npm run build` to create our build directory
7. In the `server.js` file, add the following code:
        
        const express = require('express')

        const app = express()
        const PORT = process.env.PORT || 8000
        
        app.use(express.static(path.join(__dirname, 'build')))
        
        app.get('/hello', (req, res) => {
            res.send('World')
        })
        
        app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, 'build', 'index.html'))
        })
        
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`)
        })
    This additional route feeds our build directory to our backend server
8. In `app.js` add a componentDidMount function that makes a fetch request to our backend server (**Make sure our server is running on localhost:8000**):

        import React, { Component } from 'react';
        import './App.css';
        
        class App extends Component {
          
          async componentDidMount() {
            const message = await fetch('http://localhost:8000/hello')
            console.log(message)
          }
        
          render() {
            return (
              <div className="App">
                <h1>Hello World</h1>
              </div>
            )
          }
        }
        
        export default App;
9. In `package.json`, add a proxy property at the bottom with our localhost as the value:

        {
          "name": "movie-app",
          "version": "0.1.0",
          "private": true,
          "dependencies": {
            "express": "^4.17.1",
            "react": "^16.12.0",
            "react-dom": "^16.12.0",
            "react-scripts": "3.2.0"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
          },
          "eslintConfig": {
            "extends": "react-app"
          },
          "browserslist": {
            "production": [
              ">0.2%",
              "not dead",
              "not op_mini all"
            ],
            "development": [
              "last 1 chrome version",
              "last 1 firefox version",
              "last 1 safari version"
            ]
          },
          "proxy": "http://localhost:8000"
        }
10. With this proxy in place, we will want to reconfigure the fetch call in our `app.js`:

        const message = await fetch('/hello')
