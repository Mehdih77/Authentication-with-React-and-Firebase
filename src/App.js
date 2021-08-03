import './App.css';
import AuthProvider from './AuthContext/AuthContext';
import SignUp from './components/SignUP/SignUp';

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <div className='container-from'>
          <SignUp />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
