import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import classes from "./HomeBanner.module.css";
// rgba(41, 40, 40, 0.44);

const HomeBanner = () => {
  return (
    <section
      className={classes.homeBannerSection}
      style={{
        backgroundImage: `linear-gradient(rgba(41, 40, 40, 0.44), rgba(41, 40, 40, 0.44)), linear-gradient(rgba(41, 40, 40, 0.44), rgba(41, 40, 40, 0.44)),
    url(${process.env.PUBLIC_URL + "/images/home_banner_bg1.png"}), url(${process.env.PUBLIC_URL + "/images/home_banner_bg2.png"})`,
      }}
    >
      <div className={`${classes.homeBannerWrapper} container`}>
        <div className={classes.homeBannerContent}>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, natus!</p>
        <button className={`btn ${classes.shopBtn}`}>Shop now</button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
