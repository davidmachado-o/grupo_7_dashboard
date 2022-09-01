import { useEffect, useState } from "react";

function LastUserCreated() {
    const [lastCreated, setLastCreated] = useState([]);
  
    useEffect(() => {
      async function fetchUsers() {
        const response = await fetch("http://localhost:3000/api/users/users");
        const data = await response.json();
        setLastCreated(data.data);
      }
      fetchUsers();
    }, []);
  
    return (
        <>
        <h2>Último usuario creado</h2>
        <ul className= "list-group text-center">
            {lastCreated.filter((user, index) => index === lastCreated.length - 1).map((user) => (
                <li key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </li>

            ))}
        </ul>
        </>
    );
    }

export default LastUserCreated;