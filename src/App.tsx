import "./App.css";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <div className="product-container">
      <ProductCard
        title="Торт ежик Premium"
        origin="Россия"
        price={34900}
        currency="USD"
        imageUrl="https://i.pinimg.com/736x/ff/da/d6/ffdad6f7c4d22c1fe38cf19190aa3040.jpg"
      />
      <ProductCard
        title="Торт ежик"
        origin="Россия"
        price={99900}
        currency="RUB"
        imageUrl="https://www.povarenok.ru/data/cache/2016feb/19/25/1457541_35082thumb500.jpg"
      />
      <ProductCard
        title="Торт единорог"
        origin="Россия"
        price={10000}
        currency="EUR"
        imageUrl="https://i.pinimg.com/736x/93/87/c8/9387c8c9ef2d1239c74a56ce2795227f.jpg"
      />
      <ProductCard
        title="Торт единорог"
        origin="Россия"
        price={10900}
        currency="RUB"
        imageUrl="https://i.pinimg.com/736x/f7/26/61/f72661eb612cf260abd651917062136c.jpg"
      />
    </div>
  );
}

export default App;
