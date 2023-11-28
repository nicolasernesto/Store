import { useRoutes, BrowserRouter } from 'react-router-dom' 
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../SignIn'
import NavBar  from '../../Components/Navbar'
import '../../App.css'

const AppRoutes = () => {

  let routes = useRoutes([
    {path: '/',element: <Home />},
    {path: '/my-account',element: <MyAccount/>},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/*',element: <NotFound />}
  
  ])

  return routes
}


const App =() => {
  
  return (
   <BrowserRouter>
    <AppRoutes />
    <NavBar />
   </BrowserRouter>
    
  )
}

export default App
