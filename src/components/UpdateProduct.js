import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/inventory/inventorySlice";

const UpdateProduct = ({ product, closePopup }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Modifier le produit</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={updatedProduct.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantité"
            value={updatedProduct.quantity}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Prix"
            value={updatedProduct.price}
            onChange={handleChange}
          />
          <button type="submit">Mettre à jour</button>
          <button type="button" onClick={closePopup}>
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
