import React from 'react';
import './product.css'; // Создадим этот файл для стилей

interface ProductCardProps {
  title: string;
  origin: string;
  price: number; // цена в копейках/центах
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  const formatPrice = (price: number, currency: string) => {
    const divisor = currency === 'RUB' ? 100 : 1;
    const majorUnits = price / divisor;

    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'RUB' ? 2 : 0,
      maximumFractionDigits: currency === 'RUB' ? 2 : 0,
    }).format(majorUnits);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-origin">Страна: {origin}</p>
        <p className="product-price">{formatPrice(price, currency)}</p>
      </div>
    </div>
  );
};

export default ProductCard;