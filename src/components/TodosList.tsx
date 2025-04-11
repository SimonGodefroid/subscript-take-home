import { TodoItem } from './TodoItem';
import { Todo } from '../types';
import './TodoList.css';

export function TodosList({
  todos,
  handleChangeProps,
  deleteTodoProps,
  addCommentToTodoItemProps,
}: {
  todos: Todo[];
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  addCommentToTodoItemProps: (id: string, comment: string) => void;
}) {
  return (
    <ul id="list-wrapper">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          addCommentToTodoItemProps={addCommentToTodoItemProps}
        />
      ))}
    </ul>
  );
}
