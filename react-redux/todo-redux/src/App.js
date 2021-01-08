import React from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const todos = useSelector(st => st.todos); 
  const dispatch = useDispatch(); 

  function addTodo(newTodo) {
    dispatch({ type: "ADD_TODO", todo: newTodo });
  }

  function deleteTodo(id) {
    dispatch({type: "REMOVE_TODO", id });
  }

  const todoComps = todos.map(t => (
    <Todo
      key={t.id}
      text={t.text}
      deleteTodo={() => deleteTodo(t.id)}
    />))

  return (
    <div className="App">
        <NewTodoForm addTodo={addTodo} />
        {todoComps}
    </div>
  );
}

export default App;
