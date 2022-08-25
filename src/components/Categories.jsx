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
      <h1>Total de categorias: </h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Total de productos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mouse</td>
            <td>
              {
                products.filter((product) => product.category_id === "Mouse")
                  .length
              }
            </td>
          </tr>
          <tr>
            <td>Teclado</td>
            <td>
              {
                products.filter((product) => product.category_id === "Teclado")
                  .length
              }
            </td>
          </tr>
          <tr>
            <td>Monitor</td>
            <td>
              {
                products.filter((product) => product.category_id === "Monitor")
                  .length
              }
            </td>
          </tr>
          <tr>
            <td>Silla</td>
            <td>
              {
                products.filter((product) => product.category_id === "Silla")
                  .length
              }
            </td>
          </tr>
          <tr>
            <td>Procesador</td>
            <td>
              {
                products.filter(
                  (product) => product.category_id === "Procesador"
                ).length
              }
            </td>
          </tr>
          <tr>
            <td>Combo</td>
            <td>
              {
                products.filter((product) => product.category_id === "Combo")
                  .length
              }
            </td>
          </tr>
        </tbody>
      </Table>

      {/* {products.filter((product) => product.category_id === "Mouse") ? (
        <h1>
          Mouse:{" "}
          {products.filter((product) => product.category_id === "Mouse").length}
        </h1>
      ) : (
        <h1>No hay productos</h1>
      )}

      {products.filter((product) => product.category_id === "Teclado") ? (
        <h1>
          Teclado:{" "}
          {
            products.filter((product) => product.category_id === "Teclado")
              .length
          }
        </h1>
      ) : (
        <h1>No hay productos</h1>
      )}

      {products.filter((product) => product.category_id === "Monitor") ? (
        <h1>
          Monitor:{" "}
          {
            products.filter((product) => product.category_id === "Monitor")
              .length
          }
        </h1>
      ) : (
        <h1>No hay productos</h1>
      )}

      {products.filter((product) => product.category_id === "Silla") ? (
        <h1>
          Silla:{" "}
          {products.filter((product) => product.category_id === "Silla").length}
        </h1>
      ) : (
        <h1>No hay productos</h1>
      )}

      {products.filter((product) => product.category_id === "Procesador") ? (
        <h1>
          Procesador:{" "}
          {
            products.filter((product) => product.category_id === "Procesador")
              .length
          }
        </h1>
      ) : (
        <h1>No hay productos</h1>
      )}

      {products.filter((product) => product.category_id === "Combo") ? (
        <h1>
          Combo:{" "}
          {products.filter((product) => product.category_id === "Combo").length}
        </h1>
      ) : (
        <h1>No hay productos</h1>
      )} */}
    </div>
  );
}

export default Categories;
