import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
mern-skeleton/client/main.js:
import React from 'react'
import { render } from 'react-dom'
import App from './App'
render(<App/>, document.getElementById('root’))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
