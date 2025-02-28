import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const Submit = () => {
    if (task) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={Submit}>Add</button>
    </div>
  );
};

export default TodoInput;