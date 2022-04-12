import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(
      "https://todo-react-a2b00-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const loadedTodos = [];
        for (const key in data) {
          loadedTodos.push({
            id: key,
            inputVal: data[key].inputVal,
          });
        }
        setTodos(loadedTodos);
      });
  }, []);
  const addTodosHandler = (todo) => {
    fetch(
      "https://todo-react-a2b00-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos((prevTodo) => [...prevTodo, { id: data.name, ...todo }]);
      });
  };
  const removeItemHandler = (todoId) => {
    fetch(
      `https://todo-react-a2b00-default-rtdb.europe-west1.firebasedatabase.app/todos/${todoId}.json`,
      {
        method: "DELETE",
      }
    ).then(
      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId))
    );
  };
  return (
    <div>
      <TodoForm onAddTodo={addTodosHandler} />
      <TodoList todos={todos} onRemoveItem={removeItemHandler} />
    </div>
  );
};
export default Todos;
