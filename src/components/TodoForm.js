import { useState } from "react";
import classes from "./TodoForm.module.css";
import PropTypes from "prop-types";

const TodoForm = (props) => {
  const [inputVal, setInputVal] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo({ inputVal });
    setInputVal("");
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div className={classes.btn}>
          <button type="submit" disabled={!inputVal} className={classes.button}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};
TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
export default TodoForm;
