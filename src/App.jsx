import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Тактический рюкзак 45Л",
      price: 8900,
      image: "zaglushka",
    },
    {
      id: 2,
      name: "Разгрузочный жилет",
      price: 12500,
      image: "zaglushka",
    },
    {
      id: 3,
      name: "Тактические очки",
      price: 3400,
      image: "zaglushka",
    },
  ];

  return (
    <div className="app">
      <h1>Самый лучший магазин</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;