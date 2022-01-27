import React from 'react';

function Product() {
  return <div className='product'>
            <div className='product__info'>
                <p>The Lean Startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.29</strong>
                </p>
                <div className='product__rating'>
                    <p>⭐️⭐️⭐️⭐️</p>
                </div>
            </div>
  </div>;
}

export default Product;
