import React from 'react';

const Register = () => {
    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Signup now!</h1>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Signup</button>
                </fieldset>
            </div> 
            </div>
            );
};

            export default Register;