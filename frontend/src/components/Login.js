import React from 'react';

function Login()
{
    const doLogin = async event =>
    {
        event.preventDefault();

        alert('doIt()');
    };

    return(
        <div id="loginDiv">
            <form onSubmit={doLogin}>
                <span id="inner-title">Login yo</span><br />
                <input type="text" id="loginName" placeholder="Username" /><br />
                <input type="text" id="loginPassword" placeholder="Password" /><br />
                <input type="submit" id="loginButton" class="buttons" value = "Do it" onClick={doLogin} />
            </form>
            <span id="loginResult"></span>
        </div>
    );
};

export default Login;