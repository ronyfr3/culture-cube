import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSidebar from '../components/UserSidebar'

import Message from "../components/Message";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getUserDetails } from "../actions/userActions";

import classes from "./UserProfileScreen.module.css";

const UserProfileScreen = ({ history }) => {
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
      <section className={classes.userProfileSection}>
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
        <div className={classes.userProfileContent}>
        <div className={classes.userProfileLeft}>
        <UserSidebar />
        </div>
        <div className={classes.userProfileRight}>
          <div className={classes.profileAndDetails}>
            <div className={classes.profile}>
              <img src="/images/user_profile.png" alt="" />
            </div>
            <div className={classes.details}>
              <div>
                <h3>John Doe</h3>
              <img src="/icons/viewed.png" alt="" /> 
              <p>Recently viewed</p>
              </div>
              <div>
              <img src="/icons/reviewed.png" alt="" /> 
              <p>To be reviewed</p>
              </div>
              <div>
              <img src="/icons/shipping.png" alt="" /> 
              <p>Shipping</p>
              </div>
              <div>
              <img src="/icons/coupon.png" alt="" /> 
              <p>Coupons</p>
              </div>
            </div>
          </div>
          <form className={classes.userProfileForm}>
            <div>
              <label htmlFor="name"> Name
              </label>
              <input type="text" id="name"  />
            </div>
            <div>
              <label htmlFor="email"> Email
                
              </label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password"> Password
                
              </label>
              <input type="password" id="password"  />
            </div>
            <div className={classes.userProfileButtons}>
              <button className={classes.saveBtn}>Save changes</button>
              <button className={classes.cancelBtn}>Cancel</button>
            </div>
          </form>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProfileScreen;
