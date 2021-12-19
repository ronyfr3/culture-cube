import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSidebar from '../components/UserSidebar'
import ReactTable2 from '../screens/ReactTable2'
import Message from "../components/Message";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getUserDetails } from "../actions/userActions";

import classes from "./UserOrderlistScreen.module.css";

const UserOrderlistScreen = ({ history }) => {
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
      <section className={classes.userOrderlistSection}>
        <div className={classes.userOrderlistContent}>
        <div className={classes.userOrderlistLeft}>
        <UserSidebar />
        </div>   
        <div className={classes.userOrderlistRight}>
            <ReactTable2 />
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserOrderlistScreen;
