import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import LoginPage from '../pages/LoginPage';

function Forgot()
{
   var resetEmail;
    let navigate = useNavigate();

    const [message, setMessage] = useState('');

    // Reset password
    const reset = async (event) =>
    {
        event.preventDefault();

        alert('doIt()' + resetEmail.value);
    };

    // Go back to login page
    const back = () => 
    {
        let path = '/';
        navigate(path);
    }


    return(
        <div id="resetDiv">
            <form onSubmit={reset}>
                <span id="registerResult">{message}</span><br />
                <input type="text" id="resetEmail" placeholder="Email" ref={(c) => resetEmail = c}/><br />
                <input type="submit" id="resetButton" class="buttons" value = "Reset Password" onClick={reset} />
            </form>
            <Button onClick={back}>Back</Button>
            <span id="registerResult"></span>
        </div>
    );
};

export default Forgot;