import React, { useState, useRef }from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../AuthContext/AuthContext';
import './UpdateProfile.css';


function UpdateProfile() {

    const {currentUser, updateEmail, updatePassword} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


     function handleUpdate(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        const promises = [];
        setLoading(true);
        setError('');
            
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failde to Update')
        }).finally(() => {
            setLoading(false)
        })

    }



    return (
            <form onSubmit={handleUpdate} className='signup-form'>
                  <h2>Update Profile</h2>
                  {error &&  <p className='error-alert'>{error}</p>}
                <label htmlFor="email">Email</label>
                <input type="text" id='email' ref={emailRef} required defaultValue={currentUser.email} />
                <label htmlFor="password">Password</label>
                <input type="password" id='password' ref={passwordRef} placeholder='leave blank to keep the same'  />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id='confirm-password' ref={passwordConfirmRef} placeholder='leave blank to keep the same'  />
                <button disabled={loading} type='submit'>Update</button>
                <p><Link to='/login'>Cancel</Link></p>
            </form>
    )
}

export default UpdateProfile
