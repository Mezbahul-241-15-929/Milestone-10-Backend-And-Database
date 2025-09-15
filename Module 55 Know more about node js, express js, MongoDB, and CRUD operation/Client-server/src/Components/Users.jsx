import React, { use, useState } from 'react';

const Users = ({ usersPromise }) => {


    const initailUser = use(usersPromise);
    console.log(initailUser);

    const [users, setUsers] = useState(initailUser);


    const handleAddUsr = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };
        console.log(newUser);

        //create user in the db
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log("data after creating user in the db", data);
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers);
                    alert('user added successfully');
                    e.target.reset();
                }
            })
    }

        const handleUserDelete= (id)=>{
            console.log('deleted user',id);
            fetch(`http://localhost:3000/users/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('after delete',data);
            })
        }



    return (
        <div>
            {/* add user */}
            <div>
                <form onSubmit={handleAddUsr}>
                    <input type="text" name='name' />
                    <br />
                    <input type="email" name='email' />
                    <br />
                    <input type="submit" value="Add User" />
                </form>
            </div>

            {/* View users */}
            <div>
                {
                    users.map(user =>
                        <p
                            key={user._id}>
                            {user.name}:{user.email}
                            <button onClick={()=> handleUserDelete(user._id)}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;