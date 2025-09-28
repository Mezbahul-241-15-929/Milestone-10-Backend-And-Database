import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

    const handleSignUp =(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const email=formData.get('email');
        const password=formData.get('password');

        console.log(email,password);

        //create user in the firebase
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .then(error=>{
            console.log(error)
        })

    }

    const {createUser}=use(AuthContext);
    console.log(createUser);

    
    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Signup now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Signup</button>
                </form>
            </div> 
            </div>
            );
};

            export default Register;