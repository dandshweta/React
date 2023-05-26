import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx'
import HomepageView from './HomepageView.jsx'
import TextDemo from './TextDemo.jsx'


// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
    <HomepageView/>
    <TextDemo/>
  </React.StrictMode>,
)
