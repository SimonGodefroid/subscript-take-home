import { useContext, useState } from 'react';
import { TodosAction } from '../reducers';
import { TodosDispatchContext } from '../contexts';

export function InputTodo() {
  const dispatch = useContext(TodosDispatchContext);

  const [title, setTitle] = useState('');

  const onChange = (e: React.BaseSyntheticEvent) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch &&
      dispatch({
        type: TodosAction.add,
        title,
      });
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
}
