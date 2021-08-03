import React, { useState, useRef }from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../AuthContext/AuthContext';
import './SignUp.css';


function SignUp() {

    const {signup} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/login')
        } catch  {
            setError('Failed to create account');
        }
        setLoading(false)

    }



    return (
            <form onSubmit={handleSubmit} className='signup-form'>
                  <h2>SignUp</h2>
                  {error &&  <p className='error-alert'>{error}</p>}
                <label htmlFor="email">Email</label>
                <input type="text" id='email' ref={emailRef} required />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' ref={passwordRef} required />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id='confirm-password' ref={passwordConfirmRef} required />
                <button disabled={loading} type='submit'>Sign Up</button>
                <p>Already have an account? <Link to='/login'>Log In</Link></p>
            </form>
    )
}

export default SignUp
