import logo from './logo.svg';
import './App.css';
import LoginView from "../src/components/LoginView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <LoginView />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
