import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../features/inventory/inventorySlice";
import UpdateProduct from "./UpdateProduct";

const ProductList = () => {
  const products = useSelector((state) => state.inventory.products);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity} unités - ${product.price}
            <button onClick={() => handleEdit(product)}>Modifier</button>
            <button onClick={() => handleDelete(product.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <UpdateProduct product={selectedProduct} closePopup={closePopup} />
      )}
    </div>
  );
};

export default ProductList;
