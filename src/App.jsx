import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import './App.css'
import RouTeS from './routes/routes'

const routes = createBrowserRouter(RouTeS)
function App() {

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
