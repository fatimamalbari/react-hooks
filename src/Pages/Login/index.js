import React, { useState } from "react";
import styles from './login.module.css';
import { loginUser, useAuthState, useAuthDispatch } from '../../context';
// email: nero@admin.com
// password: admin123

const Login = (props) => {
  const dispatch = useAuthDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, errorMessage } = useAuthState()

  const handleLogin = async (e) => {
    e.preventDefault();
    // let payload = { name, email }
    try {
      let response = await loginUser(dispatch, { email, password })
      if (!response.user)
        return
      props.history.push('/dashboard')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login Page</h1>
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor='email'>Username</label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleLogin} disabled={loading} >login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;