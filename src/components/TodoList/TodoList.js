import classNames from 'classnames';
import './TodoList.scss';
import Todo from '../Todo';

function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            completed={completed}
            text={text}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
