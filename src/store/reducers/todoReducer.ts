import { ADD_TODO, DELETE_TODO, MARK_DONE, FILTER_TODO, ITodoData, TodoAction } from "../types";

const init = {
  todos: [
    {
      title: "Task1",
      description: "This is task1",
      isComplete: false,
      id: 1234567
    },
    {
      title: "Task2",
      description: "This is task2",
      isComplete: true,
      id: 1234569
    }
  ],
  filter: "ALL"
};

const deleteTodo = (todos: ITodoData[], id: number) => {
  return (todos = todos.filter(todo => todo.id !== id));
};

const Todos = (state = init, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO: {
      let todos = [...state.todos];
      todos = [action.payload, ...todos];
      return {
        ...state,
        todos
      };
    }
    case MARK_DONE: {
      let todos = [...state.todos];
      todos = todos.map(todo => {
        if (todo.id === action.payload) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      return {
        ...state,
        todos
      };
    }
    case FILTER_TODO: {
      return {
        ...state,
        filter: action.payload
      };
    }
    case DELETE_TODO: {
      const todos = deleteTodo(state.todos, action.payload);
      return {
        ...state,
        todos
      };
    }
    default:
      return state;
  }
};

export default Todos;
