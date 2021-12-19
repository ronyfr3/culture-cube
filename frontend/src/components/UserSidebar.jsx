import React, {useState} from "react";
import { Link } from 'react-router-dom'

import classes from './UserSidebar.module.css'

const UserSidebar = () => {
  // const [active, secActive] = useState('active')
  return (
    <section className={classes.userSidebarSection}>
      <div className={classes.topUserSidebar}>
        <div className={classes.userSidebarLogo}>
          <Link to="/">
          <img src="/icons/po_logo.png" alt="" />
          </Link>
        </div>
        <ul>
          <li className={classes.active}>
            <i className="fas fa-th-large"></i>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li>
            <i className="fas fa-shopping-cart"></i>
            <Link to="/user/wishlist">WISTLIST</Link>
          </li>
          <li>
            <i className="fas fa-shopping-bag"></i>
            <Link to="/user/orderlist">ORDERLIST</Link>
          </li>
          {/* <li>
            <i className="fas fa-cog"></i>
            <Link to="/admin/settings">SETTINGS</Link>
          </li> */}
        </ul>
      </div>
      <div className={classes.bottomUserSidebar}>
        <div className={classes.bottomUserSidebarWrapper}>
          <div className={classes.bottomUserSidebarImage}>
            <img src="/images/testimonial.jpg" alt="" />
          </div>
          <div className={classes.bottomUserName}>
            <h5>Emily Blunt</h5>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSidebar;
