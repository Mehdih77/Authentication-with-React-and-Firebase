import './App.css';
import AuthProvider from './AuthContext/AuthContext';
import SignUp from './components/SignUP/SignUp';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    
      <div className='container'>
        <div className='container-from'>
        <Router>
        <AuthProvider>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
        </Switch>
        </AuthProvider>
        </Router>
        </div>
      </div>
    
  );
}

export default App;
