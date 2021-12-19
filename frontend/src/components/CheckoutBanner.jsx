import React from "react";
import { Link } from "react-router-dom";

import classes from "./CheckoutBanner.module.css";

const CheckoutBanner = () => {
  return (
    <section
      className={classes.checkoutBannerSection}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/checkout_bg.png"
        })`,
      }}
    >
      <div className={`${classes.checkoutBannerWrapper} container`}>
        <div className={classes.checkoutBannerContent}>
          <div>
            <h1>Checkout</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutBanner;
