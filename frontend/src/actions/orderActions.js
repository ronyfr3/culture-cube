import {
   FETCH_ORDERS_REQUEST,
   FETCH_ORDERS_SUCCESS,
   FETCH_ORDERS_FAILURE,
   FETCH_ORDER_REQUEST,
   FETCH_ORDER_SUCCESS,
   FETCH_ORDER_FAILURE
  } from '../constants/orderConstants'
import axios from 'axios';

export const allOrders =()=>
  async dispatch => {
    try {
      dispatch({ type: FETCH_ORDERS_REQUEST });

      const { data } = await axios.get(`/api/orders`);

      dispatch({ type: FETCH_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: FETCH_ORDERS_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const singleOrder = (id) => async (dispatch) => {
    try {
      dispatch({ type: FETCH_ORDER_REQUEST })
  
      const { data } = await axios.get(`/api/product/${id}`)
  
      dispatch({
        type: FETCH_ORDER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: FETCH_ORDER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }