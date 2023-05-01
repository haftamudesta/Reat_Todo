import { BiEditAlt } from 'react-icons/bi';
import { BsFillTrash3Fill } from 'react-icons/bs';
import propTypes from 'prop-types';
import './style.css';

const Todo = ({ task, todoCompleted, deleteTodo, editTodo }) => {
  return (
    <div className="Todos">
      <p
        onClick={() => todoCompleted(task.id)}
        className={`${task.completed ? 'completed' : ''}`}
      >
        <input type="checkbox" />
        {task.task}
      </p>
      <div className="edit__delete">
        <p className="edit">
          <BiEditAlt onClick={() => editTodo(task.id)} />
        </p>
        <p>
          <BsFillTrash3Fill
            onClick={() => {
              deleteTodo(task.id);
            }}
          />
        </p>
      </div>
    </div>
  );
};

Todo.propTypes = {
  task: propTypes.func,
  todoCompleted: propTypes.func,
  deleteTodo: propTypes.func,
  editTodo: propTypes.func,
};

export default Todo;
