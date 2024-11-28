import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(email, password);
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="user-id">User ID</label>
                    <input type="text" placeholder="Enter user ID" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Link to={"/dashboard"}>Login</Link>
            </form>
        </div>
    );
};

export default Login;
