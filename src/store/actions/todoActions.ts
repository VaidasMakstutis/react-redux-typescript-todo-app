import { ADD_TODO, DELETE_TODO, MARK_DONE, FILTER_TODO, ITodoData } from "../types";

export const addTodo = (todo: ITodoData) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const markDone = (id: number) => {
  return {
    type: MARK_DONE,
    payload: id
  };
};

export const filterTodo = (activeFilter: boolean) => {
  return {
    type: FILTER_TODO,
    payload: activeFilter
  };
};
