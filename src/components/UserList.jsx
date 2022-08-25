import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3000/api/users/users");
      const data = await response.json();
      setUsers(data.data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Users</h1>
      <p>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </p>
    </div>
  );
}

export default UserList;
