import './App.css';
import Header from './Header.js';
import Checkout from './Checkout';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
{/*Installed the npm install react-router-dom@5.2.0 as npm install react-router-dom was missing switch*/}

function App() {
  return (
    <Router>
      <div className="app">
      <Header /> {/*Here the Header is getting rendered by default*/}
        <Switch>
          <Route path="/checkout">    {/* Here the route paths are defined for dynamic rendering of Home page and Checkout page */}
             <Checkout />
             </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;