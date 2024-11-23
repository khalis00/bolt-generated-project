import { useState, useEffect } from 'react'

    export default function UserManagement() {
      const [users, setUsers] = useState([])
      const [name, setName] = useState('')
      const [age, setAge] = useState('')
      const [details, setDetails] = useState('')

      useEffect(() => {
        fetch('/api/users')
          .then(response => response.json())
          .then(data => setUsers(data))
      }, [])

      const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, age, details }),
        })
        const data = await res.json()
        setUsers([...users, data])
        setName('')
        setAge('')
        setDetails('')
      }

      return (
        <div>
          <h1>User Management</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              required
            />
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Details"
              required
            ></textarea>
            <button type="submit">Add User</button>
          </form>
          <ul>
            {users.map(user => (
              <li key={user._id}>{user.name} - {user.age}</li>
            ))}
          </ul>
        </div>
      )
    }
