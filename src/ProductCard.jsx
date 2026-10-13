import { useState } from "react";

function ProductCard({ name, price, image }) {
  const [count, setCount] = useState(0);

  function handleAddToCart() {
    setCount(count + 1);
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price} ₽</p>

      <button className="product-button" onClick={handleAddToCart}>
        Добавить в корзину
      </button>

      <p className="product-count">В корзине: {count} шт.</p>
    </div>
  );
}

export default ProductCard;