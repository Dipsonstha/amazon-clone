import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}

          <Product
            title="The lean muscle"
            price={233}
            rating={3}
            image="https://m.media-amazon.com/images/I/913KWawg9gL._AC_SY200_.jpg"
          />
          <Product
            title="CG TV '46inc'"
            price={303.98}
            rating={4}
            image="https://prismplus.sg/cdn/shop/files/Q55-QEa_800x.jpg?v=1682525755"
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            title="Samsung LC4523 Curved Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={33}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXf9g1JMeF3x8j9iekTkHE4TvHt43attKZIA&usqp=CAU"
          />
          <Product
            title="Super Keyboard"
            price={23.98}
            rating={2}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOgzeQEimT2OUm631vJZQGAka-pbF-HYIBA&usqp=CAU"
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            title="WorkPro® 12000 Series Ergonomic Mesh/Fabric Mid-Back Chair, Black/Black, BIFMA Compliant"
            price={599}
            rating={4}
            image="https://m.media-amazon.com/images/I/718tz13018L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
