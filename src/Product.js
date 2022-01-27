import React from 'react';

function Product() {
  return <div className='product'>
            <div className='product__info'>
                <p>The New Amazon Alexa</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>100.29</strong>
                </p>
                <div className='product__rating'>
                    <p>⭐️⭐️⭐️⭐️</p>
                </div>
            </div>
        <img src='https://www.wordstream.com/wp-content/uploads/2021/07/amazon-seo-product-images.jpg' alt=''/>
        <button>Add to Basket</button>
  </div>;
}

export default Product;
