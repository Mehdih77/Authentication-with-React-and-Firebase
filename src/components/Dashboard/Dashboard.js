import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../../AuthContext/AuthContext';
import './Dashboard.css'

function Dashboard() {

    const [error, setError] = useState('')

    const {logout, currentUser} = useAuth();
    const history = useHistory();

    async function handleLogOut() {
        setError('');

        try {
            await logout();
            history.push('/login')
        } catch  {
            setError('Failed to log out');
        }
    }


    return (
        <>
        <div className='dashboard'>
                  <h2>Profile</h2>
                  {error &&  <p className='error-alert'>{error}</p>}
                <p className='dashboard-email'>Email: <span>{currentUser.email}</span></p>
                <button className='update-button'><Link to='/update-profile'>Update Profile</Link></button>
                <button className='logout-button' onClick={handleLogOut}>Log Out</button>
                </div>
                </>
    )
}


export default Dashboard
