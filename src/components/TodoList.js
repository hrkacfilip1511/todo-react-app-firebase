import classes from "./TodoList.module.css";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { FaHandPointUp } from "react-icons/fa";
const TodoList = (props) => {
  const onRemoveItemHandler = (id) => {
    props.onRemoveItem(id);
  };

  let content = (
    <span className={classes.empty_list}>
      No Todos yet. Add some. <FaHandPointUp className="finger_pointer" />
    </span>
  );

  if (props.todos.length > 0) {
    content = props.todos.map((todo) => {
      return (
        <TodoItem
          id={todo.id}
          inputVal={todo.inputVal}
          onRemoveItem={onRemoveItemHandler}
        />
      );
    });
  }

  return (
    <div>
      <div>
        <h3>Todo List:</h3>
        <ul>{content}</ul>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  onRemoveItem: PropTypes.func.isRequired,
};
export default TodoList;
