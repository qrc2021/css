import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Button,  } from 'react-bootstrap';
function Login()
{
    var loginName; // input field persistence
    var loginPassword; 
    let navigate = useNavigate();
    const [message, setMessage] = useState('');

    // Go to register page
    const goRegister = () => 
    {
        let path = '/register';
        navigate(path);
    }
    
    // Login
    const doLogin = async (event) =>
    {
        event.preventDefault();

        alert('doIt()' + loginName.value + ' ' + loginPassword.value);
    };

    // Go to register page
    const forgotPassword = () => 
    {
        let path = '/forgot';
        navigate(path);
    }

    return(
        <div id="loginDiv">
            <form onSubmit={doLogin}>
                <span id="loginResult">{message}</span><br />
                <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}/><br />
                <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c}/><br />
                <p onClick={forgotPassword}>Forgot Password?</p>
                <input type="submit" id="loginButton" class="buttons" value = "Do it" onClick={doLogin} />
            </form>
            <Button onClick={goRegister}>Register</Button>
            <span id="loginResult"></span>
        </div>
    );
};

export default Login;