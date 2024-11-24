import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" required />
                <br />
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
                <br />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" required />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;

