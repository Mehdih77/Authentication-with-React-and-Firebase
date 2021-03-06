import React, { useState, useRef }from 'react';
import { Link, useHistory} from 'react-router-dom';
import {useAuth} from '../../AuthContext/AuthContext';
import './LogIn.css';


function LogIn() {

    const {login} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        } catch  {
            setError('Failed to log in');
        }
        setLoading(false);

    }



    return (
        <>
            <form onSubmit={handleSubmit} className='login-form' autoComplete='off'>
                  <h2>Log In</h2>
                  {error &&  <p className='error-alert'>{error}</p>}
               <div className='form-inputs'>
               <label htmlFor="email">Email</label>
                <input type="text" id='email' ref={emailRef} required />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' ref={passwordRef} required />
                <button disabled={loading} type='submit'>Log in</button>
               </div>
                <Link to='/forgot-password'><a>Forgot Password?</a></Link>
            </form>
                <p className='form-bottom'>Need an account? <Link to='/signup'><a>Sign Up</a></Link></p>
                </>
    )
}

export default LogIn
