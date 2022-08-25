import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

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
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price_current}</td>
            </tr>
          ))}
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
