import React, {useState} from 'react';

function Login()
{
    var loginName; // input field persistence
    var loginPassword; 
    const [message, setMessage] = useState('');

    const doLogin = async event =>
    {
        event.preventDefault();

        alert('doIt()' + loginName.value + ' ' + loginPassword.value);
    };

    return(
        <div id="loginDiv">
            <form onSubmit={doLogin}>
                <span id="loginResult">{message}</span><br />
                <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}/><br />
                <input type="text" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c}/><br />
                <input type="submit" id="loginButton" class="buttons" value = "Do it" onClick={doLogin} />
            </form>
            <span id="loginResult"></span>
        </div>
    );
};

export default Login;