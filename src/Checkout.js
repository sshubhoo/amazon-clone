import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
{/*Imported npm i react-currecy-format*/}

function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();

  return <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/CorpGC/Banner_PC_without_Citi.jpg' alt=''/>
        <div>
            <h2 className='checkout__title'>
                Your Shopping Basket
            </h2>
            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
            <Subtotal />
      </div>
  </div>;
}

export default Checkout;
