import React, { useState } from 'react';
import signin from '../style/signin.module.css'

const SignUp = () => {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    return (
        <div className={signin.signin}>
            <div className={signin.title}>
                <h1>Not TikTok</h1>
            </div>
            <div className={signin.wrapper}>
                <div className={signin.input_box}>
                    <div className={signin.input_item}>
                        <p>Login</p>
                        <input onInput={(e:any) => { setLogin(e.target.value) }} value={ login } type="text" />
                    </div>

                    <div className={signin.input_item}>
                        <p>Password</p>
                        <input onInput={(e:any) => { setPassword(e.target.value) }} value={ password } type="password" />
                    </div>

                    <div className={signin.forgot}>
                        <a href="">Forgot your login or password?</a>
                    </div>

                    <p className={signin.possible_error}>
                    </p>

                    <div className={signin.action_btns}>
                        <button>Sign In</button>
                        <button>Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;