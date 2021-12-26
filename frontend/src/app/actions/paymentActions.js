import {PAYMENT_REQUEST,
PAYMENT_SUCCESS ,
PAYMENT_FAIL}  from '../constants/paymentConstants'
import axios from 'axios'

export const payment =(paymentData)=>
async dispatch => {
  console.log(paymentData);
  try {
      dispatch({ type: PAYMENT_REQUEST });
      const { data } = await axios.post(`/api/payment`,paymentData);
    //   console.log(data)
      dispatch({ type: PAYMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PAYMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };