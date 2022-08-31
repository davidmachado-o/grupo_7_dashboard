import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("http://localhost:3000/api/products/");
      const data = await response.json();
      setProduct(data.data[id]);
    }
    fetchProduct();
  }, []);

  return (
    <>
      <h5>Editar producto</h5>

      <h4>Nombre: {product.name}</h4>
      <p>Descripción: {product.description}</p>
      <p>{product.price}</p>
      <p>Categoria: {product.category_id}</p>
      <p>
        Agregado:{" "}
        {new Date(product.created_date).toLocaleDateString("es-AR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </>
  );
}

export default EditProduct;
