import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Update() {
  const loadedData = useLoaderData();
  const handleupdate = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const usersData = { name, email };
    console.log('update info', usersData);

    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(usersData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          alert('successfully updated')
        }
      })
  }
  return (
    <div>
      <h2>update</h2>

      <form onSubmit={handleupdate}>
        <input type="text" defaultValue={loadedData.name} name="name" id="" /> <br /> <br />
        <input type="email" defaultValue={loadedData.email} name="email" id="" /> <br /> <br />
        <input type="submit" value="add" />
      </form>
    </div>
  )
}

export default Update