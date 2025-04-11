import { useState } from 'react';

export function InputTodo({
  addTodoProps,
}: {
  addTodoProps: (title: string) => void;
}) {
  const [title, setTitle] = useState('');

  const onChange = (e: React.BaseSyntheticEvent) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoProps(title);
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
