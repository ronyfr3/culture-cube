import React from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, addToCart } from "../actions/cartActions"
import classes from "./ShoppingCart.module.css"

const ShoppingCart = () => {
  // const { cartItems } = useSelector((state) => state.cart)
  // const dispatch = useDispatch()
  // const removeCartHandler = (id) => {
  //   console.log(id)
  //   dispatch(removeFromCart(id))
  // }

  // const qtyIncrementHandler = (id, qty) => {
  //   dispatch(addToCart(id, qty + 1));
  // };

  // const qtyDecrementHandler = (id, qty) => {
  //   if (qty > 1) {
  //     dispatch(addToCart(id, qty - 1));
  //   }
  // };
  // const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  // const tax =
  // const totalItems = cartItems.reduce((a, c) => a + c.qty, 0)

  // const cartTotalPrice = totalPrice - totalItems
  return (
    <section className={classes.shoppingCartSection}>
      <div className={`${classes.shoppingCartWrapper} container`}>
        <div className={classes.shoppingCartLeft}>
          <div className={classes.productAttributes}>
            <h5>Products</h5>
            <h5>Price</h5>
            <h5>Qty</h5>
            <h5>Total</h5>
            {/* <h5></h5> */}
          </div>
          <div className={classes.cartItems}>
            {/* {cartItems?.map((item) => ( */}
              <div className={classes.detailsCartItem}>
                <div className={classes.productCart}>
                  <img src="/images/product_1.png" alt="" />
                  <div className={classes.detailsProductName}>
                    <h4>werwer</h4>
                    <p>Cal: fsdfsdf</p>
                    <p>Color: Black</p>
                  </div>
                </div>
                <div className={classes.priceCart}>
                  <p>$ 23423 Aud</p>
                </div>
                <div className={classes.quantityCart}>
                  <button><i className="fas fa-angle-up"></i></button>
                  <span>0</span>
                  <button><i className="fas fa-angle-down"></i></button>
                </div>
                <div className={classes.totalCart}>
                  <p>$ 234234 AUD</p>
                </div>
                <button
                  // onClick={() => removeCartHandler(item.product)}
                  className={classes.deleteCart}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className={classes.detailsCartItem}>
                <div className={classes.productCart}>
                  <img src="/images/product_1.png" alt="" />
                  <div className={classes.detailsProductName}>
                    <h4>werwer</h4>
                    <p>Cal: fsdfsdf</p>
                    <p>Color: Black</p>
                  </div>
                </div>
                <div className={classes.priceCart}>
                  <p>$ 23423 Aud</p>
                </div>
                <div className={classes.quantityCart}>
                  <button><i className="fas fa-angle-up"></i></button>
                  <span>0</span>
                  <button><i className="fas fa-angle-down"></i></button>
                </div>
                <div className={classes.totalCart}>
                  <p>$ 234234 AUD</p>
                </div>
                <button
                  // onClick={() => removeCartHandler(item.product)}
                  className={classes.deleteCart}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className={classes.detailsCartItem}>
                <div className={classes.productCart}>
                  <img src="/images/product_1.png" alt="" />
                  <div className={classes.detailsProductName}>
                    <h4>werwer</h4>
                    <p>Cal: fsdfsdf</p>
                    <p>Color: Black</p>
                  </div>
                </div>
                <div className={classes.priceCart}>
                  <p>$ 23423 Aud</p>
                </div>
                <div className={classes.quantityCart}>
                  <button><i className="fas fa-angle-up"></i></button>
                  <span>0</span>
                  <button><i className="fas fa-angle-down"></i></button>
                </div>
                <div className={classes.totalCart}>
                  <p>$ 234234 AUD</p>
                </div>
                <button
                  // onClick={() => removeCartHandler(item.product)}
                  className={classes.deleteCart}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            {/* ))} */}
            <div className={classes.cartSubtotal}>
              <div className={classes.subtotal}>
                <p>SUBTOTAL</p>
              </div>
              <div className={classes.subtotalAmount}>
                <p>$ 32423AUD</p>
              </div>
            </div>
            <div className={classes.shoppingCartButtons}>
              <Link to="/checkout" className={classes.continueBtn}>CONTINUE SHOPPING</Link>
            </div>
          </div>
        </div>
        <div className={classes.shoppingCartRight}>
          <h4>Summary</h4>
          <ul>
            <li>
              <p>Items</p>
              <span>32423</span>
            </li>
            <li>
              <p>Subtotal</p>
              <span>23423 aud</span>
            </li>
            <li>
              <p>Shipping</p>
              <span>200.00 aud</span>
            </li>
            <li>
              <p>Tax(25%)</p>
              <span>350.00 aud</span>
            </li>
            <li>
              <p>Discount</p>
              <span>-150.00 aud</span>
            </li>
            <li>
              <div className={classes.coupon}>
              <p>Have a coupon?</p>
              <input type="text" placeholder="Enter voucher code" />
              </div>
              <button className={classes.applyBtn}>Apply</button>
            </li>
            <li>
              <p>Total</p>
              <span>$9384923</span>
            </li>
            <li>
              <button className={classes.checkoutBtn}>Go to checkout</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
