import React, { useState } from 'react';
import style from './SignInPage.module.css'

function SignInPage() {
    const [alreadySignedIn, setAlreadySignedIn] = useState(true)


    return (
        <div>
            <form>
                <div className={style.loginLabel}>
                    <label>Login</label>
                    <input type="name"></input>
                </div>
                <div className={style.loginLabel}>
                    <label>Hasło</label>
                    <input type="password"></input>
                </div>
                <div className={style.submit}>
                    <button>Zaloguj</button>
                </div>

            </form>

        </div>
    )
}

export default SignInPage
