import React, { useEffect, useState } from "react";
import axios from "axios";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <React.Fragment key={todo.id}>
            <span>{todo.id}</span>
            <div>{todo.title}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Todos;
