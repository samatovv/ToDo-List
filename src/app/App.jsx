import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './router/index.jsx'
import React from "react";
function App() {

  return (
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
  )
}

export default App
