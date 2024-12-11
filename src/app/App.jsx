import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './router/index.jsx'
import React from "react";
import header from "../components/header.jsx";
import Header from "../components/header.jsx";
function App() {

  return (

    <BrowserRouter><Header/>
      <MyRoutes/>
    </BrowserRouter>
  )
}

export default App
