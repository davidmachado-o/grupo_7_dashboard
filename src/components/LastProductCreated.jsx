import { useEffect, useState } from "react";

function LastProductCreated() {
    const [lastCreated, setLastCreated] = useState([]);
  
    useEffect(() => {
      async function fetchProducts() {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setLastCreated(data.data);
      }
      fetchProducts();
    }, []);
  
    return (
        <>
        <h2>Último producto creado</h2>
        <ul>
            {lastCreated.filter((product, index) => index === lastCreated.length - 1).map((product) => (
                <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>Agregado: {
                        new Date(product.created_date).toLocaleDateString("es-AR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })
                    }</p>
                </li>

            ))}
        </ul>

        </>
    );
    }

export default LastProductCreated