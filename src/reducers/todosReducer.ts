import { Todo } from "../types";
import { v4 as uuidv4 } from 'uuid';

export enum TodosAction {
  add = 'add',
  delete = 'delete',
  complete = 'complete',
  comment = 'comment',
}

export const initialTodos = [
  {
    id: uuidv4(),
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: uuidv4(),
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'Deploy to live server',
    completed: false,
  },
];


export type TodosActionCreator = | {
  type: TodosAction.add, title: string
} | {
  type: TodosAction.delete, id: string
} | {
  type: TodosAction.complete, id: string
} | {
  type: TodosAction.comment, id: string, comment: string
};

export function todosReducer(todos: Todo[], action: TodosActionCreator) {
  switch (action.type) {
    case TodosAction.add: {
      return [
        ...todos,
        {
          id: uuidv4(),
          title: action.title,
          completed: false,
        },
      ];
    }

    case TodosAction.complete: {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }

    case TodosAction.comment: {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, comment: action.comment };
        } else {
          return todo;
        }
      });
    }

    case TodosAction.delete: {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + (action as any).type);
    }
  }
}