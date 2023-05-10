import React from 'react'
import { useRouter } from 'next/router'

export default function Users({ usersList }) {
  const { push } = useRouter()

  const users = [
    { id: 1, name: 'Marcelo', age: 35 },
    { id: 2, name: 'João', age: 30 },
    { id: 3, name: 'Marcos', age: 21 }
  ]

  const handleEdituser = (id: number) => {
    push(`/users/${id}`)
  }

  return (
    <>
      <h2>Users Home</h2>

      {usersList.map((user) => (
        <div
          key={user.id}
          onClick={() => handleEdituser(user.id)}
          style={{
            margin: 20,
            fontSize: 20,
            border: '1px solid black',
            padding: 5,
            borderRadius: 8
          }}
        >
          <p>Id: {user.id}</p>
          <p>Name: {user.title}</p>
        </div>
      ))}
    </>
  )
}
