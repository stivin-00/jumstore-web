import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card product-card col-sm-6 col-xs-4">
      <Link to={`/product/${product._id}`}>
        <img className="mediu" src={product.image.url} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name.substring(0,15)}...</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">₦{product.price}</div>

        </div>
      </div>
    </div>
  );
}
