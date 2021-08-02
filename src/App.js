import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          {/* checkout page */}
        <Route path="/checkout">
            <Header/>     
            <Checkout/>
          </Route> 

          {/* homepage  */}
          <Route path="/">
            <Header/>     
            <Home/>
          </Route> 

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
