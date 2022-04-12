import classes from "./TodoList.module.css";

const TodoList = (props) => {
  let content = (
    <span className={classes.empty_list}>No Todos yet. Add some.</span>
  );

  if (props.todos.length > 0) {
    content = props.todos.map((todo) => {
      return (
        <li key={todo.id} onClick={props.onRemoveItem.bind(this, todo.id)}>
          {todo.inputVal}
        </li>
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

export default TodoList;
