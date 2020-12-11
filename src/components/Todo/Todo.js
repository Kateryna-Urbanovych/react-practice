function Todo({ completed, text, onToggleCompleted, onDelete }) {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button type="button" className="TodoList__btn" onClick={onDelete}>
        Удалить
      </button>
    </>
  );
}

export default Todo;
