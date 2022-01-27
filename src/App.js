import './App.css';
import Header from './Header.js';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
{/*Installed the npm install react-router-dom@5.2.0 as npm install react-router-dom was missing switch*/}

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
              <Login />
          </Route>
          <Route path="/checkout">    {/* Here the route paths are defined for dynamic rendering of Home page and Checkout page */}
              <Header />  
             <Checkout />
             </Route>
          <Route path="/">
             <Header />
              <Home />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;