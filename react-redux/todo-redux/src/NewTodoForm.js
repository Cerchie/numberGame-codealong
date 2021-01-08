import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const DEFAULT_FORM = {
  text: ""
};

function NewTodoForm({ addTodo }) {
  const [form, setForm] = useState(DEFAULT_FORM);

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ ...form, id: uuidv4() });
    setForm(DEFAULT_FORM);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">text</label>
        <input
          type="text"
          name="text"
          id="todo-text"
          onChange={handleChange}
          value={form.text}
        />
        <button type="submit" id="form_submit">
          Add Todo!
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;