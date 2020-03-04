import React, { useState } from 'react';
import style from './SignInPage.module.css';

function SignInPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    const onSubmit = event => {
        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail(email)
                setPassword(password)
                console.log(email, password, 'dobrze zalogowałes')
                props.history.push("/");
                debugger
            })
            .catch(error => {
                setError(error);
            });
        event.preventDefault();
    };

    const isInvalid = password === '' || email === '';
    return (
        <div>
            <form>
                <div className={style.loginLabel}>
                    <label>Login</label>
                    <input
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="text"
                        placeholder="Email Address"
                    ></input>
                </div>
                <div className={style.loginLabel}>
                    <label>Hasło</label>
                    <input
                        name="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"></input>
                </div>
                <div className={style.submit}>
                    <button disabled={isInvalid} type="submit" onClick={() => {
                        onSubmit()
                        }}>
                        Zaloguj
                    </button>

                </div>
                {error && <p>{error.message}</p>}
            </form>

        </div>
    )
}

export default SignInPage
