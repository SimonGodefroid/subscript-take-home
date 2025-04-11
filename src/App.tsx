import { useReducer } from 'react';
import './App.css';
import { TodoContainer } from './components/TodoContainer';
import { TodosContext, TodosDispatchContext } from './contexts/TodosContext';
import { initialTodos, todosReducer } from './reducers';

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <div>
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider value={dispatch}>
          <TodoContainer />
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
