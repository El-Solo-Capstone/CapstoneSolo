import React, { useState } from 'react'
import { registerUser } from '../../API/loginApi'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {
    const UserLoggedIn = props.UserLoggedIn
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const result = await registerUser(username, password)
            console.log(result)

            localStorage.setItem('token', result.token)
            UserLoggedIn(true)

            navigate('/')
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1> Register </h1>
            <form onSubmit = {handleSubmit}>
                <label>
                    Username:
                    <input
                        type='text'
                        value= {username}
                        onChange = {(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type='password'
                        value= {password}
                        onChange = {(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </label>

                <button type = 'submit'> Submit </button>

            </form>
        </div>
    )
}

export default Register;
