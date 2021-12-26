import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productsReducer";
import {
  userActiveReducer,
  userDetailsReducer,
  userSigninReducer,
  userSignupReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import { paymentReducer } from "./reducers/paymentReducer";
import { orderListReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  userActive: userActiveReducer,
  userDetails: userDetailsReducer,
  productsReducer: productListReducer,
  orderReducer: orderListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  payment: paymentReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  userSignin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const StateProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
