import ForgotPassword from "./Pages/ForgotPassword";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration"
import store from './store'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router=createBrowserRouter([
  {
    path: "/registration",
    element: <Registration/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>
  },
  {
    path: "/homepage",
    element: <HomePage/>
  }
])

function App() {
  

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  ) 
}

export default App
