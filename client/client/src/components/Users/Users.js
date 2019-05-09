import React, { useState, useEffect } from 'react'
import auth from '../../auth'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        auth()
            .get('http://localhost:5000/api/users')
            .then(res => {
                setUsers(res.data.users)
            })
    }, [])

    return (
        <div className='Users'>
            {
                users.length > 0 &&
                <ul>
                    {users.map((user, id) => (
                        <li key={id}>{user.username}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Users
