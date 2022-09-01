import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

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
    // <div className="container mt-5">
    //   <h1>Users</h1>
    //   <p>
    //     {users.map((user) => (
    //       <li key={user.id}>
    //         {user.name} - {user.email}
    //       </li>
    //     ))}
    //   </p>
    // </div>
    <div className="container mt-5">
      <h1>Total de usuarios: {users.length}</h1>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del usuario</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="primary">Editar</Button>
              </td>
              <td>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
