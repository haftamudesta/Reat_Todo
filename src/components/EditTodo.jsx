import { useState } from 'react';
import propTypes from 'prop-types';

const EditTodo = ({ editTodo, task }) => {
  const [todo, setTodo] = useState('');

  const handleTodo = (e) => {
    e.preventDefault();
    editTodo(todo, task.id);
    setTodo('');
  };
  return (
    <div>
      <form className="Todo__Form" onSubmit={handleTodo}>
        <input
          type="text"
          value={todo}
          className="todo_input"
          placeholder="update task"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">update Task</button>
      </form>
    </div>
  );
};

EditTodo.propTypes = {
  task: propTypes.object,
  editTodo: propTypes.func,
};

export default EditTodo;
