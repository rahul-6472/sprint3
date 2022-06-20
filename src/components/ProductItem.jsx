import React from "react";
import { CartContext } from "../context/CartContext";
const ProductItem = ({products}) => {

  const { handleCartCount } = React.useContext(CartContext);
  return (
<>

    {
      products.map((product)=> (
      
      <div key = {product.id}>
        
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>

       <button onClick = {handleAddToCart}>Add</button>
       <button onClick = {handleDelete}>Delete</button>
       <button onClick = {() => handleCartCount(1)}>update count</button>
      
      </div>))
    }
 </>
  )



};

export default ProductItem;
