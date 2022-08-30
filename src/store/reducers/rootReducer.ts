import { combineReducers } from "redux";
import Todos from "./todoReducer";

const rootReducer = combineReducers({
  todos: Todos
});

export default rootReducer;
