import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './router/index.jsx'

function App() {

  return (
    <BrowserRouter>
      <MyRoutes/>
    </BrowserRouter>
  )
}

export default App
