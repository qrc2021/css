import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import LoginPage from '../pages/LoginPage';

function Register()
{
    var rFirstName; // input field persistence
    var rLastName, rEmail, rPassword, rPasswordVerify, rUnit;
    let navigate = useNavigate();

    const [message, setMessage] = useState('');

    
    const register = async (event) =>
    {
        event.preventDefault();

        alert('doIt()' + rFirstName.value + ' ' + rPassword.value);
    };

    // Go back to login page
    const back = () => 
    {
        let path = '/';
        navigate(path);
    }


    return(
        <div id="registerDiv">
            <form onSubmit={register}>
                <span id="registerResult">{message}</span><br />
                <input type="text" id="rFirstName" placeholder="First Name" ref={(c) => rFirstName = c}/><br />
                <input type="text" id="rLastName" placeholder="Last Name" ref={(c) => rLastName = c}/><br />
                <input type="text" id="rEmail" placeholder="Email" ref={(c) => rEmail = c}/><br />
                <input type="text" id="rUnit" placeholder="CSS Serial Number" ref={(c) => rUnit = c}/><br />
                <input type="password" id="rPassword" placeholder="Password" ref={(c) => rPassword = c}/><br />
                <input type="password" id="rPasswordVerify" placeholder="Verify Password" ref={(c) => rPasswordVerify = c}/><br />
                <input type="submit" id="registerButton" class="buttons" value = "Register" onClick={register} />
            </form>
            <Button onClick={back}>Back</Button>
            <span id="registerResult"></span>
        </div>
    );
};

export default Register;