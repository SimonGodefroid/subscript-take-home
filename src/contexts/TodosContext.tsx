import { createContext } from 'react';
import { Todo } from '../types';
import { TodosActionCreator } from '../reducers';

export const TodosContext = createContext<Todo[] | []>([]);
export const TodosDispatchContext =
  createContext<React.Dispatch<TodosActionCreator> | null>(null);
