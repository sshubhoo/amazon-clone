import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
  return <div className="home">
      <div className="home__container">
          <img className="home_image" src="https://m.media-amazon.com/images/I/81RoKL-XM-L._SX3000_.jpg"/>

          <div className="home__row">
            <Product />
          </div>
          <div className="home__row">
            {/*Product*/}
            {/*Product*/}
            {/*Product*/}
          </div>
          <div className="home__row">
            {/*Product*/}
          </div>
      </div>
  </div>;
}

export default Home;