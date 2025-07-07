import { Link, useLoaderData } from 'react-router-dom'
function Users() {
    const users = useLoaderData()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const usersData = { name, email };
        console.log(usersData);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('User data', data)
            })
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required /> <br /><br />
                <input type="email" name="email" placeholder="Email" required /> <br /><br />
                <input type="submit" value="Add" /> <br /><br />
            </form>
            <Link to='/user'>
                <button>View Users</button>
            </Link>
        </div>

    )
}

export default Users