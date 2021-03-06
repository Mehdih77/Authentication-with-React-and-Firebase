import React, { useState, useRef }from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from '../../AuthContext/AuthContext';
import './ForgotPassword.css';


function ForgotPassword() {

    const {resetPassword} = useAuth();
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false);

    async function handleForgotPassword(e) {
        e.preventDefault();
        try {
            setMessage("")
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check Your Inbox")
        } catch  {
            setError('Failed to reset password');
        }
        setLoading(false);

    }



    return (
        <>
                  <div className='forgot-password'>
                  <h2>Reset Password</h2>
                  {error &&  <p className='error-alert'>{error}</p>}
                  {message &&  <p className='message-alert'>{message}</p>}
                <div className='forgot-password-input'>
                <label htmlFor="email">Email</label>
                <input autoComplete='off' type="text" id='email' ref={emailRef} required />
                </div>
                <button disabled={loading} onClick={handleForgotPassword} >Reset Password</button>
                <Link to='/login'>Log In</Link>
                  </div>
                </>
    )
}

export default ForgotPassword
