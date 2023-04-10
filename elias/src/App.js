import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Mon site
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/services" className="navbar-link" activeClassName="active">
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;