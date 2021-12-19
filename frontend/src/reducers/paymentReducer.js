import {PAYMENT_REQUEST,
    PAYMENT_SUCCESS ,
    PAYMENT_FAIL}  from '../constants/paymentConstants'

export const paymentReducer = (state = { msg:'' }, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return { loading: true, msg: ''};
    case PAYMENT_SUCCESS:
      return { loading: false, msg: action.payload };
    case PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};