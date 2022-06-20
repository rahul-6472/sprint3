import React from "react";
import ProductItem from "ProductItem"
const Products = () => {


  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, [products]);


  return (

    <div>
          <ProductItem  products = {products}/>
    </div>
  )
};

export default Products;
