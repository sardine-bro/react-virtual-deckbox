//packages
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//components 
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
//style 
import './App.css';

function App() {
  return (
   
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
