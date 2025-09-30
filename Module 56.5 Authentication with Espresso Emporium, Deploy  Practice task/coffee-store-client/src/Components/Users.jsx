import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const initialUsers= useLoaderData();
    return (
        <div>
            <h2>Users: {initialUsers.length}</h2>
        </div>
    );
};

export default Users;