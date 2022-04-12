import classes from "./TodoList.module.css";

import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const onRemoveItemHandler = (id) => {
    props.onRemoveItem(id);
  };

  let content = (
    <span className={classes.empty_list}>No Todos yet. Add some.</span>
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

export default TodoList;
