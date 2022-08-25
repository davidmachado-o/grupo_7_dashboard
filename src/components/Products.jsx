import { useEffect, useState } from "react";

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
      <p>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price_current}
            <p>{product.description}</p>
          </li>
        ))}
      </p>
    </div>
  );
}

export default Products;