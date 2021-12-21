import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {useDispatch,useSelector} from 'react-redux'
// import {listProducts} from '../actions/productsAction'
import axios from "axios";
import classes from "./Navbar.module.css";

const Navbar = () => {
  // const dispatch = useDispatch()
  //get products from store
  // const state = useSelector(state => state.productsReducer)
  // console.log('products',state);

  const [tops, setTops] = useState(false);
  const [bottoms, setBottoms] = useState(false);
  const [jewelry, setJewelry] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [kids, setKids] = useState(false);

  const handleTops = (e) => {
    e.preventDefault();
    setTops(!tops);
    setBottoms(false);
    setJewelry(false);
    setAccessories(false);
    setKids(false);
  };

  const handleBottoms = (e) => {
    e.preventDefault();
    setBottoms(!bottoms);
    setTops(false);
    setJewelry(false);
    setAccessories(false);
    setKids(false);
  };

  const handleJewelry = (e) => {
    e.preventDefault();
    setJewelry(!jewelry);
    setTops(false);
    setBottoms(false);
    setAccessories(false);
    setKids(false);
  };

  const handleAccessories = (e) => {
    e.preventDefault();
    setAccessories(!accessories);
    setTops(false);
    setBottoms(false);
    setJewelry(false);
    setKids(false);
  };

  const handleKids = (e) => {
    e.preventDefault();
    setKids(!kids);
    setTops(false);
    setBottoms(false);
    setJewelry(false);
    setAccessories(false);
  };
  //get products
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    // dispatch(listProducts())
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data.products))
      .then((err) => console.log(err));
  }, []);
  console.log("products", products);

  return (
    <>
      <div className={classes.navbarWrapper}>
        <nav className={`${classes.navbar} container`}>
          {/* <Link to="/"> </Link>
          <Link to="/"> </Link>
          <Link to="/abc">TRAININGS</Link>
          <Link to="/abc">EVENTS</Link>
          <Link to="/abc">OUR STORY</Link> */}
          <ul className={classes.mainNav}>
            <li>
              <button onClick={handleTops}>
                Tops <i class="fas fa-sort-down"></i>
              </button>
              {tops && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.topsMen}>
                    <Link to="/">
                      MEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/category/T-SHIRT">T-SHIRT</Link>
                        <Link to="/category/JUMPERS">JUMPERS</Link>
                        <Link to="/category/HOODIES">HOODIES</Link>
                        <Link to="/category/SHIRTS">SHIRTS</Link>
                        <Link to="/category/MUSCLE TEES & TANKS">MUSCLE TEES & TANKS</Link>
                        <Link to="/category/BASIC">BASIC</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.topsWomen}>
                    <Link to="/">
                      WOMEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/">T-SHIRT</Link>
                        <Link to="/">JUMPERS</Link>
                        <Link to="/">HOODIES</Link>
                        <Link to="/">SHIRTS</Link>
                        <Link to="/">MUSCLE TEES & TANKS</Link>
                        <Link to="/">BASIC</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleBottoms}>
                Bottoms <i class="fas fa-sort-down"></i>
              </button>
              {bottoms && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.bottomsMen}>
                    <Link to="/">
                      MEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/">PANTS</Link>
                        <Link to="/">SHORTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.bottomsWomen}>
                    <Link to="/">
                      WOMEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link to="/">PANTS</Link>
                        <Link to="/">SHORTS</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleJewelry}>
                Jewelry <i class="fas fa-sort-down"></i>
              </button>
              {jewelry && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.jewelryMen}>
                    <Link to="/">
                      MEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link>CHAINS</Link>
                        <Link>BRACELETS</Link>
                        <Link>WATCHES</Link>
                        <Link>RINGS</Link>
                        <Link>EARRING</Link>
                        <Link>GRILLS</Link>
                        <Link>PENONTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.jewelryWomen}>
                    <Link to="/">
                      WOMEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link>CHAINS</Link>
                        <Link>BRACELETS</Link>
                        <Link>WATCHES</Link>
                        <Link>RINGS</Link>
                        <Link>EARRING</Link>
                        <Link>GRILLS</Link>
                        <Link>PENONTS</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleAccessories}>
                Accessories <i className="fas fa-sort-down"></i>
              </button>
              {accessories && (
                <ul className={classes.dropdownNav}>
                  <li className={classes.accessoriesMen}>
                    <Link to="/">
                      MEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link>HATS</Link>
                        <Link>BEANIES</Link>
                        <Link>BELTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={classes.accessoriesWomen}>
                    <Link to="/">
                      WOMEN <i className="fas fa-sort-down"></i>
                    </Link>
                    <ul className={classes.multiDropdownNav}>
                      <li>
                        <Link>HATS</Link>
                        <Link>BEANIES</Link>
                        <Link>BELTS</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={handleKids}>
                Kids <i className="fas fa-sort-down"></i>
              </button>
              {kids && (
                <ul className={classes.dropdownNav}>
                  <li>
                    <Link>TOPS</Link>
                    <Link>BOTTOMS</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
