import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
  return <div className="home">
      <div className="home__container">
          <img className="home_image" src="https://m.media-amazon.com/images/I/81RoKL-XM-L._SX3000_.jpg"/>

          <div className="home__row">
            <Product 
            id="12321341"
            title="The new Amazon Alexa"
            price={3500}
            image="https://www.wordstream.com/wp-content/uploads/2021/07/amazon-seo-product-images.jpg"
            rating={5}
            />
            <Product 
            id="12321334"
            title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Silver Stainless Steel Case with White Sport Band"
            price={32456}
            image="https://m.media-amazon.com/images/I/71-bXTSDkpL._SL1500_.jpg"
            rating={5}
            />
          </div>
          <div className="home__row">
            <Product 
            id="12321356"
            title="Apple iPhone 12 (128GB) - (Product) RED"
            price={59999}
            image="https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg"
            rating={4}
            />
            <Product 
            id="12321390"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) 		- Space Grey"
            price={120000}
            image="https://m.media-amazon.com/images/I/81jMsojO7vL._SL1500_.jpg"
            rating={5}
            />
            <Product 
            id="12321376"
            title="Sunon Height Adjustable 48 x 24 Inches Electric Lift Standing Desk Computer Table with Dual Motors and Memory Preset Controller, White/White Frame"
            price={29000}
            image="https://m.media-amazon.com/images/I/51MMbMJ0U7L._SL1200_.jpg"
            rating={3}
            />
          </div>
          <div className="home__row">
            <Product 
            id="12321367"
            title="Samsung 34 inch (86.4 cm) LED Curved Computer Monitor - Full HD, Super Slim,VA Panel,HDR 10 - LC34G55TWWWXXL (Black)"
            price={250000}
            image="https://m.media-amazon.com/images/I/71it2biogSS._SL1500_.jpg"
            rating={5}
            />
          </div>
      </div>
  </div>;
}

export default Home;