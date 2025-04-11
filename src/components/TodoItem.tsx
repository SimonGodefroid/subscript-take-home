import { useContext, useState } from 'react';
import { Todo } from '../types';
import './TodoItem.css';
import { TodosAction } from '../reducers';
import { TodosDispatchContext } from '../contexts';
export function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useContext(TodosDispatchContext);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title, comment } = todo;
  const [commentText, setCommentText] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleShowCommentForm = () => {
    setShowCommentForm(!showCommentForm);
    setCommentText('');
  };
  const handleChangeCommentText = (e: React.BaseSyntheticEvent) => {
    setCommentText(e.target.value);
  };

  const handleSubmitComment = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleShowCommentForm();
    dispatch &&
      dispatch({
        type: TodosAction.comment,
        id,
        comment: commentText,
      });
  };
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch &&
            dispatch({
              type: TodosAction.complete,
              id,
            });
        }}
      />
      <button
        onClick={() => {
          dispatch &&
            dispatch({
              type: TodosAction.delete,
              id,
            });
        }}
      >
        Delete
      </button>
      <span style={completed ? completedStyle : undefined}>{title}</span>
      {!showCommentForm && (
        <button onClick={handleShowCommentForm}>Add Comment</button>
      )}
      {showCommentForm ? (
        <form className="comment-form" onSubmit={handleSubmitComment}>
          <label htmlFor="comment">Type your comment</label>
          <textarea
            id="comment"
            name="comment"
            value={commentText}
            onChange={handleChangeCommentText}
          ></textarea>
          <div className="buttons-container">
            <button onClick={handleShowCommentForm}>Cancel</button>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
      ) : null}
      {comment ? <p>{comment}</p> : null}
    </li>
  );
}
