import React, { useState, useContext } from 'react';
import style from './SignInPage.module.css';
import { FirebaseContext } from '../components/Firebase';
import PasswordForget from './PasswordForget';


function SignInPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)
    const firebase = useContext(FirebaseContext)

    const onSubmit = event => {
        event.preventDefault();
        firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail(email)
                setPassword(password)
                props.history.push("/");
            })
            .catch(error => {
                setError(error);
            });

    };

    const isInvalid = password === '' || email === '';
    return (
        <div>
            <form>
                <div className={style.loginLabel}>
                    <label className={style.label}>E-mail</label>
                    <input
                    className={style.input}
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type="text"
                        placeholder="grazyna@gmail.com"
                    ></input>
                </div>
                <div className={style.loginLabel}>
                    <label className={style.label}>Hasło</label>
                    <input
                    className={style.input}
                        name="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        placeholder="******"></input>
                </div>
                <div >
                    <button className={style.submit} disabled={isInvalid} onClick={(e) => {
                        onSubmit(e)
                    }}>
                        Zaloguj
                    </button>

                </div>
                {error && <p>{error.message}</p>}
            </form>
            <PasswordForget />

        </div>
    )
}

export default SignInPage
