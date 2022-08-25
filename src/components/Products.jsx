import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Products() {
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
      <h1>Products</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del producto</th>
            <th>Descripcion</th>
            <th>Categoria</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category_id}</td>
              <td>{product.stock}</td>
              <td>
                <Button variant="success" disabled>
                  ${product.price_current}
                </Button>
              </td>
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

export default Products;
