import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/pages/Home";
import About from "./Component/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokeDetail from "./Component/pages/PokeDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
         <Switch>
           <Route exact path="/"> 
              <PokeDetail />
           </Route>
           <Route path="/about"> 
              <About />
           </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

