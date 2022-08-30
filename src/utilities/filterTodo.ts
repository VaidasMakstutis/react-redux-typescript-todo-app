import { ITodoData } from "../store/types";

const filterTodo = (todos: ITodoData[], status: string) => {
  switch (status) {
    case "ACTIVE":
      return todos.filter(todo => todo.isComplete === false);

    case "DONE":
      return todos.filter(todo => todo.isComplete === true);
    default:
      return todos;
  }
};

export default filterTodo;
