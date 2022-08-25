import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

function Categories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data.data);
    }
    fetchProducts();
  }, []);
  return (
    <div className="container mt-5">
      <h1>Categorias</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre de la categoria</th>
            <th>#</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.category_id}</td>
              <td>{product.id}</td>
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

export default Categories;
