import React, { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState({
        userName : "",
        password : "",
    });

    const inputEvent = (ev) => {
        const {name, value} = ev.target;

        setUser((preval) => {
            return {
                ...preval,
                [name] : value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();

        
        
        fetch('http://127.0.0.1:8000/user',{
            method : 'GET',
            headers : {'Content-type':'application/json'},
            body :JSON.stringify(e.target.value)
        }).then(
            data => {
                console.log(data);
            }
        ).catch( error => console.error(error))
    };

    return (
        <>
        <div className="">
            <div className="row mt-5 headline">
                <div className="col-md 4"></div>
                <div className="col-md 4">
                    <h2>Loan Management System</h2>
                </div>
                <div className="col-md 4"></div>
            </div>
            
            <div className = "row">
                <div className="col-md-4"></div>
                <div className="col-md-4 shadow-lg p-5 mb-5 bg-white rounded center-screen">
                    <h1 className="loginHeader">Login</h1>
                    <hr />
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">User ID</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            name="userName"
                            value={user.userName}
                            onChange = {inputEvent}
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" 
                            name="password"
                            value={user.password}
                            onChange = {inputEvent}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember me </label>
                        </div>
                        <button type="submit" className="btn btn_login">Login</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
                
            </div>
        </div>
        </>
    );
};

export default Login;