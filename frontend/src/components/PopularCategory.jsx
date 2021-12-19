import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./PopularCategory.module.css";
import axios from "axios";

const PopularCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/unique")
      .then((response) => setCategory(response.data.unique))
      .then((error) => console.log(error));
  },[]);

  console.log(category.map((category) => console.log(category)));
  return (
    <section className={classes.popularCategorySection}>
      {/* <similarProduct category={category} /> */}
      <div className={`${classes.popularCategoryWrapper} container`}>
        <h3>Popular Categories</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          ullam voluptates eius voluptatem omnis reprehenderit iure consequuntur
          at. Hic vel maxime eos.
        </p>
        <div className={classes.popularCategoryContent}>
          {category?.map((unique) => (
            <Link key={unique} to={`/category/${unique}`}>
              <img src="/images/popular_category1.png" alt="Popular Category" />
              <h4>{unique}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
