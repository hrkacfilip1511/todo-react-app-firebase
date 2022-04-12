import { useState } from "react";

const TodoForm = (props) => {
  const [inputVal, setInputVal] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo({ inputVal });
    setInputVal("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
