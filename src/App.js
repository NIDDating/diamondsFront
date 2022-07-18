import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Employers from "./pages/Employers";
import Home from "./pages/Home";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Router>
          <Navbar />
          <Switch>
            <Route path={"/home"}>
              <Home />
            </Route>
            <Route path={"/employers"}>
              <Employers />
            </Route>
          </Switch>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
