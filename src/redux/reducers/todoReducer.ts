import { ActionType } from "../actionTypes/index";

type Action = {
  type: string;
  payload: { success: boolean; data: any; message: string };
};
type State = {
  addLoading: boolean;
  fetchLoading: boolean;
  todos: Array<any>;
};
const initialState = {
  addLoading: false,
  fetchLoading: false,
  todos: [],
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ADDLOADING:
      return {
        ...state,
        addLoading: true,
      };
    case ActionType.ADDED:
      return {
        ...state,
        addLoading: false,
        todos: [...state.todos, action.payload.data],
      };
    case ActionType.FETCHLOADING:
      return {
        ...state,
        fetchLoading: true,
      };
    case ActionType.FETCHED:
      return {
        ...state,
        fetchLoading: false,
        todos: action.payload.data,
      };
    case ActionType.UPDATED:
      return {
        ...state,
        addLoading: false,
        todos: state.todos
          .filter((td) => td._id !== action.payload.data._id)
          .concat(action.payload.data),
      };
    case ActionType.DELETED:
      return {
        ...state,
        todos: state.todos.filter((td) => td._id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
