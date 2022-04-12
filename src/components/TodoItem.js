import { FaRegCheckCircle } from "react-icons/fa";
import classes from "./TodoItem.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const [isChecked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked((prevCheked) => !prevCheked);
  };
  return (
    <div className={classes.todoItem}>
      <FaRegCheckCircle
        style={{
          color: `${isChecked ? "green" : "red"} `,
        }}
        className="checkButton"
        onClick={checkHandler}
      />
      <li
        style={{
          textDecoration: `${isChecked ? "line-through" : "none"}`,
          textDecorationColor: `${isChecked ? "green" : "none"}`,
        }}
        key={props.id}
        onClick={props.onRemoveItem.bind(this, props.id)}
      >
        {props.inputVal}
      </li>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  inputVal: PropTypes.string,
};
export default TodoItem;
