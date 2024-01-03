import React from "react";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Deals/DealMoment/WinterSale/LandingPage/DEALS23_WinterSale46_LandingPage_Header_PostHoliday_DT_1500x125.jpg"
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
