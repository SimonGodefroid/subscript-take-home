import { TodoItem } from './TodoItem';
import { Todo } from '../types';
import './TodoList.css';

export function TodosList({
  todos,
}: {
  todos: Todo[];
}) {
  return (
    <ul id="list-wrapper">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
