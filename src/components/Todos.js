import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { FaSpinner } from "react-icons/fa";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://todo-react-a2b00-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    )
      .then((response) => {
        setLoading(false);
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
    setLoading(true);
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
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        setTodos((prevTodo) => [...prevTodo, { id: data.name, ...todo }]);
      });
  };
  const removeItemHandler = (todoId) => {
    setLoading(true);
    fetch(
      `https://todo-react-a2b00-default-rtdb.europe-west1.firebasedatabase.app/todos/${todoId}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setLoading(false);
      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
    });
  };
  return (
    <div>
      <TodoForm onAddTodo={addTodosHandler} />
      {isLoading && <FaSpinner className="spinner_loader" />}
      <TodoList todos={todos} onRemoveItem={removeItemHandler} />
    </div>
  );
};
export default Todos;
