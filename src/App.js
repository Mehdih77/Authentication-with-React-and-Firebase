import './App.css';
import AuthProvider from './AuthContext/AuthContext';
import SignUp from './components/SignUP/SignUp';
import SignIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
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
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={SignIn} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
        </AuthProvider>
        </Router>
        </div>
      </div>
    
  );
}

export default App;
