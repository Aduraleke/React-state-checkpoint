import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const GitHubUsers = () => {
    const styles = {
        style : {
            display: 'flex',
            gridTemplateColumns: 'repeat(4, 1fr)',

            
        }
    }
    const [usersData, setUsersData] = useState([]);
    const getUsers = async() => {
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
        setUsersData(users);
    }
    useEffect(() => {
        getUsers()
    }, []);

    console.log('fetched',usersData)
  return (
    <div> 
        <h1>Fetching GitHub Users</h1>
        <div style={styles.style}>
            <ul>
                {
                    usersData.map((user) => {
                        return <li key={user.id}>
                            <img src={user.avatar_url} 
                            alt={user.login} />{user.login}</li>
                    })
                }
            </ul>
        </div>

    </div>
    
  )
}

export default GitHubUsers