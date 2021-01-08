import React from 'react';

function Todo ({key, text,  deleteTodo}){
    function handleDeleteTodo() {
        deleteTodo(key);
      }
    return (
        <div>
            <p> text: {text} </p>
            <button onClick={handleDeleteTodo}>Delete me</button>
        </div>
    )
}

export default Todo;