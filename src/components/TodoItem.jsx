const TodoItem = ({ todo, deleteTodo }) => {
    return (
      <li>
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>
            ❌ </button>
      </li>
    );
  };
  
  export default TodoItem;