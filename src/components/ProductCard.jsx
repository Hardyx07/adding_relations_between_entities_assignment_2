import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
      
      {/* Rating Stars */}
      <div className="rating-widget">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className="star"
            onClick={() => onRatingSubmit(product.id, star)}
          >
            ⭐
          </span>
        ))}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
