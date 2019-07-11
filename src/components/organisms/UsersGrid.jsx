import React from 'react'
import UserCard from '../molecules/UserCard'
import WithLoader from '../hoc/WithLoader'

const UserGrid = ({users}) => {
    return <div className='ed-grid m-grid-4'>
            {
                users.map(u => (
                    <UserCard 
                        key={u.id}
                        name={u.name}
                        username={u.username}
                        email={u.email}
                    />
                ))
            }
            </div>
}

export default WithLoader('users', UserGrid)