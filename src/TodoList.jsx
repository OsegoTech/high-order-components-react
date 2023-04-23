import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      setTodos(json);
      console.log(todos);
    };
    fetchTodos();
  }, []);

  //   let renderUsers = users.map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p>
  //           <strong>{user.name}</strong>
  //         </p>
  //       </div>
  //     );
  //   });

  let filteredTodos = todos
    .slice(0, 10)
    .filter(({ title }) => {
      return title.indexOf(term) >= 0;
    })
    .map((todo) => {
      return (
        <div key={todo.userId}>
          <p>
            <strong>{todo.title}</strong>
          </p>
        </div>
      );
    });
  return (
    <>
      <h2>Todos</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{filteredTodos}</div>
    </>
  );
};

export default TodoList;
