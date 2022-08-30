export const ADD_TODO = "ADD TODO";
export const DELETE_TODO = "DELETE TODO";
export const MARK_DONE = "MARK DONE";
export const FILTER_TODO = "FILTER TODO";

export interface ITodoData {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
}

export interface ITodoAddAction {
  type: typeof ADD_TODO;
  payload: ITodoData;
}

export interface ITodoDeleteAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export interface ITodoMarkAction {
  type: typeof MARK_DONE;
  payload: number;
}

export interface ITodoFilterAction {
  type: typeof FILTER_TODO;
  payload: boolean;
}

export type TodoAction = ITodoAddAction | ITodoDeleteAction | ITodoMarkAction | ITodoFilterAction;
