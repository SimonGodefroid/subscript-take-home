import { TodoItem } from './TodoItem';
import { Todo } from '../types';

export function TodosList({
  todos,
  handleChangeProps,
  deleteTodoProps,
}: {
  todos: Todo[];
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  );
}
