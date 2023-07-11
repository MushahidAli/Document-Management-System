import { useState, useRef } from 'react'
import axios from 'axios'
import { domain } from '../Api_Endpoint/Util'
import passwordToggle from '../../assets/images/passwordToggle.png'
import './Login.css'

export default function Login() {

    setInterval(() => {
        var logVerify = localStorage.getItem("loginSession");
        if(!logVerify) {}
        else {
            window.location = "";
        }
    },5000);

    const email = useRef();
    const password = useRef();
    var auth;
    const [messageForLogin, setMessageForLogin] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        await axios.get(domain + `sign_in/${email.current.value.toLowerCase()}/${password.current.value}`)
            .then(res => auth = res.data.auth)
        if (auth == "success") {
            localStorage.removeItem("loginSession");
            localStorage.setItem("loginSession", btoa(email.current.value.toLowerCase()));
            window.location = "";
        }
        else {
            localStorage.removeItem("loginSession");
            setMessageForLogin("Invalid Email or Password. Please Try again.");
        }
    }

    function toggleCheck() {
        if (password.current.type === "password") {
            password.current.type = "text";
        } else {
            password.current.type = "password";
        }
    }

    return (<div className='mainLogin'>
        <div className='loginCard'>
            <h3>Document<br />Management System</h3><br />
            <h4 className='d-flex justify-content-between'>
                <div>Login</div>
                <div><a className='text-decoration-none' href="">Forgot password?</a></div>
            </h4><br />
            <form onSubmit={handleSubmit}>
                <input ref={email} type="email" placeholder='  Enter User ID' required /><br /><br />
                <input style={{ position: 'relative' }} ref={password} id="password" type="password" placeholder='  Enter Password' required />
                <img onClick={toggleCheck} style={{ position: 'absolute', left: '82%', mixBlendMode: 'darken' }} width={40} height={40} src={passwordToggle} /><br /><br /><br />
                <button>Login</button><br /><br />
            </form>
            <span>Don't have an account?</span> <a className='text-decoration-none' href="">Create Account</a><br />
            <div className='authFail'>{messageForLogin}</div>
        </div>
    </div>);
}
