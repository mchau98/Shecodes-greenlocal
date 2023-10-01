import './index.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleLogin = () => {
        if (email && password) {
          setLoggedIn(true);
        }
      };
    
      const handleLogout = () => {
        setLoggedIn(false);
      };
    return (
        <div>
            {loggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
        </div>
    )
}

export default Login




 

