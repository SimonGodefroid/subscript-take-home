import { TodosList } from './TodosList';
import { Header } from './Header';
import { InputTodo } from './InputTodo';
import { useContext } from 'react';
import { TodosContext } from '../contexts';

export function TodoContainer() {
  const todos = useContext(TodosContext);

  return (
    <div className="container">
      <Header />
      <InputTodo />
      <TodosList todos={todos} />
    </div>
  );
}
