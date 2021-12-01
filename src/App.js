import "./App.css";
import { useState } from "react";
let globalID = 0;
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createToDo(event) {
    console.log("Inside the create do", globalID);
    event.preventDefault();
    if (!task.match(/\S/)) {
      alert("Empty");
    } else {
      setTodos((oldTodos) => {
        setTask("");
        return [...oldTodos, { todo: task, id: globalID++ }];
      });
    }
  }
  function deleteItem(itemID) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div className="App">
      <h1>To Do app</h1>
      <form onSubmit={createToDo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Click Todo</button>
      </form>

      <ul className="todo">
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>
                {item.id} - {item.todo}
              </li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
