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
        <div>Último producto creado</div>
        </>
    );
    }

export default LastProductCreated