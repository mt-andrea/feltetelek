import React from 'react'

function Login(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {!props.reg && <input type='password' placeholder='Confirm' />}
            <button type="submit">{props.reg ? "Login" : "Register"}</button>
        </form>
    )
}

export default Login