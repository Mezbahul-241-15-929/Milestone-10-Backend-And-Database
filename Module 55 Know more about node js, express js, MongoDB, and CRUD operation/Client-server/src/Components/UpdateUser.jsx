import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user= useLoaderData();

        const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email }
        console.log(updatedUser);

    }
    
    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' defaultValue={user.name} />
                <br />
                <input type="email" name='email' defaultValue={user.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;