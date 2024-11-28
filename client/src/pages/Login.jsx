import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(email, password);
        navigate("/dashboard");
    };

    return (
        <section className="login">
            <div className="container">
                <h2>Sign In</h2>
                <form action="" className="form login_form" onSubmit={formSubmitHandler}>
                    <p className="form_error-message">This is an error Message!</p>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button type="submit" className="btn primary">
                        Login
                    </button>
                </form>
                <small>
                    Don't have an account? <Link to="/register">Register</Link>
                </small>
            </div>
        </section>
    );
};

export default Login;
