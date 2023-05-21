import { useState } from "react";

function TodoForm(props) {
  const [validTodo, setValidTodo] = useState(true);
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
    console.log(enteredTodo);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTodo.length > 0) {
      setValidTodo(true);
      const todoData = {
        id: Math.random().toString(),
        todo: enteredTodo.trim(),
        completed: false,
      };
      props.onSaveTodoData(todoData);
      setEnteredTodo("");
    } else {
      setValidTodo(false);
    }
  };

  return (
    <div className="flex-grow ">
      <form onSubmit={submitHandler}>
        <input
          className="w-full h-[24px] text-dgrayblue dark:bg-vdarkdesatblue transition-colors"
          type="text"
          placeholder="Create a new todo..."
          value={enteredTodo}
          onChange={todoChangeHandler}
        />
      </form>
    </div>
  );
}

export default TodoForm;
