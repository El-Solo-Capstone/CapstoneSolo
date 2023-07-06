import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ LoggedIn, UserLoggedIn }) => {
    console.log(LoggedIn)
    return (
        <div>
            {LoggedIn ? (
                <>
                <Link to ='/'> Home </Link>
                <button
                    onClick = {() => {
                        UserLoggedIn(false);
                        localStorage.removeItem('token');
                    }}> Logout </button>
                </>
            ) : (
                <>
                    <nav>
                        <Link to ='/'> Home </Link>
                        <Link to ='/register'> Register </Link>
                        <Link to ='/login'> Log In </Link>
                        <Link to ='/posts'> Parts </Link>
                    </nav>
                </>
            )}
        </div>
    )
}

export default Nav;