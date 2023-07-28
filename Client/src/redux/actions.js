import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type";
import axios from "axios";

export const añadir = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      if (!data.length) throw Error("no favorite characters");

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const borrar = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      if (!data.length) throw Error("no favorite characters");

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filter = (gender) => {
  return { type: FILTER, payload: gender };
};

export const order = (order) => {
  return { type: ORDER, payload: order };
};
