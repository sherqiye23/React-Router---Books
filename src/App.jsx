import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
