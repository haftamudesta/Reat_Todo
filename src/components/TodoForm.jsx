import { useState } from 'react';
import './style.css';
import propTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleTodo = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };
  return (
    <div>
      <form className="Todo__Form" onSubmit={handleTodo}>
        <input
          type="text"
          value={todo}
          className="todo_input"
          placeholder="Enter your task here"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: propTypes.func,
};

export default TodoForm;
