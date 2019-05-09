import React from 'react'

import { useForm } from 'customHooks'

const Login = props => {
    const { fields, handleChanges } = useForm()

    return (
        <div className='Login'>
            <div>
                <h2>Log In</h2>
                <div>
                    <input name='username' value={fields.username} onChange={handleChanges} type="text" />
                    <input name='password' value={fields.password} onChange={handleChanges} type="password" />
                    <button onClick={() => props.login(fields)}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Login
