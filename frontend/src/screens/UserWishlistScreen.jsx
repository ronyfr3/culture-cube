import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSidebar from '../components/UserSidebar'

import Message from "../components/Message";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getUserDetails } from "../actions/userActions";

import classes from "./UserWishlistScreen.module.css";

const UserWishlistScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user, error } = userDetails;
  console.log(user);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/signin-signup");
  //   } else {
  //     if (!user.name) {
  //       dispatch(getUserDetails("profile"));
  //     } else {
  //       setName(user.name);
  //       setEmail(user.email);
  //     }
  //   }
  // }, [history, dispatch, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <section className={classes.userWishlistSection}>
        {/* <div className={`${classes.userProfileWrapper} container`}>
          <div className={classes.userProfileForm}>
            <h3>User Profile</h3>
            <form onSubmit={submitHandler}>
              {error && <Message message={error} color="#EF5350" />}
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder=""
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">E-mail address</label>
              <input
                type="email"
                placeholder=""
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder=""
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className={`btn ${classes.signupBtn}`}>
                Update
              </button>
            </form>
          </div>
          <div className={classes.userProfileOrder}>
            <h3>My Orders</h3>
          </div>
        </div> */}
        <div className={classes.userWishlistContent}>
        <div className={classes.userWishlistLeft}>
        <UserSidebar />
        </div>
        <div className={classes.userWishlistRight}>
            <div className={classes.userAllWishlist}>
                <div className={classes.userAllWishlistLeft}>
                    <div>
                        <img src="/images/user_wishlist.png" alt="" />
                    </div>
                    <div>
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quae.</p>
                        <div className={classes.review}>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span className={classes.countInStock}>In Stock</span>
                    </div>
                </div>
                <div className={classes.userAllWishlistRight}>
                    <p className="times"><i className="fas fa-times"></i></p>
                        <h3>$23904</h3>
                        <button className={classes.addCartBtn}>Add to cart</button>
                </div>
            </div>
            <div className={classes.userAllWishlist}>
                <div className={classes.userAllWishlistLeft}>
                    <div>
                        <img src="/images/user_wishlist.png" alt="" />
                    </div>
                    <div>
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quae.</p>
                        <div className={classes.review}>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span className={classes.countInStock}>In Stock</span>
                    </div>
                </div>
                <div className={classes.userAllWishlistRight}>
                    <p className="times"><i className="fas fa-times"></i></p>
                        <h3>$23904</h3>
                        <button className={classes.addCartBtn}>Add to cart</button>
                </div>
            </div>
            <div className={classes.userAllWishlist}>
                <div className={classes.userAllWishlistLeft}>
                    <div>
                        <img src="/images/user_wishlist.png" alt="" />
                    </div>
                    <div>
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quae.</p>
                        <div className={classes.review}>
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span className={classes.countInStock}>In Stock</span>
                    </div>
                </div>
                <div className={classes.userAllWishlistRight}>
                    <p className="times"><i className="fas fa-times"></i></p>
                        <h3>$23904</h3>
                        <button className={classes.addCartBtn}>Add to cart</button>
                </div>
            </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserWishlistScreen;
