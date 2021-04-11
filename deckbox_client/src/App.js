//packages
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//components 
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
//style 
import './App.css';
//services
import { clearToken, getToken } from './services/local-storage'

function App() {

  const handleLogout = () => {
    clearToken()
  }

  return (
   
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Switch>

          {getToken() ? <button className="logout" onClick={handleLogout}>Logout</button> : null}
        </div>
      </Router>
  );
}

export default App;
