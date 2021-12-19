import React from "react";
import { Link } from "react-router-dom";

import classes from "./ShoppingCartBanner.module.css";

const ShoppingCartBanner = () => {
  return (
    <section className={classes.shoppingCartBannerSection} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/shopping_cart_bg.png"})` }}>
      <div className={`${classes.shoppingCartBannerWrapper} container`}>
        <div className={classes.shoppingCartBannerContent}>
          <div>
            <h1>Shopping Cart</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartBanner;
