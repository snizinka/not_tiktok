import React, { useState } from 'react';
import signin from '../style/signin.module.css'
import useUserActions from '../hooks/useUserActions';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { signUp } = useUserActions()

    return (
        <div className={signin.signin}>
            <div className={signin.title}>
                <h1>Not TikTok</h1>
            </div>
            <div className={signin.wrapper}>
                <div className={signin.input_box}>
                    <div className={signin.input_item}>
                        <p>Email</p>
                        <input onInput={(e: any) => { setEmail(e.target.value) }} value={email} type="text" />
                    </div>

                    <div className={signin.input_item}>
                        <p>Login</p>
                        <input onInput={(e: any) => { setLogin(e.target.value) }} value={login} type="text" />
                    </div>

                    <div className={signin.input_item}>
                        <p>Password</p>
                        <input onInput={(e: any) => { setPassword(e.target.value) }} value={password} type="password" />
                    </div>

                    <div className={signin.forgot}>
                        <a href="">Forgot your login or password?</a>
                    </div>

                    <p className={signin.possible_error}>
                    </p>

                    <div className={signin.action_btns}>
                        <button><Link to='/signin'>Sign In</Link></button>
                        <button onClick={() => signUp(email, login, password)}>Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;