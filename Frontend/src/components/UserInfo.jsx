import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'

function UserInfo() {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);


  const handleDelete = (_id) => {
    console.log(_id)
    fetch(`http://localhost:5000/users/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount) {
          alert('successfully deleted');
          const remaining = users.filter(user => user._id !== _id);
          setUsers(remaining);
        }
      })
  }

  return (
    <div>
      <h2>information</h2>

      {
        data.map(singleUser => <li key={singleUser._id}> 
        {singleUser.name} : {singleUser.email} 
        <Link to={`/update/${singleUser._id}`}>
        <button >Update</button>
        </Link>
        <button onClick={() => handleDelete(singleUser._id)}>Delete</button> 
        </li>)
      }
    </div>
  )
}
export default UserInfo