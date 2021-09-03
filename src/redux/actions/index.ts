import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";
import axios from "../../utils/axios";

export const addTodo = (title: String) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionType.ADDLOADING });
    const res = await axios().post("/", { title });
    dispatch({
      type: ActionType.ADDED,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({ type: ActionType.ERROR, payload: err.response.data });
  }
};

export const fetchTodos = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionType.FETCHLOADING });
    const res = await axios().get("/");
    dispatch({
      type: ActionType.FETCHED,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({ type: ActionType.ERROR, payload: err.response.data });
  }
};

export const updateTodo =
  (id: String, title: String) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ActionType.ADDLOADING });
      const res = await axios().patch(`/${id}`, { title });
      dispatch({
        type: ActionType.UPDATED,
        payload: res.data,
      });
    } catch (err: any) {
      dispatch({ type: ActionType.ERROR, payload: err.response.data });
    }
  };

export const deleteTodo = (id: String) => async (dispatch: Dispatch) => {
  try {
    const res = await axios().delete(`/${id}`);
    dispatch({
      type: ActionType.DELETED,
      payload: id,
    });
  } catch (err: any) {
    dispatch({ type: ActionType.ERROR, payload: err.response.data });
  }
};
