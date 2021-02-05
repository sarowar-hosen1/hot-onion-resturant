import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { AuthProvider } from './Components/Login/useAuth';
import MenuDetails from './Components/MenuDetails/MenuDetails';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([])

  return (
    <AuthProvider>
      <CartContext.Provider value={[cart, setCart]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/menu/:menuId'>
              <MenuDetails></MenuDetails>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/cart'>
              <Cart></Cart>
            </PrivateRoute>
          </Switch>
        </Router>
      </CartContext.Provider>
    </AuthProvider>
  );
};

export default App;