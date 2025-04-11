import { ReactNode, useReducer } from 'react';
import { TodosContext, TodosDispatchContext } from '../contexts';
import { initialTodos, todosReducer } from '../reducers';

export function TestWrapper({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}
