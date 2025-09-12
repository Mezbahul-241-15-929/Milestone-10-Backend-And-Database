import React, { use } from 'react';
const userPromise= fetch('http://localhost:3000/users').then(res=>res.json());

const Users = ({userPromise}) => {


    const handleAddUser =e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const user={name,email};
        console.log(user);
        
    }

    const users= use(userPromise);
    console.log(users)
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text"  name='name' placeholder='Name'/>
                <br />
                <input type="email"  name='email' placeholder='Email'/>
                <br />
                <input type="submit" value="Add User" />
            </form>

            <div>
                {
                    users.map(user=> <p key={user.id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;