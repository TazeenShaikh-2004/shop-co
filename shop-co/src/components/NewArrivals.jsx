import React, { useState, useEffect } from "react";

function NewArrivals() {
  const [products, setProducts] = useState([]);

  async function getproducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setProducts(data.products);
  }
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">New Arrivals</h1>
      <div>
        {products.map((product) => {
          return (
            <div>
              <img src="{product.thumbnail}" alt="{product.title}" />
              <p>{product.title}</p>
              <p>{product.rating}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrivals;
